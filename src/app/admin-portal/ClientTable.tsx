"use client";

import { useState, useEffect, useMemo } from 'react';
import { X, FileText, CheckCircle, CheckCircle2, AlertCircle, Download, Check, XCircle, Filter } from 'lucide-react';
import { createClient } from '@/utils/supabase/client';

export default function ClientTable({ initialClients }: { initialClients: any[] }) {
  const [clients, setClients] = useState(initialClients);
  const [selectedClient, setSelectedClient] = useState<any>(null);
  const [updating, setUpdating] = useState(false);
  const [filter, setFilter] = useState('All'); // 'All', 'Pending', 'Approved'
  const supabase = createClient();

  const handleStatusUpdate = async (docId: string, newStatus: string) => {
    setUpdating(true);
    
    // Server API call taake Supabase RLS block na kare
    try {
      const res = await fetch('/api/update-doc-status', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ docId, newStatus })
      });
      if (!res.ok) {
        alert("Update failed! Aapke paas SUPABASE_SERVICE_ROLE_KEY nahi hai .env.local mein.");
        setUpdating(false);
        return;
      }
    } catch (e) {
      console.error(e);
      setUpdating(false);
      return;
    }
    
    const updatedClients = clients.map(c => {
      if (c.id === selectedClient.id) {
        return {
          ...c,
          documents: c.documents.map((d: any) => d.id === docId ? { ...d, status: newStatus } : d)
        };
      }
      return c;
    });
    setClients(updatedClients);
    setSelectedClient(updatedClients.find(c => c.id === selectedClient.id));
    setUpdating(false);
  };

  // Auto-refresh the table every 5 seconds
  useEffect(() => {
    const fetchLatestData = async () => {
      const { data } = await supabase.from('clients').select('*, documents(*)').order('created_at', { ascending: false });
      if (data) {
        setClients(data);
        if (selectedClient) {
          const updatedSelected = data.find((c: any) => c.id === selectedClient.id);
          if (updatedSelected) setSelectedClient(updatedSelected);
        }
      }
    };
    
    const intervalId = setInterval(fetchLatestData, 5000);
    return () => clearInterval(intervalId);
  }, [selectedClient, supabase]);

  const filteredClients = useMemo(() => {
    return clients.filter(c => {
      if (filter === 'All') return true;
      
      const docs = c.documents || [];
      const sortedDocs = [...docs].sort((a: any, b: any) => new Date(b.uploaded_at).getTime() - new Date(a.uploaded_at).getTime());
      const getLatest = (type: string) => sortedDocs.find((d: any) => d.document_type === type);
      
      const isFullyApproved = 
        getLatest('ID Card (Front)')?.status === 'Approved' && 
        getLatest('ID Card (Back)')?.status === 'Approved' && 
        getLatest('Utility Bill')?.status === 'Approved' && 
        getLatest('Bank Statement')?.status === 'Approved' && 
        getLatest('Gmail Credentials')?.status === 'Approved';

      if (filter === 'Approved') return isFullyApproved;
      if (filter === 'Pending') return !isFullyApproved;
      
      return true;
    });
  }, [clients, filter]);

  return (
    <>
      {/* Filters */}
      <div className="flex items-center gap-2 mb-6">
        <Filter size={16} className="text-gray-400 mr-2" />
        {['All', 'Pending', 'Approved'].map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
              filter === f 
                ? 'bg-[#111] text-white shadow-md' 
                : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
        <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-white">
          <h2 className="text-lg font-bold text-gray-900">Recent Onboardings</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider">
                <th className="py-3 px-4 md:px-6 font-bold">Client Info</th>
                <th className="py-3 px-4 md:px-6 font-bold">Email</th>
                <th className="py-3 px-4 md:px-6 font-bold">Status</th>
                <th className="py-3 px-4 md:px-6 font-bold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {filteredClients.length === 0 ? (
                <tr>
                  <td colSpan={4} className="py-8 text-center text-gray-400 font-medium">No clients found matching this filter.</td>
                </tr>
              ) : (
                filteredClients.map((client: any) => {
                  const docs = client.documents || [];
                  const sortedDocs = [...docs].sort((a: any, b: any) => new Date(b.uploaded_at).getTime() - new Date(a.uploaded_at).getTime());
                  const getLatest = (type: string) => sortedDocs.find((d: any) => d.document_type === type);
                  
                  const isFullyApproved = 
                    getLatest('ID Card (Front)')?.status === 'Approved' && 
                    getLatest('ID Card (Back)')?.status === 'Approved' && 
                    getLatest('Utility Bill')?.status === 'Approved' && 
                    getLatest('Bank Statement')?.status === 'Approved' && 
                    getLatest('Gmail Credentials')?.status === 'Approved';

                  return (
                  <tr key={client.id} className="border-b border-gray-100 hover:bg-gray-50 transition group">
                    <td className="py-3 px-4 md:px-6">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center text-[10px] md:text-xs font-black border shrink-0 ${isFullyApproved ? 'bg-green-100 text-green-600 border-green-200' : 'bg-gray-100 text-gray-600 border-gray-200'}`}>
                          {client.full_name ? client.full_name.substring(0, 2).toUpperCase() : 'C'}
                        </div>
                        <div>
                          <p className="font-bold text-gray-900 flex flex-col md:flex-row md:items-center gap-1 md:gap-2 text-xs md:text-sm">
                            {client.full_name || 'Unknown'}
                            {isFullyApproved && (
                              <span className="bg-green-100 text-green-700 border border-green-200 text-[9px] uppercase px-2 py-0.5 rounded-full font-bold tracking-wider flex items-center gap-1 w-fit">
                                <CheckCircle2 size={10} />
                                Profile Complete
                              </span>
                            )}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4 md:px-6 text-gray-500 text-xs md:text-sm">{client.email}</td>
                    <td className="py-3 px-4 md:px-6">
                      <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[9px] md:text-[10px] font-black tracking-wide uppercase shadow-sm ${
                        client.status === 'Pending' ? 'bg-red-50 border border-red-100 text-red-600' : 'bg-green-50 border border-green-100 text-green-600'
                      }`}>
                        {client.status === 'Pending' && <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>}
                        {client.status}
                      </div>
                    </td>
                    <td className="py-3 px-4 md:px-6 text-right">
                      <button 
                        onClick={() => setSelectedClient(client)}
                        className="text-[10px] md:text-xs font-bold px-3 py-1.5 md:px-4 md:py-2 rounded-lg bg-gray-100 text-gray-600 hover:text-gray-900 hover:bg-gray-200 transition border border-transparent whitespace-nowrap"
                      >
                        Review
                      </button>
                    </td>
                  </tr>
                );
              })
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal for viewing documents */}
      {selectedClient && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl overflow-hidden flex flex-col max-h-[90vh]">
            <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between bg-gray-50">
              <div>
                <h3 className="font-bold text-lg text-gray-900">{selectedClient.full_name}</h3>
                <p className="text-sm text-gray-500">{selectedClient.email}</p>
              </div>
              <button 
                onClick={() => setSelectedClient(null)}
                className="p-2 text-gray-400 hover:text-gray-900 hover:bg-gray-200 rounded-lg transition"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto flex-1 bg-gray-50/30">
              <h4 className="font-bold text-gray-900 mb-4">Uploaded Documents</h4>
              
              {(!selectedClient.documents || selectedClient.documents.length === 0) ? (
                <div className="text-center p-8 border-2 border-dashed border-gray-200 rounded-xl bg-white">
                  <AlertCircle size={32} className="mx-auto text-gray-300 mb-2" />
                  <p className="text-gray-500 font-medium">This client hasn't uploaded any documents yet.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {selectedClient.documents.map((doc: any) => (
                    <div key={doc.id} className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400">
                          <FileText size={20} />
                        </div>
                        <div>
                          <p className="font-bold text-sm text-gray-900">{doc.document_type}</p>
                          {doc.document_type === 'Gmail Credentials' ? (
                            <div className="mt-2 bg-white border border-gray-200 p-3 rounded-lg shadow-inner">
                              <p className="text-xs text-gray-500 font-bold mb-1">Email: <span className="font-mono text-gray-800">{doc.file_name}</span></p>
                              <p className="text-xs text-gray-500 font-bold">Password: <span className="font-mono text-gray-800">{doc.file_url}</span></p>
                            </div>
                          ) : (
                            <a href={doc.file_url} target="_blank" rel="noopener noreferrer" className="text-xs text-[#ff6b35] hover:underline flex items-center gap-1 mt-1 font-medium">
                              <Download size={12} /> View / Download
                            </a>
                          )}
                          <p className="text-[9px] text-gray-400 mt-1 uppercase tracking-wide">
                            Uploaded: {new Date(doc.uploaded_at).toLocaleString()}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <select
                          value={doc.status}
                          onChange={(e) => handleStatusUpdate(doc.id, e.target.value)}
                          disabled={updating}
                          className={`text-[10px] font-black uppercase tracking-wider px-2 py-1.5 rounded-md border outline-none cursor-pointer transition ${
                            doc.status === 'Approved' ? 'bg-green-50 text-green-600 border-green-200 hover:bg-green-100' :
                            doc.status === 'Rejected' ? 'bg-red-50 text-red-600 border-red-200 hover:bg-red-100' :
                            'bg-orange-50 text-orange-600 border-orange-200 hover:bg-orange-100'
                          }`}
                        >
                          <option value="Pending Review">Pending Review</option>
                          <option value="Approved">Approved</option>
                          <option value="Rejected">Rejected</option>
                        </select>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
