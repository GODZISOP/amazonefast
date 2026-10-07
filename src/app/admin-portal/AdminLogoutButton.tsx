"use client";

import { LogOut } from 'lucide-react';

export default function AdminLogoutButton() {
  const handleLogout = () => {
    localStorage.removeItem('admin_auth');
    window.location.reload();
  };

  return (
    <button 
      onClick={handleLogout}
      className="flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 rounded-full hover:bg-red-100 transition border border-red-100 text-sm font-bold shadow-sm"
    >
      <LogOut size={16} />
      Logout
    </button>
  );
}
