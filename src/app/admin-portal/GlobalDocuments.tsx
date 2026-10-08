"use client";

import { useState, useMemo, useEffect } from 'react';
import { FileText, Search, Download, CheckCircle2, AlertCircle, Clock, ChevronDown, ChevronUp, User } from 'lucide-react';

export default function GlobalDocuments({ clients: initialClients }: { clients: any[] }) {
  const [clients, setClients] = useState(initialClients);
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedClients, setExpandedClients] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const fetchLatestData = async () => {
      try {
        const res = await fetch('/api/get-all-clients');
        if (res.ok) {
          const { data } = await res.json();
          if (data) setClients(data);
        }
      } catch (err) {
        console.error("Failed to fetch latest docs", err);
      }
    };
    
    const intervalId = setInterval(fetchLatestData, 5000);
    return () => clearInterval(intervalId);
  }, []);

  const toggleClient = (clientId: string) => {
    setExpandedClients(prev => ({
      ...prev,
      [clientId]: !prev[clientId]
    }));
  };

  // Filter clients based on search query
  const filteredClients = useMemo(() => {
    if (!searchQuery.trim()) return clients;
    
    const q = searchQuery.toLowerCase();
    return clients.filter(c => 
      c.full_name?.toLowerCase().includes(q) || 
      c.email?.toLowerCase().includes(q) ||
      (c.documents || []).some((d: any) => 
        d.document_type.toLowerCase().includes(q) || 
        d.status.toLowerCase().includes(q)
      )
    );
  }, [clients, searchQuery]);

  return (
    <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm flex flex-col">
      <div className="p-6 border-b border-gray-100 flex flex-col gap-4 bg-white">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-500">
              <FileText size={20} />
            </div>
            <div>
              <h2 className="text-lg font-bold text-gray-900">Global Documents</h2>
              <p className="text-xs text-gray-500 font-medium">{filteredClients.length} clients found</p>
            </div>
          </div>
          
          <div className="relative w-full sm:w-72">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search client or documents..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-50 border border-gray-200 rounded-full pl-10 pr-4 py-2 text-sm text-[#111] placeholder:text-gray-400 focus:outline-none focus:border-[#ff6b35] focus:ring-1 focus:ring-[#ff6b35] transition shadow-inner" 
            />
          </div>
        </div>
      </div>

      <div className="bg-gray-50/50 p-4 sm:p-6 space-y-4">
        {filteredClients.length === 0 ? (
          <div className="py-12 text-center text-gray-400 font-medium bg-white rounded-xl border border-gray-100">
            <FileText size={32} className="mx-auto mb-3 text-gray-300" />
            No clients or documents found.
          </div>
        ) : (
          filteredClients.map((client) => {
            const isExpanded = expandedClients[client.id];
            const docs = client.documents || [];
            const sortedDocs = [...docs].sort((a: any, b: any) => new Date(b.uploaded_at).getTime() - new Date(a.uploaded_at).getTime());
            const pendingDocs = docs.filter((d: any) => d.status === 'Pending' && d.document_type !== 'Profile Image').length;
            const profileDoc = sortedDocs.find((d: any) => d.document_type === 'Profile Image');
            
            return (
              <div key={client.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm transition-all">
                {/* Client Header / Accordion Toggle */}
                <div 
                  onClick={() => toggleClient(client.id)}
                  className="p-4 flex items-center justify-between cursor-pointer hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#ff6b35]/10 text-[#ff6b35] flex items-center justify-center font-bold border border-[#ff6b35]/20 overflow-hidden">
                      {profileDoc ? (
                        <img src={profileDoc.file_url} alt="Profile" className="w-full h-full object-cover" />
                      ) : (
                        <User size={18} />
                      )}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">{client.full_name}</h3>
                      <p className="text-xs text-gray-500">{client.email}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="text-right hidden sm:block">
                      <p className="text-sm font-bold text-gray-900">{docs.length} Documents</p>
                      {pendingDocs > 0 ? (
                        <p className="text-xs font-bold text-orange-500">{pendingDocs} Pending Review</p>
                      ) : docs.length > 0 ? (
                        <p className="text-xs font-bold text-green-500">All Reviewed</p>
                      ) : (
                        <p className="text-xs text-gray-400">No uploads yet</p>
                      )}
                    </div>
                    
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500">
                      {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </div>
                  </div>
                </div>

                {/* Expanded Documents View */}
                {isExpanded && (
                  <div className="border-t border-gray-100 bg-gray-50/50 p-4">
                    {docs.length === 0 ? (
                      <p className="text-sm text-center text-gray-500 py-4 font-medium">This client hasn't uploaded any documents yet.</p>
                    ) : (
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                        {docs.map((doc: any, idx: number) => (
                          <div key={doc.id || idx} className="bg-white p-3 rounded-lg border border-gray-200 shadow-sm flex flex-col justify-between h-full hover:border-[#ff6b35]/30 transition-colors">
                            <div className="flex items-start justify-between mb-3">
                              <div>
                                <p className="font-bold text-gray-900 text-sm">{doc.document_type}</p>
                                <p className="text-xs text-gray-400 truncate max-w-[150px]" title={doc.file_name}>{doc.file_name}</p>
                              </div>
                              <div className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[9px] font-black tracking-wide uppercase shadow-sm ${
                                doc.status === 'Approved' ? 'bg-green-50 border border-green-100 text-green-600' :
                                doc.status === 'Rejected' ? 'bg-red-50 border border-red-100 text-red-600' :
                                'bg-orange-50 border border-orange-100 text-orange-600'
                              }`}>
                                {doc.status === 'Approved' ? <CheckCircle2 size={10} /> : doc.status === 'Rejected' ? <AlertCircle size={10} /> : <Clock size={10} />}
                                {doc.status}
                              </div>
                            </div>
                            
                            <div className="flex items-center justify-between mt-2 pt-2 border-t border-gray-100">
                              <span className="text-[10px] text-gray-400 font-medium">
                                {new Date(doc.uploaded_at).toLocaleDateString()}
                              </span>
                              
                              {doc.document_type === 'Gmail Credentials' ? (
                                <button className="text-[10px] font-bold px-2 py-1 rounded bg-gray-100 text-gray-400 cursor-not-allowed border border-transparent whitespace-nowrap" disabled>
                                  Protected
                                </button>
                              ) : (
                                <a 
                                  href={doc.file_url} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1.5 text-[10px] font-bold px-2 py-1 rounded bg-[#ff6b35]/10 text-[#ff6b35] hover:bg-[#ff6b35] hover:text-white transition whitespace-nowrap shadow-sm hover:shadow-md"
                                >
                                  <Download size={12} /> View File
                                </a>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
