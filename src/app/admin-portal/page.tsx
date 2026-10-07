import { Users, FileText, CheckCircle, Clock, Search, Bell, Settings, MoreVertical, FileCheck, AlertCircle, Activity } from 'lucide-react';
import { createClient } from '@/utils/supabase/server';
import Image from 'next/image';
import ClientTable from './ClientTable';

export default async function AdminPortal() {
  const supabase = await createClient();

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
    <div className="min-h-screen bg-[#f9fafb] text-[#111] flex font-sans selection:bg-[#ff6b35] selection:text-white">
      {/* Sidebar */}
      <aside className="w-64 border-r border-gray-200 bg-white hidden md:flex flex-col shadow-sm z-20">
        <div className="h-20 flex items-center px-8 border-b border-gray-100">
          <Image src="/logo-new.png" alt="AmazonFast Logo" width={140} height={50} style={{ height: '50px', width: 'auto' }} className="object-contain" priority />
        </div>
        <nav className="flex-1 py-8 px-4 space-y-2">
          <a href="#" className="flex items-center gap-3 px-4 py-3 bg-gray-50 text-[#111] rounded-xl transition border border-gray-100">
            <Users size={18} className="text-[#ff6b35]" />
            <span className="text-sm font-semibold">Clients</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-500 hover:bg-gray-50 hover:text-[#111] rounded-xl transition">
            <FileText size={18} />
            <span className="text-sm font-medium">Documents</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-500 hover:bg-gray-50 hover:text-[#111] rounded-xl transition">
            <Settings size={18} />
            <span className="text-sm font-medium">Settings</span>
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-20 border-b border-gray-200 flex items-center justify-between px-8 bg-white/80 backdrop-blur-md sticky top-0 z-10">
          <h1 className="text-xl font-bold tracking-tight text-gray-900">Client Management</h1>
          <div className="flex items-center gap-6">
            <div className="relative hidden md:block">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input type="text" placeholder="Search clients..." className="bg-gray-50 border border-gray-200 rounded-full pl-10 pr-4 py-2 text-sm text-[#111] placeholder:text-gray-400 focus:outline-none focus:border-[#ff6b35] focus:ring-1 focus:ring-[#ff6b35] transition w-64 shadow-inner" />
            </div>
            
            <div className="relative group cursor-pointer">
              <button className="text-gray-400 hover:text-gray-900 transition relative">
                <Bell size={20} />
                {unreadNotifs > 0 && (
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 border-2 border-white rounded-full"></span>
                )}
              </button>
              
              {/* Instagram-style Notification Dropdown */}
              <div className="absolute top-10 right-0 w-80 bg-white border border-gray-200 shadow-xl rounded-2xl hidden group-hover:block z-50 overflow-hidden">
                <div className="p-4 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
                  <h4 className="font-bold text-sm text-gray-900">Recent Activity</h4>
                  <span className="text-xs text-[#ff6b35] font-semibold cursor-pointer">Mark all as read</span>
                </div>
                <div className="max-h-80 overflow-y-auto">
                  {notifications.length === 0 ? (
                    <div className="p-6 text-center text-sm text-gray-500">No new notifications</div>
                  ) : (
                    notifications.map((notif: any) => (
                      <div key={notif.id} className={`p-4 border-b border-gray-50 flex gap-3 hover:bg-gray-50 transition ${!notif.is_read ? 'bg-orange-50/30' : ''}`}>
                        <div className="w-8 h-8 rounded-full bg-[#ff6b35]/10 text-[#ff6b35] flex items-center justify-center shrink-0">
                          <Activity size={14} />
                        </div>
                        <div>
                          <p className="text-sm text-gray-800"><span className="font-bold">{notif.clients?.full_name || 'A client'}</span> {notif.message}</p>
                          <p className="text-xs text-gray-400 mt-1">{new Date(notif.created_at).toLocaleDateString()}</p>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>

            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#ff6b35] to-orange-600 border-2 border-white shadow-md cursor-pointer hover:scale-105 transition"></div>
          </div>
        </header>

        {/* Content */}
        <div className="flex-1 p-8 overflow-y-auto">
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="p-6 rounded-2xl border border-gray-200 bg-white flex items-center justify-between shadow-sm hover:shadow-md transition">
              <div>
                <p className="text-gray-500 text-xs font-bold tracking-wider uppercase mb-1">Total Active Clients</p>
                <h3 className="text-3xl font-black text-gray-900">{totalClients}</h3>
              </div>
              <div className="w-12 h-12 rounded-xl bg-[#ff6b35]/10 flex items-center justify-center text-[#ff6b35]">
                <Users size={24} />
              </div>
            </div>
            <div className="p-6 rounded-2xl border border-red-100 bg-white flex items-center justify-between shadow-[0_4px_20px_rgba(255,59,48,0.06)] hover:shadow-[0_4px_25px_rgba(255,59,48,0.1)] transition relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-red-500"></div>
              <div>
                <p className="text-red-500 text-xs font-bold tracking-wider uppercase mb-1">Pending Clients</p>
                <h3 className="text-3xl font-black text-red-600">{pendingClientsCount}</h3>
              </div>
              <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center text-red-500">
                <AlertCircle size={24} />
              </div>
            </div>
            <div className="p-6 rounded-2xl border border-gray-200 bg-white flex items-center justify-between shadow-sm hover:shadow-md transition">
              <div>
                <p className="text-gray-500 text-xs font-bold tracking-wider uppercase mb-1">Approved Clients</p>
                <h3 className="text-3xl font-black text-gray-900">{approvedClientsCount}</h3>
              </div>
              <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center text-green-500">
                <CheckCircle size={24} />
              </div>
            </div>
          </div>

          {/* Table */}
          <ClientTable initialClients={clients} />
        </div>
      </main>
    </div>
  )
}
