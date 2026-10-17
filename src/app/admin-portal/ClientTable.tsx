"use client";

import { useState, useEffect, useMemo, useRef } from 'react';
import { X, FileText, CheckCircle, CheckCircle2, AlertCircle, Download, Check, XCircle, Filter, Users, Search, Eye, ExternalLink, Pencil, Briefcase, Tag, Save, Plus } from 'lucide-react';
import { createClient } from '@/utils/supabase/client';
import { parseClientInfo } from '@/utils/clientCodeHelper';

const AVAILABLE_SERVICES = [
  'Amazon FBA Wholesale',
  'Amazon Private Label',
  'Brand Approval & Ungating',
  'LLC Formation & US Bank Account',
  'PPC Management & Advertising',
  'Trademark Registration',
  'Product Hunting & Sourcing',
  'Amazon Account Reinstatement',
  'Full Account Automation / Management'
];

export default function ClientTable({ initialClients }: { initialClients: any[] }) {
  const [clients, setClients] = useState(initialClients);
  const [selectedClient, setSelectedClient] = useState<any>(null);
  const [previewDoc, setPreviewDoc] = useState<any>(null);
  const [updating, setUpdating] = useState(false);
  const [filter, setFilter] = useState('All'); // 'All', 'Pending', 'Approved'
  const [searchQuery, setSearchQuery] = useState('');

  // Custom Client Code Editing
  const [editingCodeClientId, setEditingCodeClientId] = useState<string | null>(null);
  const [codeInputValue, setCodeInputValue] = useState('');
  const [savingCode, setSavingCode] = useState(false);

  // Custom Client Service Assignment
  const [serviceInputValue, setServiceInputValue] = useState('');
  const [savingService, setSavingService] = useState(false);
  const [customServiceClientId, setCustomServiceClientId] = useState<string | null>(null);
  const [customServiceText, setCustomServiceText] = useState('');

  const supabase = createClient();
  const deletedClientIdsRef = useRef<Set<string>>(new Set());
  // Store status updates with a 15-second TTL so background polling never overwrites with stale data
  const pendingStatusUpdatesRef = useRef<Map<string, { status: string; expiresAt: number }>>(new Map());

  // Live Auto-Refresh every 4 seconds to catch new documents & credential updates in real-time
  useEffect(() => {
    const fetchLatest = async () => {
      try {
        const res = await fetch(`/api/get-all-clients?t=${Date.now()}`, {
          cache: 'no-store',
          headers: { 'Pragma': 'no-cache', 'Cache-Control': 'no-cache' }
        });
        if (res.ok) {
          const json = await res.json();
          if (json?.data && Array.isArray(json.data)) {
            const now = Date.now();
            // Filter out deleted clients AND preserve optimistic document status updates with TTL lock
            const activeClients = json.data
              .filter((c: any) => !deletedClientIdsRef.current.has(c.id))
              .map((c: any) => {
                const docs = (c.documents || []).map((d: any) => {
                  const pending = pendingStatusUpdatesRef.current.get(d.id);
                  if (pending) {
                    if (now < pending.expiresAt) {
                      // Still locked in TTL window - enforce optimistic status 100%
                      return { ...d, status: pending.status };
                    } else {
                      // TTL expired, safe to let server data take over
                      pendingStatusUpdatesRef.current.delete(d.id);
                    }
                  }
                  return d;
                });
                return { ...c, documents: docs };
              });

            // Anti-flicker check: only update state if data actually changed
            setClients((prev) => {
              const prevSimple = prev.map((c: any) => ({ id: c.id, full_name: c.full_name, docs: (c.documents || []).map((d: any) => ({ id: d.id, s: d.status, n: d.file_name })) }));
              const nextSimple = activeClients.map((c: any) => ({ id: c.id, full_name: c.full_name, docs: (c.documents || []).map((d: any) => ({ id: d.id, s: d.status, n: d.file_name })) }));
              if (JSON.stringify(prevSimple) === JSON.stringify(nextSimple)) {
                return prev; // Prevents unnecessary re-render, ZERO flicker!
              }
              return activeClients;
            });

            setSelectedClient((prev: any) => {
              if (!prev || deletedClientIdsRef.current.has(prev.id)) return null;
              const found = activeClients.find((c: any) => c.id === prev.id);
              if (!found) return prev;
              const prevSimple = { id: prev.id, full_name: prev.full_name, docs: (prev.documents || []).map((d: any) => ({ id: d.id, s: d.status, n: d.file_name })) };
              const foundSimple = { id: found.id, full_name: found.full_name, docs: (found.documents || []).map((d: any) => ({ id: d.id, s: d.status, n: d.file_name })) };
              if (JSON.stringify(prevSimple) === JSON.stringify(foundSimple)) {
                return prev;
              }
              return found;
            });
          }
        }
      } catch (err) {
        // silent catch on network blip
      }
    };

    const interval = setInterval(fetchLatest, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleStatusUpdate = async (docId: string, newStatus: string) => {
    // 1. Lock this status in memory for 15 seconds so background polling NEVER reverts it
    pendingStatusUpdatesRef.current.set(docId, {
      status: newStatus,
      expiresAt: Date.now() + 15000
    });

    // 2. Instant Optimistic UI Update: Dropdown, badges, & review modal change immediately (0 ms)
    const previousClients = [...clients];
    const previousSelectedClient = selectedClient ? { ...selectedClient } : null;

    setClients(prev => prev.map(c => {
      const hasDoc = (c.documents || []).some((d: any) => d.id === docId);
      if (hasDoc) {
        return {
          ...c,
          documents: (c.documents || []).map((d: any) => d.id === docId ? { ...d, status: newStatus } : d)
        };
      }
      return c;
    }));

    setSelectedClient((prev: any) => {
      if (!prev) return null;
      return {
        ...prev,
        documents: (prev.documents || []).map((d: any) => d.id === docId ? { ...d, status: newStatus } : d)
      };
    });

    setPreviewDoc((prev: any) => {
      if (prev && prev.id === docId) {
        return { ...prev, status: newStatus };
      }
      return prev;
    });

    // 3. Server API call in background
    try {
      const res = await fetch('/api/update-doc-status', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ docId, newStatus })
      });
      if (!res.ok) {
        // Rollback on server failure
        pendingStatusUpdatesRef.current.delete(docId);
        setClients(previousClients);
        setSelectedClient(previousSelectedClient);
        alert("Update failed! Please check your network or server configuration.");
      }
    } catch (e) {
      console.error(e);
      pendingStatusUpdatesRef.current.delete(docId);
      setClients(previousClients);
      setSelectedClient(previousSelectedClient);
      alert("Network error updating status.");
    }
  };

  const handleDeleteClient = async (clientId: string, clientName: string) => {
    const isConfirmed = window.confirm(`Are you sure you want to completely delete ${clientName || 'this client'} and all their documents? This cannot be undone.`);
    if (!isConfirmed) return;

    // 1. Mark as permanently deleted in ref so auto-refresh poll never re-adds them
    deletedClientIdsRef.current.add(clientId);

    // 2. Instant Optimistic UI Update: Client row disappears immediately (0 ms)
    const previousClients = [...clients];
    setClients(prev => prev.filter(c => c.id !== clientId));
    if (selectedClient?.id === clientId) {
      setSelectedClient(null);
    }

    // 3. Server API call in background
    try {
      const res = await fetch('/api/delete-client', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ clientId })
      });
      if (!res.ok) {
        // Rollback if server failed
        deletedClientIdsRef.current.delete(clientId);
        setClients(previousClients);
        alert("Failed to delete client! Server error or missing keys.");
      }
    } catch (e) {
      console.error(e);
      deletedClientIdsRef.current.delete(clientId);
      setClients(previousClients);
      alert("An error occurred while deleting the client.");
    }
  };

  const handleStartEditCode = (client: any) => {
    setEditingCodeClientId(client.id);
    const info = parseClientInfo(client.full_name);
    setCodeInputValue(info.code || '');
  };

  const handleSaveCode = async (clientId: string) => {
    setSavingCode(true);
    try {
      const res = await fetch('/api/update-client-code', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ clientId, newCode: codeInputValue.trim() })
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setClients(prev => prev.map(c => c.id === clientId ? { ...c, full_name: data.updatedFullName } : c));
        setSelectedClient((prev: any) => prev && prev.id === clientId ? { ...prev, full_name: data.updatedFullName } : prev);
        setEditingCodeClientId(null);
      } else {
        alert(data.error || 'Failed to update client number/code');
      }
    } catch (err: any) {
      alert('Error updating code: ' + err.message);
    } finally {
      setSavingCode(false);
    }
  };

  const handleSaveService = async (clientId: string, serviceToSet: string) => {
    const chosenService = (serviceToSet || serviceInputValue).trim();
    if (!chosenService) return;
    setSavingService(true);
    try {
      const res = await fetch('/api/update-client-service', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ clientId, serviceName: chosenService })
      });
      const data = await res.json();
      if (res.ok && data.success) {
        const updatedDoc = data.document;
        const updateDocs = (existingDocs: any[] = []) => {
          const withoutService = existingDocs.filter((d: any) => d.document_type !== 'Assigned Service');
          return [updatedDoc, ...withoutService];
        };
        setClients(prev => prev.map(c => c.id === clientId ? { ...c, documents: updateDocs(c.documents) } : c));
        setSelectedClient((prev: any) => prev && prev.id === clientId ? { ...prev, documents: updateDocs(prev.documents) } : prev);
        setServiceInputValue('');
      } else {
        alert(data.error || 'Failed to save service');
      }
    } catch (err: any) {
      alert('Error saving service: ' + err.message);
    } finally {
      setSavingService(false);
    }
  };

  const filteredClients = useMemo(() => {
    return clients.filter(c => {
      // 1. Search Filter
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const nameMatch = c.full_name?.toLowerCase().includes(query);
        const emailMatch = c.email?.toLowerCase().includes(query);
        if (!nameMatch && !emailMatch) return false;
      }

      // 2. Status Filter
      if (filter === 'All') return true;

      const docs = c.documents || [];
      const sortedDocs = [...docs].sort((a: any, b: any) => new Date(b.uploaded_at).getTime() - new Date(a.uploaded_at).getTime());
      const getLatest = (type: string) => sortedDocs.find((d: any) => d.document_type === type);

      const isFullyApproved =
        getLatest('ID Card (Front)')?.status === 'Approved' &&
        getLatest('ID Card (Back)')?.status === 'Approved' &&
        getLatest('Utility Bill')?.status === 'Approved' &&
        getLatest('Bank Statement')?.status === 'Approved';

      if (filter === 'Approved') return isFullyApproved;
      if (filter === 'Pending') return !isFullyApproved;

      return true;
    }).sort((a: any, b: any) => {
      const getLatestTime = (client: any) => {
        if (!client.documents || client.documents.length === 0) {
          return new Date(client.created_at || 0).getTime();
        }
        const latestDoc = [...client.documents].sort((x: any, y: any) => new Date(y.uploaded_at).getTime() - new Date(x.uploaded_at).getTime())[0];
        return Math.max(
          new Date(client.created_at || 0).getTime(),
          new Date(latestDoc.uploaded_at).getTime()
        );
      };

      return getLatestTime(b) - getLatestTime(a);
    });
  }, [clients, filter, searchQuery]);

  const isFullyApproved = (client: any) => {
    const docs = client.documents || [];
    const sortedDocs = [...docs].sort((a: any, b: any) => new Date(b.uploaded_at).getTime() - new Date(a.uploaded_at).getTime());
    const getLatest = (type: string) => sortedDocs.find((d: any) => d.document_type === type);

    return getLatest('ID Card (Front)')?.status === 'Approved' &&
      getLatest('ID Card (Back)')?.status === 'Approved' &&
      getLatest('Utility Bill')?.status === 'Approved' &&
      getLatest('Bank Statement')?.status === 'Approved';
  };

  const totalClients = clients.length;
  const approvedClientsCount = clients.filter(c => isFullyApproved(c)).length;
  const pendingClientsCount = totalClients - approvedClientsCount;

  return (
    <>
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-10 w-full">
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

      {/* Controls: Search and Filters */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div className="relative w-full md:w-72">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search by name or email..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white border border-gray-200 rounded-full pl-10 pr-4 py-2 text-sm text-[#111] placeholder:text-gray-400 focus:outline-none focus:border-[#ff6b35] focus:ring-1 focus:ring-[#ff6b35] transition shadow-sm"
          />
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
          <Filter size={16} className="text-gray-400 mr-1 hidden sm:block" />
          {['All', 'Pending', 'Approved'].map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap ${filter === f
                  ? 'bg-[#111] text-white shadow-md'
                  : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
                }`}
            >
              {f}
            </button>
          ))}
        </div>
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
                <th className="py-3 px-4 md:px-6 font-bold">Assigned Service</th>
                <th className="py-3 px-4 md:px-6 font-bold">Status</th>
                <th className="py-3 px-4 md:px-6 font-bold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {filteredClients.length === 0 ? (
                <tr>
                  <td colSpan={5} className="py-8 text-center text-gray-400 font-medium">No clients found matching this filter.</td>
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
                    getLatest('Bank Statement')?.status === 'Approved';

                  const pendingDocs = docs.filter((d: any) => d.status === 'Pending Review' && d.document_type !== 'Profile Image');
                  const profileDoc = getLatest('Profile Image');

                  return (
                    <tr key={client.id} className="border-b border-gray-100 hover:bg-gray-50 transition group">
                      <td className="py-3 px-4 md:px-6">
                        {(() => {
                          const info = parseClientInfo(client.full_name);
                          const assignedService = (client.documents || []).find((d: any) => d.document_type === 'Assigned Service')?.file_name;

                          return (
                            <div className="flex items-center gap-3">
                              <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center text-[10px] md:text-xs font-black border shrink-0 overflow-hidden ${isFullyApproved ? 'bg-green-100 text-green-700 border-green-200' : 'bg-gray-100 text-gray-700 border-gray-200'}`}>
                                {profileDoc ? (
                                  <img src={profileDoc.file_url} alt="Profile" className="w-full h-full object-cover" />
                                ) : (
                                  info.avatarText
                                )}
                              </div>
                              <div>
                                <div className="font-bold text-gray-900 flex flex-col md:flex-row md:items-center gap-1 md:gap-2 text-xs md:text-sm">
                                  {editingCodeClientId === client.id ? (
                                    <div className="flex items-center gap-1.5 py-0.5" onClick={(e) => e.stopPropagation()}>
                                      <input
                                        type="text"
                                        value={codeInputValue}
                                        onChange={(e) => setCodeInputValue(e.target.value)}
                                        placeholder="01, A, VIP"
                                        className="border border-[#ff6b35] rounded-md px-2 py-0.5 text-xs font-bold text-gray-900 w-24 focus:outline-none ring-1 ring-[#ff6b35] bg-white"
                                        autoFocus
                                        onKeyDown={(e) => {
                                          if (e.key === 'Enter') handleSaveCode(client.id);
                                          if (e.key === 'Escape') setEditingCodeClientId(null);
                                        }}
                                      />
                                      <button
                                        type="button"
                                        onClick={() => handleSaveCode(client.id)}
                                        disabled={savingCode}
                                        className="p-1 bg-green-500 hover:bg-green-600 text-white rounded transition shadow-sm"
                                        title="Save"
                                      >
                                        <Check size={12} />
                                      </button>
                                      <button
                                        type="button"
                                        onClick={() => setEditingCodeClientId(null)}
                                        className="p-1 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded transition"
                                        title="Cancel"
                                      >
                                        <X size={12} />
                                      </button>
                                    </div>
                                  ) : (
                                    <div className="flex items-center gap-1.5 flex-wrap">
                                      {info.code ? (
                                        <span className="bg-[#ff6b35]/10 text-[#ff6b35] border border-[#ff6b35]/25 text-[10px] px-2 py-0.5 rounded font-black tracking-wider">
                                          {info.code}
                                        </span>
                                      ) : null}
                                      <span className="font-bold text-gray-900">{info.name}</span>
                                      <button
                                        type="button"
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          handleStartEditCode(client);
                                        }}
                                        className="opacity-0 group-hover:opacity-100 p-1 text-gray-400 hover:text-[#ff6b35] hover:bg-orange-50 rounded transition"
                                        title="Edit Client Number / Letter / Code"
                                      >
                                        <Pencil size={11} />
                                      </button>
                                    </div>
                                  )}
                                  {isFullyApproved && (
                                    <span className="bg-green-100 text-green-700 border border-green-200 text-[9px] uppercase px-2 py-0.5 rounded-full font-bold tracking-wider flex items-center gap-1 w-fit">
                                      <CheckCircle2 size={10} />
                                      Profile Complete
                                    </span>
                                  )}
                                  {pendingDocs.length > 0 && (
                                    <span className="bg-orange-100 text-orange-700 border border-orange-200 text-[9px] uppercase px-2 py-0.5 rounded-full font-bold tracking-wider flex items-center gap-1 w-fit shadow-sm">
                                      <AlertCircle size={10} />
                                      {pendingDocs.length} New Document{pendingDocs.length > 1 ? 's' : ''}
                                    </span>
                                  )}
                                </div>

                                {/* Service Badge if assigned */}
                                {assignedService && (
                                  <div className="mt-1">
                                    <span className="bg-indigo-50 text-indigo-700 border border-indigo-200/80 text-[10px] px-2 py-0.5 rounded-md font-bold inline-flex items-center gap-1 shadow-xs">
                                      <Briefcase size={10} />
                                      {assignedService}
                                    </span>
                                  </div>
                                )}

                                {pendingDocs.length > 0 && (
                                  <div className="flex flex-wrap gap-1 mt-1.5 max-w-[200px] md:max-w-[300px]">
                                    {pendingDocs.map((d: any, idx: number) => (
                                      <span key={idx} className="text-[9px] bg-gray-100 text-gray-600 border border-gray-200 px-1.5 py-0.5 rounded font-medium whitespace-nowrap">
                                        {d.document_type}
                                      </span>
                                    ))}
                                  </div>
                                )}
                              </div>
                            </div>
                          );
                        })()}
                      </td>
                      <td className="py-3 px-4 md:px-6 text-gray-500 text-xs md:text-sm">{client.email}</td>
                      <td className="py-3 px-4 md:px-6">
                        {(() => {
                          const assignedService = (client.documents || []).find((d: any) => d.document_type === 'Assigned Service')?.file_name;

                          if (customServiceClientId === client.id) {
                            return (
                              <div className="flex items-center gap-1.5" onClick={(e) => e.stopPropagation()}>
                                <input
                                  type="text"
                                  placeholder="Service name..."
                                  value={customServiceText}
                                  onChange={(e) => setCustomServiceText(e.target.value)}
                                  className="border border-indigo-400 rounded-lg px-2.5 py-1 text-xs w-36 focus:outline-none ring-1 ring-indigo-400 bg-white font-medium"
                                  autoFocus
                                  onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                      handleSaveService(client.id, customServiceText);
                                      setCustomServiceClientId(null);
                                    }
                                    if (e.key === 'Escape') setCustomServiceClientId(null);
                                  }}
                                />
                                <button
                                  type="button"
                                  onClick={() => {
                                    handleSaveService(client.id, customServiceText);
                                    setCustomServiceClientId(null);
                                  }}
                                  disabled={savingService || !customServiceText.trim()}
                                  className="p-1 bg-indigo-600 hover:bg-indigo-700 text-white rounded transition shadow-sm"
                                  title="Save"
                                >
                                  <Check size={12} />
                                </button>
                                <button
                                  type="button"
                                  onClick={() => setCustomServiceClientId(null)}
                                  className="p-1 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded transition"
                                  title="Cancel"
                                >
                                  <X size={12} />
                                </button>
                              </div>
                            );
                          }

                          return (
                            <div className="relative inline-block" onClick={(e) => e.stopPropagation()}>
                              <select
                                value={assignedService || ''}
                                disabled={savingService}
                                onChange={(e) => {
                                  const val = e.target.value;
                                  if (val === '__custom__') {
                                    setCustomServiceClientId(client.id);
                                    setCustomServiceText('');
                                  } else if (val) {
                                    handleSaveService(client.id, val);
                                  }
                                }}
                                className={`text-xs font-bold rounded-lg pl-2.5 pr-6 py-1.5 border transition cursor-pointer appearance-none focus:outline-none focus:ring-1 focus:ring-indigo-500 shadow-xs ${assignedService
                                    ? 'bg-indigo-50/90 border-indigo-200 text-indigo-700 hover:bg-indigo-100'
                                    : 'bg-white border-dashed border-gray-300 text-gray-400 hover:border-gray-400 hover:text-gray-600'
                                  }`}
                              >
                                <option value="" disabled>-- Select Service --</option>
                                {AVAILABLE_SERVICES.map(s => (
                                  <option key={s} value={s}>{s}</option>
                                ))}
                                {assignedService && !AVAILABLE_SERVICES.includes(assignedService) && (
                                  <option value={assignedService}>Custom: {assignedService}</option>
                                )}
                                <option value="__custom__">✏️ + Custom Service...</option>
                              </select>
                              <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 text-[9px]">▼</span>
                            </div>
                          );
                        })()}
                      </td>
                      <td className="py-3 px-4 md:px-6">
                        <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[9px] md:text-[10px] font-black tracking-wide uppercase shadow-sm ${isFullyApproved ? 'bg-green-50 border border-green-100 text-green-600' : 'bg-red-50 border border-red-100 text-red-600'
                          }`}>
                          {!isFullyApproved && <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>}
                          {isFullyApproved ? 'Approved' : 'Pending'}
                        </div>
                      </td>
                      <td className="py-3 px-4 md:px-6 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => setSelectedClient(client)}
                            className="text-[10px] md:text-xs font-bold px-3 py-1.5 md:px-4 md:py-2 rounded-lg bg-gray-100 text-gray-600 hover:text-gray-900 hover:bg-gray-200 transition border border-transparent whitespace-nowrap"
                          >
                            Review
                          </button>
                          <button
                            onClick={() => handleDeleteClient(client.id, client.full_name)}
                            disabled={updating}
                            className="text-[10px] md:text-xs font-bold px-3 py-1.5 md:px-4 md:py-2 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 transition border border-transparent whitespace-nowrap disabled:opacity-50"
                          >
                            Delete
                          </button>
                        </div>
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
              <div className="flex items-center gap-4">
                {(() => {
                  const pDoc = selectedClient.documents?.sort((a: any, b: any) => new Date(b.uploaded_at).getTime() - new Date(a.uploaded_at).getTime()).find((d: any) => d.document_type === 'Profile Image');
                  if (pDoc) {
                    return (
                      <img src={pDoc.file_url} alt="Profile" className="w-12 h-12 rounded-full object-cover border border-gray-200 shadow-sm" />
                    );
                  }
                  const info = parseClientInfo(selectedClient.full_name);
                  return (
                    <div className="w-12 h-12 rounded-full bg-[#ff6b35]/10 text-[#ff6b35] border border-[#ff6b35]/25 flex items-center justify-center font-black text-sm shadow-sm">
                      {info.avatarText}
                    </div>
                  );
                })()}
                <div>
                  {editingCodeClientId === selectedClient.id ? (
                    <div className="flex items-center gap-1.5 my-1">
                      <input
                        type="text"
                        value={codeInputValue}
                        onChange={(e) => setCodeInputValue(e.target.value)}
                        placeholder="01, A, B, VIP..."
                        className="border border-[#ff6b35] rounded-lg px-2.5 py-1 text-xs font-bold text-gray-900 w-44 focus:outline-none ring-1 ring-[#ff6b35] bg-white shadow-xs"
                        autoFocus
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') handleSaveCode(selectedClient.id);
                          if (e.key === 'Escape') setEditingCodeClientId(null);
                        }}
                      />
                      <button
                        type="button"
                        onClick={() => handleSaveCode(selectedClient.id)}
                        disabled={savingCode}
                        className="p-1.5 bg-green-500 hover:bg-green-600 text-white rounded-lg transition shadow-sm"
                        title="Save Number / Letter"
                      >
                        <Check size={14} />
                      </button>
                      <button
                        type="button"
                        onClick={() => setEditingCodeClientId(null)}
                        className="p-1.5 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg transition"
                        title="Cancel"
                      >
                        <X size={14} />
                      </button>
                    </div>
                  ) : (
                    <h3 className="font-bold text-lg text-gray-900 flex items-center gap-2 flex-wrap">
                      {(() => {
                        const info = parseClientInfo(selectedClient.full_name);
                        return (
                          <>
                            {info.code ? (
                              <span className="bg-[#ff6b35]/10 text-[#ff6b35] border border-[#ff6b35]/25 text-xs px-2.5 py-0.5 rounded-lg font-black tracking-wider">
                                {info.code}
                              </span>
                            ) : null}
                            <span>{info.name}</span>
                            <button
                              type="button"
                              onClick={() => handleStartEditCode(selectedClient)}
                              className="p-1 text-gray-400 hover:text-[#ff6b35] hover:bg-orange-50 rounded-md transition"
                              title="Edit Client Number / Letter"
                            >
                              <Pencil size={13} />
                            </button>
                          </>
                        );
                      })()}
                    </h3>
                  )}
                  <p className="text-sm text-gray-500">{selectedClient.email}</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedClient(null)}
                className="p-2 text-gray-400 hover:text-gray-900 hover:bg-gray-200 rounded-lg transition"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-6 overflow-y-auto flex-1 bg-gray-50/30">
              {/* ASSIGNED SERVICE CARD */}
              {(() => {
                const currentService = (selectedClient.documents || []).find((d: any) => d.document_type === 'Assigned Service')?.file_name;
                return (
                  <div className="bg-white p-4 sm:p-5 rounded-2xl border border-indigo-100 shadow-sm mb-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                          <Briefcase size={16} />
                        </div>
                        <div>
                          <h4 className="font-bold text-sm text-gray-900">Client Service Assignment</h4>
                          <p className="text-[11px] text-gray-500 font-medium">Select or enter any service for this client — updates live in their portal</p>
                        </div>
                      </div>
                      {currentService && (
                        <span className="bg-green-50 text-green-700 border border-green-200 text-xs px-2.5 py-1 rounded-full font-bold flex items-center gap-1.5 self-start sm:self-auto">
                          <CheckCircle2 size={12} /> Active: {currentService}
                        </span>
                      )}
                    </div>

                    {/* Quick Preset Buttons */}
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {[
                        'Amazon FBA Wholesale',
                        'Private Label Launch',
                        'Brand Approval & Ungating',
                        'LLC & Bank Setup',
                        'PPC & Scaling Management',
                        'Amazon Account Reinstatement'
                      ].map((serviceName) => (
                        <button
                          key={serviceName}
                          type="button"
                          disabled={savingService}
                          onClick={() => {
                            setServiceInputValue(serviceName);
                            handleSaveService(selectedClient.id, serviceName);
                          }}
                          className={`text-xs px-3 py-1.5 rounded-xl font-semibold border transition ${currentService === serviceName
                              ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm'
                              : 'bg-gray-50 hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-200 border-gray-200 text-gray-700'
                            }`}
                        >
                          {serviceName}
                        </button>
                      ))}
                    </div>

                    {/* Custom Service Input */}
                    <div className="flex items-center gap-2 pt-2 border-t border-gray-100">
                      <input
                        type="text"
                        placeholder="Or write custom service name..."
                        value={serviceInputValue}
                        onChange={(e) => setServiceInputValue(e.target.value)}
                        className="flex-1 border border-gray-200 rounded-xl px-3.5 py-2 text-xs text-gray-900 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 bg-gray-50/50"
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') handleSaveService(selectedClient.id, serviceInputValue);
                        }}
                      />
                      <button
                        type="button"
                        disabled={savingService || !serviceInputValue.trim()}
                        onClick={() => handleSaveService(selectedClient.id, serviceInputValue)}
                        className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white text-xs font-bold rounded-xl transition flex items-center gap-1.5 shrink-0 shadow-sm"
                      >
                        <Check size={14} />
                        <span>{savingService ? 'Saving...' : 'Set Service'}</span>
                      </button>
                    </div>
                  </div>
                );
              })()}

              <h4 className="font-bold text-gray-900 mb-4">Uploaded Documents</h4>

              {(!selectedClient.documents || selectedClient.documents.filter((d: any) => d.document_type !== 'Profile Image' && d.document_type !== 'Assigned Service').length === 0) ? (
                <div className="text-center p-8 border-2 border-dashed border-gray-200 rounded-xl bg-white">
                  <AlertCircle size={32} className="mx-auto text-gray-300 mb-2" />
                  <p className="text-gray-500 font-medium">This client hasn't uploaded any documents yet.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {selectedClient.documents.filter((d: any) => d.document_type !== 'Profile Image' && d.document_type !== 'Assigned Service').map((doc: any) => {
                    const isTextCred = doc.document_type === 'Gmail Credentials' || doc.document_type === 'Company Email' || doc.document_type === 'Phone Number';
                    const isPdf = doc.file_url?.toLowerCase().endsWith('.pdf');

                    return (
                      <div key={doc.id} className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                        <div className="flex items-center gap-3">
                          {isTextCred ? (
                            <div className="w-12 h-12 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400 shrink-0">
                              <FileText size={20} />
                            </div>
                          ) : (
                            <div
                              onClick={() => setPreviewDoc(doc)}
                              className="w-14 h-14 rounded-xl border border-gray-200 overflow-hidden bg-gray-50 cursor-pointer group/thumb relative shrink-0 flex items-center justify-center hover:border-[#ff6b35] transition shadow-sm"
                              title="Click to Enlarge / View"
                            >
                              {isPdf ? (
                                <div className="flex flex-col items-center justify-center text-red-500">
                                  <FileText size={20} />
                                  <span className="text-[8px] font-black uppercase mt-0.5">PDF</span>
                                </div>
                              ) : (
                                <img src={doc.file_url} alt={doc.document_type} className="w-full h-full object-cover group-hover/thumb:scale-110 transition duration-300" />
                              )}
                              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/thumb:opacity-100 transition flex items-center justify-center text-white">
                                <Eye size={16} />
                              </div>
                            </div>
                          )}
                          <div>
                            <p className="font-bold text-sm text-gray-900">{doc.document_type}</p>
                            {doc.document_type === 'Gmail Credentials' ? (
                              <div className="mt-2 bg-white border border-gray-200 p-3 rounded-lg shadow-inner">
                                <p className="text-xs text-gray-500 font-bold mb-1">Email: <span className="font-mono text-gray-800">{doc.file_name}</span></p>
                                <p className="text-xs text-gray-500 font-bold">Password: <span className="font-mono text-gray-800">{doc.file_url}</span></p>
                              </div>
                            ) : doc.document_type === 'Company Email' ? (
                              <div className="mt-2 bg-white border border-gray-200 p-3 rounded-lg shadow-inner">
                                <p className="text-xs text-gray-500 font-bold">Company / Website Email: <span className="font-mono text-gray-800">{doc.file_name}</span></p>
                              </div>
                            ) : doc.document_type === 'Phone Number' ? (
                              <div className="mt-2 bg-white border border-gray-200 p-3 rounded-lg shadow-inner">
                                <p className="text-xs text-gray-500 font-bold">Phone Number: <span className="font-mono text-gray-800">{doc.file_name}</span></p>
                              </div>
                            ) : (
                              <div className="flex items-center gap-2 mt-2">
                                <button
                                  type="button"
                                  onClick={() => setPreviewDoc(doc)}
                                  className="text-xs font-bold text-[#ff6b35] bg-orange-50 hover:bg-orange-100 border border-orange-200 px-3 py-1.5 rounded-lg transition shadow-sm flex items-center gap-1.5"
                                >
                                  <Eye size={13} /> View Document
                                </button>
                                <a
                                  href={doc.file_url}
                                  target="_blank"
                                  download
                                  className="text-xs font-medium text-gray-500 hover:text-gray-900 bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-lg transition flex items-center gap-1.5"
                                >
                                  <Download size={13} /> Download
                                </a>
                              </div>
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
                            className={`text-[10px] font-black uppercase tracking-wider px-2 py-1.5 rounded-md border outline-none cursor-pointer transition ${doc.status === 'Approved' ? 'bg-green-50 text-green-600 border-green-200 hover:bg-green-100' :
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
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* In-App Full Lightbox Document Viewer */}
      {previewDoc && (
        <div
          onClick={() => setPreviewDoc(null)}
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh] border border-gray-100 animate-in fade-in zoom-in-95 duration-200"
          >
            {/* Modal Header */}
            <div className="p-4 px-6 border-b border-gray-100 flex items-center justify-between bg-white">
              <div>
                <h3 className="font-bold text-base text-gray-900">{previewDoc.document_type}</h3>
                <p className="text-xs text-gray-500 font-medium">
                  {selectedClient?.full_name ? `${selectedClient.full_name} • ` : ''}
                  Uploaded: {new Date(previewDoc.uploaded_at).toLocaleString()}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={previewDoc.file_url}
                  target="_blank"
                  download
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-xl transition"
                  title="Download File"
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

            {/* Modal Body: Document Display */}
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

            {/* Modal Footer: Quick Verification Actions */}
            <div className="p-4 px-6 border-t border-gray-100 bg-white flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-gray-500">Document Status:</span>
                <span className={`text-[10px] font-black uppercase px-2.5 py-1 rounded-full border ${previewDoc.status === 'Approved' ? 'bg-green-50 text-green-600 border-green-200' :
                    previewDoc.status === 'Rejected' ? 'bg-red-50 text-red-600 border-red-200' :
                      'bg-orange-50 text-orange-600 border-orange-200'
                  }`}>
                  {previewDoc.status}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => {
                    handleStatusUpdate(previewDoc.id, 'Approved');
                    setPreviewDoc((p: any) => p ? { ...p, status: 'Approved' } : null);
                  }}
                  className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-xl text-xs font-bold transition shadow-sm flex items-center gap-1.5"
                >
                  <CheckCircle2 size={15} /> Approve Document
                </button>
                <button
                  type="button"
                  onClick={() => {
                    handleStatusUpdate(previewDoc.id, 'Rejected');
                    setPreviewDoc((p: any) => p ? { ...p, status: 'Rejected' } : null);
                  }}
                  className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-bold transition shadow-sm flex items-center gap-1.5"
                >
                  <AlertCircle size={15} /> Reject Document
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
