import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export const dynamic = 'force-dynamic';

const CONFIG_PATH = path.join(process.cwd(), '.admin_config.json');

function getStoredPassword(): string {
  try {
    if (fs.existsSync(CONFIG_PATH)) {
      const data = JSON.parse(fs.readFileSync(CONFIG_PATH, 'utf-8'));
      if (data?.master_password) return String(data.master_password).trim();
    }
  } catch (err) {
    console.error("Error reading admin config:", err);
  }
  return 'admin0000';
}

function saveStoredPassword(newPassword: string): void {
  try {
    fs.writeFileSync(CONFIG_PATH, JSON.stringify({ master_password: newPassword.trim(), updated_at: new Date().toISOString() }), 'utf-8');
  } catch (err) {
    console.error("Error saving admin config:", err);
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { action, password, currentPassword, newPassword } = body;
    const currentStoredPassword = getStoredPassword();

    if (action === 'login') {
      if (!password) {
        return NextResponse.json({ error: 'Password is required' }, { status: 400 });
      }

      if (password.trim() === currentStoredPassword) {
        const response = NextResponse.json({ success: true });
        response.cookies.set('admin_auth', 'true', {
          path: '/',
          maxAge: 60 * 60 * 24 * 30, // 30 days
          sameSite: 'lax',
        });
        return response;
      } else {
        return NextResponse.json({ error: 'Incorrect master password' }, { status: 401 });
      }
    }

    if (action === 'change-password') {
      if (!currentPassword || !newPassword) {
        return NextResponse.json({ error: 'Both current and new passwords are required' }, { status: 400 });
      }

      if (currentPassword.trim() !== currentStoredPassword) {
        return NextResponse.json({ error: 'Current password is incorrect' }, { status: 400 });
      }

      if (newPassword.trim().length < 4) {
        return NextResponse.json({ error: 'New password must be at least 4 characters' }, { status: 400 });
      }

      saveStoredPassword(newPassword.trim());
      return NextResponse.json({ success: true, message: 'Password updated successfully across all devices' });
    }

    return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
