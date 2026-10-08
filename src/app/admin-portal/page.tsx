import { Users, FileText, CheckCircle, Clock, Search, Bell, Settings, MoreVertical, FileCheck, AlertCircle, Activity } from 'lucide-react';
import { createClient as createSupabaseClient } from '@supabase/supabase-js';
import Image from 'next/image';
import ClientTable from './ClientTable';
import AdminProtector from './AdminProtector';
import AdminLogoutButton from './AdminLogoutButton';
import GlobalDocuments from './GlobalDocuments';
import AdminSettings from './AdminSettings';
import AdminNotifications from './AdminNotifications';

export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';

export default async function AdminPortal({ searchParams }: { searchParams: any }) {
  // Use service role to bypass RLS for admin panel
  const supabase = createSupabaseClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );

  const tab = (await searchParams)?.tab || 'clients';

  // Fetch Real Data (wrapped in try-catch in case tables don't exist yet)
  let clients: any[] = [];
  let notifications: any[] = [];

  try {
    const { data: clientsData } = await supabase.from('clients').select('*, documents(*)');
    if (clientsData) clients = clientsData;

    const { data: notifData } = await supabase.from('notifications')
      .select('*, clients(full_name)')
      .order('created_at', { ascending: false })
      .limit(5);
    if (notifData) notifications = notifData;
  } catch (error) {
    console.error("Database not initialized yet", error);
  }

  // Calculate Real Stats
  const isFullyApproved = (client: any) => {
    const docs = client.documents || [];
    const sortedDocs = [...docs].sort((a: any, b: any) => new Date(b.uploaded_at).getTime() - new Date(a.uploaded_at).getTime());
    const getLatest = (type: string) => sortedDocs.find((d: any) => d.document_type === type);

    return getLatest('ID Card (Front)')?.status === 'Approved' &&
      getLatest('ID Card (Back)')?.status === 'Approved' &&
      getLatest('Utility Bill')?.status === 'Approved' &&
      getLatest('Bank Statement')?.status === 'Approved' &&
      getLatest('Gmail Credentials')?.status === 'Approved';
  };

  const totalClients = clients.length;
  const approvedClientsCount = clients.filter(c => isFullyApproved(c)).length;
  const pendingClientsCount = totalClients - approvedClientsCount;
  const unreadNotifs = notifications.filter(n => !n.is_read).length;

  return (
    <AdminProtector>
      <div className="min-h-screen bg-[#f9fafb] text-[#111] flex font-sans selection:bg-[#ff6b35] selection:text-white">
        {/* Sidebar */}
        <aside className="w-64 border-r border-gray-200 bg-white hidden md:flex flex-col shadow-sm z-20">
          <div className="h-20 flex items-center px-8 border-b border-gray-100">
            <Image src="/logo-new.png" alt="AmazonFast Logo" width={140} height={50} style={{ height: '50px', width: 'auto' }} className="object-contain" priority />
          </div>
          <nav className="flex-1 py-8 px-4 space-y-2">
            <a href="?tab=clients" className={`flex items-center gap-3 px-4 py-3 rounded-xl transition ${tab === 'clients' ? 'bg-gray-50 text-[#111] border border-gray-100 font-semibold' : 'text-gray-500 hover:bg-gray-50 hover:text-[#111] font-medium'}`}>
              <Users size={18} className={tab === 'clients' ? 'text-[#ff6b35]' : ''} />
              <span>Clients</span>
            </a>
            <a href="?tab=documents" className={`flex items-center gap-3 px-4 py-3 rounded-xl transition ${tab === 'documents' ? 'bg-gray-50 text-[#111] border border-gray-100 font-semibold' : 'text-gray-500 hover:bg-gray-50 hover:text-[#111] font-medium'}`}>
              <FileText size={18} className={tab === 'documents' ? 'text-[#ff6b35]' : ''} />
              <span>Global Documents</span>
            </a>
            <a href="?tab=settings" className={`flex items-center gap-3 px-4 py-3 rounded-xl transition ${tab === 'settings' ? 'bg-gray-50 text-[#111] border border-gray-100 font-semibold' : 'text-gray-500 hover:bg-gray-50 hover:text-[#111] font-medium'}`}>
              <Settings size={18} className={tab === 'settings' ? 'text-[#ff6b35]' : ''} />
              <span>Admin Settings</span>
            </a>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 flex flex-col overflow-hidden w-full">
          {/* Header */}
          <header className="h-16 md:h-20 border-b border-gray-200 flex items-center justify-between px-4 md:px-8 bg-white/80 backdrop-blur-md sticky top-0 z-10">
            <div className="flex items-center gap-2">
              <Image src="/logo-new.png" alt="AmazonFast Logo" width={100} height={30} className="object-contain md:hidden" priority />
              <h1 className="text-lg md:text-xl font-bold tracking-tight text-gray-900 hidden md:block">
                {tab === 'clients' ? 'Client Management' : tab === 'documents' ? 'Global Documents' : 'Admin Settings'}
              </h1>
            </div>
            <div className="flex items-center gap-6">
              <AdminNotifications notifications={notifications} unreadNotifs={unreadNotifs} />

              <AdminLogoutButton />
            </div>
          </header>

          {/* Mobile Navigation Row */}
          <nav className="md:hidden flex overflow-x-auto border-b border-gray-200 bg-white sticky top-16 z-10 hide-scrollbar shadow-sm">
            <a href="?tab=clients" className={`flex-1 min-w-[120px] text-center py-3.5 text-xs font-bold uppercase tracking-wider border-b-2 transition ${tab === 'clients' ? 'border-[#ff6b35] text-[#ff6b35]' : 'border-transparent text-gray-500 hover:text-gray-900'}`}>
              Clients
            </a>
            <a href="?tab=documents" className={`flex-1 min-w-[140px] text-center py-3.5 text-xs font-bold uppercase tracking-wider border-b-2 transition ${tab === 'documents' ? 'border-[#ff6b35] text-[#ff6b35]' : 'border-transparent text-gray-500 hover:text-gray-900'}`}>
              Global Docs
            </a>
            <a href="?tab=settings" className={`flex-1 min-w-[120px] text-center py-3.5 text-xs font-bold uppercase tracking-wider border-b-2 transition ${tab === 'settings' ? 'border-[#ff6b35] text-[#ff6b35]' : 'border-transparent text-gray-500 hover:text-gray-900'}`}>
              Settings
            </a>
          </nav>

          {/* Content */}
          <div className="flex-1 p-4 md:p-8 overflow-y-auto w-full">
            {tab === 'clients' && <ClientTable initialClients={clients} />}
            
            {tab === 'documents' && <GlobalDocuments clients={clients} />}

            {tab === 'settings' && <AdminSettings />}
          </div>
        </main>
      </div>
    </AdminProtector>
  )
}
