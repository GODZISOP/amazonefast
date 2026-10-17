"use client";

import { useState, useMemo, useEffect } from 'react';
import { FileText, Search, Download, CheckCircle2, AlertCircle, Clock, ChevronDown, ChevronUp, User, Eye, X } from 'lucide-react';

export default function GlobalDocuments({ clients: initialClients }: { clients: any[] }) {
  const [clients, setClients] = useState(initialClients);
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedClients, setExpandedClients] = useState<Record<string, boolean>>({});
  const [previewDoc, setPreviewDoc] = useState<any>(null);

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
            const allDocs = client.documents || [];
            const displayDocs = allDocs.filter((d: any) => d.document_type !== 'Profile Image');
            const sortedDisplayDocs = [...displayDocs].sort((a: any, b: any) => new Date(b.uploaded_at).getTime() - new Date(a.uploaded_at).getTime());
            const pendingDocs = displayDocs.filter((d: any) => d.status === 'Pending').length;
            const profileDoc = allDocs.find((d: any) => d.document_type === 'Profile Image');
            
            return (
              <div key={client.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm transition-all">
                {/* Client Header / Accordion Toggle */}
                <div 
                  onClick={() => toggleClient(client.id)}
                  className="p-4 flex items-center justify-between cursor-pointer hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#ff6b35]/10 text-[#ff6b35] flex items-center justify-center font-black text-xs border border-[#ff6b35]/20 overflow-hidden shrink-0">
                      {profileDoc ? (
                        <img src={profileDoc.file_url} alt="Profile" className="w-full h-full object-cover" />
                      ) : (() => {
                        const match = (client.full_name || '').match(/^AMZ-C0*(\d+)/i);
                        return match ? `C${match[1]}` : (client.full_name ? client.full_name.substring(0, 2).toUpperCase() : <User size={18} />);
                      })()}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 flex items-center gap-1.5 flex-wrap">
                        {(() => {
                          const match = (client.full_name || '').match(/^(AMZ-C\d+)\s*(.*)/i);
                          if (match) {
                            return (
                              <>
                                <span className="bg-[#ff6b35]/10 text-[#ff6b35] border border-[#ff6b35]/25 text-[10px] px-2 py-0.5 rounded font-black tracking-wider">
                                  {match[1].toUpperCase()}
                                </span>
                                <span>{match[2] || 'Client'}</span>
                              </>
                            );
                          }
                          return client.full_name;
                        })()}
                      </h3>
                      <p className="text-xs text-gray-500">{client.email}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="text-right hidden sm:block">
                      <p className="text-sm font-bold text-gray-900">{displayDocs.length} Documents</p>
                      {pendingDocs > 0 ? (
                        <p className="text-xs font-bold text-orange-500">{pendingDocs} Pending Review</p>
                      ) : displayDocs.length > 0 ? (
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
                    {displayDocs.length === 0 ? (
                      <p className="text-sm text-center text-gray-500 py-4 font-medium">This client hasn't uploaded any documents yet.</p>
                    ) : (
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                        {sortedDisplayDocs.map((doc: any, idx: number) => (
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
                              
                              {doc.document_type === 'Gmail Credentials' || doc.document_type === 'Company Email' || doc.document_type === 'Phone Number' ? (
                                <button className="text-[10px] font-bold px-2 py-1 rounded bg-gray-100 text-gray-400 cursor-not-allowed border border-transparent whitespace-nowrap" disabled>
                                  Text Info
                                </button>
                              ) : (
                                <div className="flex items-center gap-1.5">
                                  <button 
                                    type="button"
                                    onClick={() => setPreviewDoc({ ...doc, clientName: client.full_name })}
                                    className="inline-flex items-center gap-1 text-[10px] font-bold px-2.5 py-1 rounded bg-[#ff6b35]/10 text-[#ff6b35] hover:bg-[#ff6b35] hover:text-white transition whitespace-nowrap shadow-sm"
                                  >
                                    <Eye size={12} /> View
                                  </button>
                                  <a 
                                    href={doc.file_url} 
                                    target="_blank" 
                                    download
                                    className="inline-flex items-center gap-1 text-[10px] font-medium px-2 py-1 rounded bg-gray-100 text-gray-600 hover:bg-gray-200 transition whitespace-nowrap"
                                  >
                                    <Download size={11} /> Download
                                  </a>
                                </div>
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

      {/* Global In-App Document Lightbox Modal */}
      {previewDoc && (
        <div
          onClick={() => setPreviewDoc(null)}
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh] border border-gray-100"
          >
            <div className="p-4 px-6 border-b border-gray-100 flex items-center justify-between bg-white">
              <div>
                <h3 className="font-bold text-base text-gray-900">{previewDoc.document_type}</h3>
                <p className="text-xs text-gray-500 font-medium">
                  {previewDoc.clientName ? `${previewDoc.clientName} • ` : ''}
                  Uploaded: {new Date(previewDoc.uploaded_at).toLocaleString()}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={previewDoc.file_url}
                  target="_blank"
                  download
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-xl transition"
                >
                  <Download size={14} /> Download Original
                </a>
                <button
                  type="button"
                  onClick={() => setPreviewDoc(null)}
                  className="p-1.5 text-gray-400 hover:text-gray-900 hover:bg-gray-100 rounded-xl transition"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            <div className="p-4 sm:p-6 bg-gray-900/5 flex-1 overflow-auto flex items-center justify-center min-h-[300px] max-h-[70vh]">
              {previewDoc.file_url?.toLowerCase().endsWith('.pdf') ? (
                <iframe
                  src={previewDoc.file_url}
                  className="w-full h-[65vh] rounded-2xl border border-gray-200 shadow-md bg-white"
                  title="PDF Preview"
                />
              ) : (
                <img
                  src={previewDoc.file_url}
                  alt={previewDoc.document_type}
                  className="max-w-full max-h-[65vh] object-contain rounded-2xl shadow-lg border border-gray-200 bg-white"
                />
              )}
            </div>

            <div className="p-4 px-6 border-t border-gray-100 bg-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-gray-500">Status:</span>
                <span className={`text-[10px] font-black uppercase px-2.5 py-1 rounded-full border ${
                  previewDoc.status === 'Approved' ? 'bg-green-50 text-green-600 border-green-200' :
                  previewDoc.status === 'Rejected' ? 'bg-red-50 text-red-600 border-red-200' :
                  'bg-orange-50 text-orange-600 border-orange-200'
                }`}>
                  {previewDoc.status}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setPreviewDoc(null)}
                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-xl text-xs font-bold text-gray-700 transition"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
