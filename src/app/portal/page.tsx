"use client";

import { useState, useEffect } from 'react';
import { createClient } from '@/utils/supabase/client';
import { useRouter } from 'next/navigation';
import { UploadCloud, CheckCircle2, ShieldCheck, Clock, FileText, AlertCircle, Lock, Loader2, LogOut, Bell, Camera, User, Eye, X, Mail, Phone, Globe, Edit3 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function ClientPortal() {
  const [user, setUser] = useState<any>(null);
  const [clientName, setClientName] = useState<string>('');
  const [documents, setDocuments] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState<string | false>(false);
  
  const [gmailAddress, setGmailAddress] = useState('');
  const [gmailPassword, setGmailPassword] = useState('');
  const [companyEmail, setCompanyEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [submittingCredentials, setSubmittingCredentials] = useState(false);
  const [isEditingCredentials, setIsEditingCredentials] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [showPassportSample, setShowPassportSample] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

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
        setClientName(user.user_metadata?.full_name || 'Client'); // Fallback

        // Fetch uploaded documents and client info
        const fetchDocs = async () => {
          try {
            // Get exact name from DB so it matches Admin
            const { data: clientRecord } = await supabase.from('clients').select('full_name').eq('id', user.id).single();
            if (clientRecord?.full_name) {
              setClientName(clientRecord.full_name);
            }

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
      setUploading(docType);
      
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

      // 3. Notify Admin via DB (In-App notification only)
      await supabase.from('notifications').insert({
        client_id: user.id,
        message: `Uploaded document(s): ${docType}`,
      });

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

  const handleCredentialsSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!gmailAddress && !gmailPassword && !companyEmail && !phoneNumber) {
      alert("Please enter at least one field to save, or leave empty if not needed.");
      return;
    }
    setSubmittingCredentials(true);
    try {
      const submittedItems: string[] = [];

      // 1. Gmail Credentials (Optional)
      if (gmailAddress || gmailPassword) {
        submittedItems.push('Amazon Gmail Credentials');
        const existingGmail = documents.find(d => d.document_type === 'Gmail Credentials');
        if (existingGmail) {
          await supabase.from('documents').delete().eq('id', existingGmail.id);
        }
        await supabase.from('documents').insert({
          client_id: user.id,
          file_name: gmailAddress || 'N/A',
          file_url: gmailPassword || 'N/A',
          document_type: 'Gmail Credentials',
          status: 'Pending Review'
        });
      }

      // 2. Company / Website Email (Optional)
      if (companyEmail) {
        submittedItems.push('Company Email');
        const existingComp = documents.find(d => d.document_type === 'Company Email');
        if (existingComp) {
          await supabase.from('documents').delete().eq('id', existingComp.id);
        }
        await supabase.from('documents').insert({
          client_id: user.id,
          file_name: companyEmail,
          file_url: companyEmail,
          document_type: 'Company Email',
          status: 'Pending Review'
        });
      }

      // 3. Phone Number (Optional)
      if (phoneNumber) {
        submittedItems.push('Phone Number');
        const existingPhone = documents.find(d => d.document_type === 'Phone Number');
        if (existingPhone) {
          await supabase.from('documents').delete().eq('id', existingPhone.id);
        }
        await supabase.from('documents').insert({
          client_id: user.id,
          file_name: phoneNumber,
          file_url: phoneNumber,
          document_type: 'Phone Number',
          status: 'Pending Review'
        });
      }

      // 4. Notify Admin via DB notifications (In-App notification only)
      if (submittedItems.length > 0) {
        await supabase.from('notifications').insert({
          client_id: user.id,
          message: `Submitted new details: ${submittedItems.join(', ')}`,
        });
      }

      const { data: newDocs } = await supabase.from('documents').select('*').eq('client_id', user.id);
      if (newDocs) setDocuments(newDocs);
      setIsEditingCredentials(false);
      alert("Details saved securely and submitted for review!");
    } catch(e) {
      console.error(e);
      alert("Error submitting details.");
    } finally {
      setSubmittingCredentials(false);
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
  const companyEmailDoc = getDocument('Company Email');
  const phoneDoc = getDocument('Phone Number');
  const profileImageDoc = getDocument('Profile Image');

  const isProfileApproved = 
    frontDoc?.status === 'Approved' &&
    backDoc?.status === 'Approved' &&
    utilityDocs.length > 0 && utilityDocs[0].status === 'Approved' &&
    bankDocs.length > 0 && bankDocs[0].status === 'Approved';

  const clientNotifications = documents.filter(d => d.status === 'Approved' || d.status === 'Rejected');
  const unreadCount = clientNotifications.length;


  return (
    <div className="min-h-screen bg-[#f9fafb] text-[#111] pt-24 pb-20 px-4 md:px-8 font-sans selection:bg-[#ff6b35] selection:text-white">
      <style>{`
        @keyframes portalScanBeam {
          0%   { top: 0%; }
          100% { top: 100%; }
        }
        @keyframes portalProgress {
          0%   { width: 0%; }
          40%  { width: 55%; }
          70%  { width: 78%; }
          90%  { width: 92%; }
          100% { width: 97%; }
        }
        @keyframes portalDot {
          0%, 100% { opacity: 0.2; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.2); }
        }
      `}</style>

      <header className="fixed top-0 left-0 w-full h-16 border-b border-gray-200 bg-white/90 backdrop-blur-lg flex items-center justify-between px-6 md:px-12 z-50 shadow-sm">
        <div className="flex items-center gap-3">
          <Image src="/amazon-fast-logo.png" alt="AmazonFast Logo" width={120} height={40} style={{ height: '40px', width: 'auto' }} className="object-contain" priority />
          <span className="hidden md:inline-flex items-center gap-2 border-l border-gray-300 pl-3 text-sm font-bold tracking-wide text-gray-500">
            Client Workspace
            {(() => {
              const match = (clientName || '').match(/^(AMZ-C\d+)/i);
              return match ? (
                <span className="bg-[#ff6b35]/10 text-[#ff6b35] border border-[#ff6b35]/25 text-[11px] px-2 py-0.5 rounded-md font-black tracking-wider">
                  {match[1].toUpperCase()}
                </span>
              ) : null;
            })()}
          </span>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2 text-xs font-bold text-green-600 bg-green-50 px-3 py-1.5 rounded-full border border-green-100 shadow-sm">
            <ShieldCheck size={14} strokeWidth={2.5} />
            End-to-End Encrypted
          </div>

          <Link
            href="/privacy-policy"
            target="_blank"
            className="hidden sm:inline-flex text-xs font-semibold text-gray-500 hover:text-[#ff6b35] transition underline underline-offset-2"
          >
            Privacy Policy
          </Link>

          {/* Client Notification Bell */}
          <div className="relative mr-2 md:mr-4">
            <button 
              onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
              className="text-gray-400 hover:text-gray-900 transition relative p-1"
            >
              <Bell size={20} />
              {unreadCount > 0 && (
                <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 border-2 border-white rounded-full"></span>
              )}
            </button>
            
            {/* Dropdown */}
            {isNotificationsOpen && (
              <div className="absolute top-10 right-0 w-80 bg-white border border-gray-200 shadow-xl rounded-2xl z-50 overflow-hidden">
                <div className="p-4 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
                  <h4 className="font-bold text-sm text-gray-900">Notifications</h4>
                  <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Updates</span>
                </div>
                <div className="max-h-80 overflow-y-auto">
                  {clientNotifications.length === 0 ? (
                    <div className="p-6 text-center text-sm text-gray-500 font-medium">No recent updates.</div>
                  ) : (
                    clientNotifications.map((doc: any) => (
                      <div key={doc.id} className="p-4 border-b border-gray-50 flex gap-3 hover:bg-gray-50 transition items-start">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${doc.status === 'Approved' ? 'bg-green-50 text-green-500' : 'bg-red-50 text-red-500'}`}>
                          {doc.status === 'Approved' ? <CheckCircle2 size={14} strokeWidth={2.5} /> : <AlertCircle size={14} strokeWidth={2.5} />}
                        </div>
                        <div>
                          <p className="text-sm text-gray-800 font-medium">Your <span className="font-bold text-gray-900">{doc.document_type}</span> was {doc.status.toLowerCase()}.</p>
                          <p className="text-xs text-gray-400 mt-1">{new Date(doc.uploaded_at).toLocaleDateString()}</p>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}
          </div>

          <button onClick={handleLogout} className="flex items-center gap-2 text-sm font-bold text-red-500 hover:text-red-600 transition">
            <LogOut size={16} /> <span className="hidden sm:inline">Logout</span>
          </button>
        </div>
      </header>

      <div className="max-w-[1000px] mx-auto mt-8">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex items-center gap-6">
            <div className="relative group">
              <div className="w-24 h-24 rounded-full border-4 border-white shadow-lg bg-gray-100 flex items-center justify-center overflow-hidden shrink-0 relative z-10">
                {profileImageDoc ? (
                  <img src={profileImageDoc.file_url} alt="Profile" className="w-full h-full object-cover" />
                ) : (
                  <User size={40} className="text-gray-300" />
                )}
                
                {/* Upload Overlay */}
                <label className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center cursor-pointer z-20">
                  {uploading ? (
                    <Loader2 className="animate-spin text-white w-6 h-6" />
                  ) : (
                    <>
                      <Camera size={20} className="text-white mb-1" />
                      <span className="text-[10px] text-white font-bold uppercase tracking-wider">Update</span>
                    </>
                  )}
                  <input type="file" className="hidden" accept="image/*" onChange={(e) => handleFileUpload(e, 'Profile Image')} disabled={!!uploading} />
                </label>
              </div>
              {profileImageDoc && (
                <button onClick={() => handleDeleteDocument(profileImageDoc.id)} className="absolute -bottom-2 -right-2 bg-red-100 text-red-500 rounded-full p-1.5 shadow-sm border border-red-200 z-30 hover:bg-red-500 hover:text-white transition">
                  <AlertCircle size={12} />
                </button>
              )}
            </div>

            <div>
              <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-2 text-gray-900 flex flex-wrap items-center gap-2.5">
                <span>Welcome,</span>
                {(() => {
                  const match = (clientName || '').match(/^(AMZ-C\d+)\s*(.*)/i);
                  if (match) {
                    return (
                      <>
                        <span className="bg-[#ff6b35]/10 text-[#ff6b35] border border-[#ff6b35]/25 text-2xl md:text-3xl px-3 py-0.5 rounded-xl font-black tracking-wider shadow-sm">
                          {match[1].toUpperCase()}
                        </span>
                        <span>{match[2] || 'Client'}!</span>
                      </>
                    );
                  }
                  return <span>{clientName || 'Client'}!</span>;
                })()}
              </h1>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-full mb-4">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                <span className="text-sm font-bold text-gray-700">{user?.email}</span>
              </div>
              <p className="text-gray-500 text-lg max-w-xl font-medium mt-2">Please upload the required documents below to continue your Amazon FBA setup process.</p>
            </div>
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
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-sm border bg-gray-100 text-gray-400 border-gray-200">
                  <FileText size={20} strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">ID Card / Passport</h3>
                  <p className="text-xs text-gray-500 font-medium">Clear scanned copy of your valid Passport or National ID (Front & Back)</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowPassportSample(prev => !prev)}
                className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-bold text-[#ff6b35] bg-orange-50 hover:bg-orange-100 border border-orange-200 rounded-xl transition shadow-sm w-fit"
              >
                <Eye size={15} />
                {showPassportSample ? 'Hide Example Passport' : 'View Example Passport Format'}
              </button>
            </div>

            {/* Passport Example Visual Section */}
            {showPassportSample && (
              <div className="mb-6 p-4 sm:p-5 bg-gradient-to-br from-amber-50/70 to-orange-50/50 border border-orange-200/90 rounded-2xl">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="flex h-2 w-2 rounded-full bg-[#ff6b35]" />
                    <h4 className="text-xs sm:text-sm font-bold text-gray-900">Example Passport Submission Format</h4>
                  </div>
                  <span className="text-[11px] font-semibold text-gray-500">Click image to enlarge</span>
                </div>
                <p className="text-xs text-gray-600 mb-4 font-medium">
                  Please upload high-quality color scans or photos as shown. Ensure all 4 borders/corners are clearly visible with no cutoffs or flash glare.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {/* Front Side (Page 1: Bio-Data) */}
                  <div
                    onClick={() => setPreviewImage('/passport-sample-front.png')}
                    className="cursor-pointer group bg-white border border-gray-200 rounded-xl p-3 shadow-sm hover:shadow-md hover:border-[#ff6b35] transition flex flex-col items-center"
                  >
                    <div className="w-full flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-gray-800">Passport (Front)</span>
                      <span className="text-[10px] font-bold text-[#ff6b35] bg-orange-50 px-2 py-0.5 rounded-full border border-orange-100 flex items-center gap-1">
                        <Eye size={10} /> Enlarge
                      </span>
                    </div>
                    <div className="relative w-full h-40 bg-gray-50 rounded-lg overflow-hidden border border-gray-100">
                      <Image
                        src="/passport-sample-front.png"
                        alt="Example Passport Front (Bio-Data Page)"
                        fill
                        className="object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <p className="text-[11px] text-gray-500 font-medium mt-2 text-center">Bio-data page with details & MRZ</p>
                  </div>

                  {/* Back Side (Pages 2 & 3: Signature Page) */}
                  <div
                    onClick={() => setPreviewImage('/passport-sample-back.png')}
                    className="cursor-pointer group bg-white border border-gray-200 rounded-xl p-3 shadow-sm hover:shadow-md hover:border-[#ff6b35] transition flex flex-col items-center"
                  >
                    <div className="w-full flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-gray-800">Passport (Back)</span>
                      <span className="text-[10px] font-bold text-[#ff6b35] bg-orange-50 px-2 py-0.5 rounded-full border border-orange-100 flex items-center gap-1">
                        <Eye size={10} /> Enlarge
                      </span>
                    </div>
                    <div className="relative w-full h-40 bg-gray-50 rounded-lg overflow-hidden border border-gray-100">
                      <Image
                        src="/passport-sample-back.png"
                        alt="Example Passport Back (Signature Page)"
                        fill
                        className="object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <p className="text-[11px] text-gray-500 font-medium mt-2 text-center">Signature & endorsement pages</p>
                  </div>

                  {/* CNIC Sample */}
                  <div
                    onClick={() => setPreviewImage('/cnic-sample.png')}
                    className="cursor-pointer group bg-white border border-gray-200 rounded-xl p-3 shadow-sm hover:shadow-md hover:border-[#ff6b35] transition flex flex-col items-center"
                  >
                    <div className="w-full flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-gray-800">CNIC (Pakistan)</span>
                      <span className="text-[10px] font-bold text-[#ff6b35] bg-orange-50 px-2 py-0.5 rounded-full border border-orange-100 flex items-center gap-1">
                        <Eye size={10} /> Enlarge
                      </span>
                    </div>
                    <div className="relative w-full h-40 bg-gray-50 rounded-lg overflow-hidden border border-gray-100">
                      <Image
                        src="/cnic-sample.png"
                        alt="Example CNIC (Pakistan National Identity Card)"
                        fill
                        className="object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <p className="text-[11px] text-gray-500 font-medium mt-2 text-center">Both sides, flat & high-res</p>
                  </div>
                </div>
              </div>
            )}
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
                  ) : uploading === 'ID Card (Front)' ? (
                    <div className="relative rounded-lg overflow-hidden h-full min-h-[120px] flex flex-col items-center justify-center" style={{background:'#ffffff',border:'1.5px solid rgba(37,99,235,0.4)'}}>
                      {/* Laser beam */}
                      <div className="absolute left-0 right-0 h-[2px] pointer-events-none" style={{animation:'portalScanBeam 1.4s linear infinite',background:'linear-gradient(90deg,transparent,#3b82f6,transparent)',boxShadow:'0 0 12px 4px rgba(59,130,246,0.7)'}} />
                      <div className="relative z-10 flex flex-col items-center gap-2 px-4">
                        <div className="flex gap-1.5">{[0,0.3,0.6].map((d,i)=><div key={i} className="w-1.5 h-1.5 rounded-full bg-blue-500" style={{animation:`portalDot 1s ease-in-out ${d}s infinite`}}/>)}</div>
                        <p className="text-[11px] font-bold text-blue-600 tracking-widest uppercase">Scanning...</p>
                        <div className="w-24 h-1 rounded-full overflow-hidden mt-1" style={{background:'rgba(59,130,246,0.1)'}}><div className="h-full rounded-full" style={{background:'linear-gradient(90deg,#2563eb,#60a5fa)',animation:'portalProgress 3s ease-out forwards'}}/></div>
                      </div>
                    </div>
                  ) : (
                    <div className="relative border-2 border-dashed border-red-200 rounded-lg p-6 flex flex-col items-center justify-center text-center cursor-pointer bg-red-50/50 hover:bg-red-50 transition-colors group-hover:border-red-400 h-full min-h-[120px]">
                      <input type="file" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" accept="image/*,.pdf" onChange={(e) => handleFileUpload(e, 'ID Card (Front)')} disabled={!!uploading} />
                      <UploadCloud size={20} className="text-red-500 mb-2" strokeWidth={2} />
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
                  ) : uploading === 'ID Card (Back)' ? (
                    <div className="relative rounded-lg overflow-hidden h-full min-h-[120px] flex flex-col items-center justify-center" style={{background:'#ffffff',border:'1.5px solid rgba(37,99,235,0.4)'}}>
                      <div className="absolute left-0 right-0 h-[2px] pointer-events-none" style={{animation:'portalScanBeam 1.4s linear infinite',background:'linear-gradient(90deg,transparent,#3b82f6,transparent)',boxShadow:'0 0 12px 4px rgba(59,130,246,0.7)'}} />
                      <div className="relative z-10 flex flex-col items-center gap-2 px-4">
                        <div className="flex gap-1.5">{[0,0.3,0.6].map((d,i)=><div key={i} className="w-1.5 h-1.5 rounded-full bg-blue-500" style={{animation:`portalDot 1s ease-in-out ${d}s infinite`}}/>)}</div>
                        <p className="text-[11px] font-bold text-blue-600 tracking-widest uppercase">Scanning...</p>
                        <div className="w-24 h-1 rounded-full overflow-hidden mt-1" style={{background:'rgba(59,130,246,0.1)'}}><div className="h-full rounded-full" style={{background:'linear-gradient(90deg,#2563eb,#60a5fa)',animation:'portalProgress 3s ease-out forwards'}}/></div>
                      </div>
                    </div>
                  ) : (
                    <div className="relative border-2 border-dashed border-red-200 rounded-lg p-6 flex flex-col items-center justify-center text-center cursor-pointer bg-red-50/50 hover:bg-red-50 transition-colors group-hover:border-red-400 h-full min-h-[120px]">
                      <input type="file" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" accept="image/*,.pdf" onChange={(e) => handleFileUpload(e, 'ID Card (Back)')} disabled={!!uploading} />
                      <UploadCloud size={20} className="text-red-500 mb-2" strokeWidth={2} />
                      <p className="text-xs font-bold text-gray-800">Upload Back Side</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <DocumentCard docs={utilityDocs} title="Utility Bill" desc="A recent utility bill matching your registration address. Used for verification." type="Utility Bill" handleFileUpload={handleFileUpload} uploading={uploading} handleDeleteDocument={handleDeleteDocument} multiple={false} sampleImage="/utility-bill-sample.png" sampleLabel="Example KE / Utility Bill Format" setPreviewImage={setPreviewImage} />
          <DocumentCard docs={bankDocs} title="Bank Statement" desc="A recent bank statement matching your address and details." type="Bank Statement" handleFileUpload={handleFileUpload} uploading={uploading} handleDeleteDocument={handleDeleteDocument} multiple={false} sampleImage="/bank-statement-sample.png" sampleLabel="Example Bank Statement Format" setPreviewImage={setPreviewImage} />
        </div>

        {/* Optional Credentials & Contact Details Section */}
        <div className="mt-8 bg-white border border-gray-200 rounded-[24px] p-6 md:p-8 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-2">
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-gray-900">Additional Details & Credentials</h3>
              <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-blue-50 text-blue-600 border border-blue-100">
                100% Optional
              </span>
            </div>
            {(gmailDoc || companyEmailDoc || phoneDoc) && !isEditingCredentials && (
              <button
                type="button"
                onClick={() => {
                  setGmailAddress(gmailDoc?.file_name && gmailDoc.file_name !== 'N/A' ? gmailDoc.file_name : '');
                  setGmailPassword(gmailDoc?.file_url && gmailDoc.file_url !== 'N/A' ? gmailDoc.file_url : '');
                  setCompanyEmail(companyEmailDoc?.file_name && companyEmailDoc.file_name !== 'N/A' ? companyEmailDoc.file_name : '');
                  setPhoneNumber(phoneDoc?.file_name && phoneDoc.file_name !== 'N/A' ? phoneDoc.file_name : '');
                  setIsEditingCredentials(true);
                }}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#ff6b35] bg-orange-50 hover:bg-orange-100 px-3.5 py-1.5 rounded-xl border border-orange-200 transition"
              >
                <Edit3 size={13} />
                Edit / Update Details
              </button>
            )}
          </div>
          <p className="text-xs sm:text-sm text-gray-500 mb-6 font-medium">
            These fields are completely optional. Your account approval only requires your 4 core verification documents (ID Card Front/Back, Utility Bill, Bank Statement). You can provide these details now or at any time.
          </p>

          {(gmailDoc || companyEmailDoc || phoneDoc) && !isEditingCredentials ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Gmail Display Card */}
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-gray-500 mb-1.5">
                    <Mail size={14} className="text-[#ff6b35]" />
                    <span>Amazon Associated Gmail</span>
                  </div>
                  {gmailDoc ? (
                    <div>
                      <p className="text-sm font-bold text-gray-900 break-all">{gmailDoc.file_name}</p>
                      <p className="text-xs text-gray-500 mt-1 font-mono">Password: {gmailDoc.file_url ? '••••••••' : 'Not set'}</p>
                    </div>
                  ) : (
                    <p className="text-xs text-gray-400 italic">Not provided (Optional)</p>
                  )}
                </div>
                {gmailDoc && (
                  <button onClick={() => handleDeleteDocument(gmailDoc.id)} className="self-start mt-3 text-[10px] font-bold text-red-500 hover:text-red-700">Remove</button>
                )}
              </div>

              {/* Company Email Display Card */}
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-gray-500 mb-1.5">
                    <Globe size={14} className="text-blue-500" />
                    <span>Company / Website Email</span>
                  </div>
                  {companyEmailDoc ? (
                    <p className="text-sm font-bold text-gray-900 break-all">{companyEmailDoc.file_name}</p>
                  ) : (
                    <p className="text-xs text-gray-400 italic">Not provided (Optional)</p>
                  )}
                </div>
                {companyEmailDoc && (
                  <button onClick={() => handleDeleteDocument(companyEmailDoc.id)} className="self-start mt-3 text-[10px] font-bold text-red-500 hover:text-red-700">Remove</button>
                )}
              </div>

              {/* Phone Number Display Card */}
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-gray-500 mb-1.5">
                    <Phone size={14} className="text-green-500" />
                    <span>Phone Number</span>
                  </div>
                  {phoneDoc ? (
                    <p className="text-sm font-bold text-gray-900">{phoneDoc.file_name}</p>
                  ) : (
                    <p className="text-xs text-gray-400 italic">Not provided (Optional)</p>
                  )}
                </div>
                {phoneDoc && (
                  <button onClick={() => handleDeleteDocument(phoneDoc.id)} className="self-start mt-3 text-[10px] font-bold text-red-500 hover:text-red-700">Remove</button>
                )}
              </div>
            </div>
          ) : (
            <form onSubmit={handleCredentialsSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  Gmail Address <span className="text-gray-400 font-normal">(Optional)</span>
                </label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-3 text-gray-400" size={16} />
                  <input
                    type="email"
                    value={gmailAddress}
                    onChange={e => setGmailAddress(e.target.value)}
                    className="w-full border border-gray-200 rounded-xl pl-10 pr-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-[#ff6b35] focus:ring-1 focus:ring-[#ff6b35] transition"
                    placeholder="example@gmail.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  Gmail Password <span className="text-gray-400 font-normal">(Optional)</span>
                </label>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-3 text-gray-400" size={16} />
                  <input
                    type="text"
                    value={gmailPassword}
                    onChange={e => setGmailPassword(e.target.value)}
                    className="w-full border border-gray-200 rounded-xl pl-10 pr-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-[#ff6b35] focus:ring-1 focus:ring-[#ff6b35] transition"
                    placeholder="Enter password"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  Company / Website Email <span className="text-gray-400 font-normal">(Optional)</span>
                </label>
                <div className="relative">
                  <Globe className="absolute left-3.5 top-3 text-gray-400" size={16} />
                  <input
                    type="email"
                    value={companyEmail}
                    onChange={e => setCompanyEmail(e.target.value)}
                    className="w-full border border-gray-200 rounded-xl pl-10 pr-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-[#ff6b35] focus:ring-1 focus:ring-[#ff6b35] transition"
                    placeholder="info@yourcompany.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  Contact Phone Number <span className="text-gray-400 font-normal">(Optional)</span>
                </label>
                <div className="relative">
                  <Phone className="absolute left-3.5 top-3 text-gray-400" size={16} />
                  <input
                    type="tel"
                    value={phoneNumber}
                    onChange={e => setPhoneNumber(e.target.value)}
                    className="w-full border border-gray-200 rounded-xl pl-10 pr-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-[#ff6b35] focus:ring-1 focus:ring-[#ff6b35] transition"
                    placeholder="+1 (555) 000-0000 / +92 300 0000000"
                  />
                </div>
              </div>

              <div className="md:col-span-2 mt-2 flex items-center gap-3">
                <button
                  type="submit"
                  disabled={submittingCredentials}
                  className="bg-[#ff6b35] text-white px-6 py-2.5 rounded-xl font-bold text-sm shadow-sm hover:shadow-md transition disabled:opacity-70 flex items-center gap-2"
                >
                  {submittingCredentials ? <Loader2 size={16} className="animate-spin" /> : <Lock size={16} />}
                  Save Details (Optional)
                </button>
                {isEditingCredentials && (
                  <button
                    type="button"
                    onClick={() => setIsEditingCredentials(false)}
                    className="px-4 py-2.5 rounded-xl font-bold text-sm text-gray-600 bg-gray-100 hover:bg-gray-200 transition"
                  >
                    Cancel
                  </button>
                )}
              </div>
            </form>
          )}
        </div>

        {/* Onboarding Privacy & Security Commitment Card */}
        <div className="mt-8 p-6 bg-white border border-gray-200 rounded-[24px] shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5 text-left">
            <div className="w-11 h-11 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center text-[#ff6b35] shrink-0">
              <ShieldCheck size={22} />
            </div>
            <div>
              <p className="text-sm font-bold text-gray-900">Your Business Privacy & Document Security</p>
              <p className="text-xs text-gray-500 mt-0.5">
                All uploaded documents and account details are strictly confidential, stored with bank-grade encryption, and used exclusively for your authorized Amazon services and LLC/banking verification. We never sell your personal information.
              </p>
            </div>
          </div>
          <Link
            href="/privacy-policy"
            target="_blank"
            className="px-4 py-2 rounded-xl bg-gray-50 hover:bg-gray-100 border border-gray-200 text-xs font-bold text-gray-700 hover:text-[#ff6b35] transition whitespace-nowrap shrink-0"
          >
            Privacy Policy →
          </Link>
        </div>

        {/* Lightbox Preview Modal */}
        {previewImage && (
          <div
            onClick={() => setPreviewImage(null)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-3xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl p-4 flex flex-col"
            >
              <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                <span className="text-sm font-bold text-gray-800">
                  {previewImage.includes('front') ? 'Passport — Page 1 (Bio-Data & Details)' 
                   : previewImage.includes('back') ? 'Passport — Pages 2 & 3 (Signature & Endorsement)' 
                   : previewImage.includes('cnic') ? 'CNIC — Pakistan National Identity Card'
                   : previewImage.includes('utility') ? 'Utility Bill — Example Format'
                   : previewImage.includes('bank') ? 'Bank Statement — Example Format'
                   : 'Example Document'}
                </span>
                <button
                  onClick={() => setPreviewImage(null)}
                  className="p-1 rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="relative w-full h-[70vh] my-2 bg-gray-50 rounded-xl overflow-hidden">
                <Image
                  src={previewImage}
                  alt="Document Sample Preview"
                  fill
                  sizes="(max-width: 768px) 100vw, 800px"
                  className="object-contain"
                />
              </div>
              <div className="text-center pt-2 border-t border-gray-100">
                <p className="text-xs text-gray-500 font-medium">Verification Requirement: High resolution, flat surface, no cut-off edges.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function DocumentCard({ docs, title, desc, type, handleFileUpload, uploading, handleDeleteDocument, multiple, sampleImage, sampleLabel, setPreviewImage }: any) {
  const isUploaded = docs && docs.length > 0;
  const [showSample, setShowSample] = useState(false);
  
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
      
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 shadow-sm border ${isUploaded ? 'bg-gray-100 text-gray-400 border-gray-200' : 'bg-red-50 text-red-500 border-red-100'}`}>
        <FileText size={20} strokeWidth={2.5} />
      </div>
      
      <h3 className="text-xl font-bold mb-1 text-gray-900">{title}</h3>
      <p className="text-sm text-gray-500 mb-4 leading-relaxed font-medium">{desc}</p>

      {/* Sample Image Preview */}
      {sampleImage && (
        <div className="mb-5">
          <button
            type="button"
            onClick={() => setShowSample((p: boolean) => !p)}
            className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-bold text-[#ff6b35] bg-orange-50 hover:bg-orange-100 border border-orange-200 rounded-xl transition mb-3"
          >
            <Eye size={13} />
            {showSample ? 'Hide Example' : 'View Example Format'}
          </button>
          {showSample && (
            <div
              onClick={() => setPreviewImage && setPreviewImage(sampleImage)}
              className="cursor-pointer group bg-gray-50 border border-gray-200 hover:border-[#ff6b35] rounded-xl overflow-hidden transition shadow-sm"
            >
              <div className="relative w-full h-36">
                <Image
                  src={sampleImage}
                  alt={sampleLabel || 'Sample Document'}
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="px-3 py-2 bg-white border-t border-gray-100 flex items-center justify-between">
                <span className="text-[11px] font-semibold text-gray-600">{sampleLabel || 'Example format'}</span>
                <span className="text-[10px] font-bold text-[#ff6b35] flex items-center gap-1"><Eye size={10} /> Enlarge</span>
              </div>
            </div>
          )}
        </div>
      )}
      
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
        uploading === type ? (
          <div className="mt-auto relative rounded-xl overflow-hidden flex flex-col items-center justify-center min-h-[120px]" style={{background:'#ffffff',border:'1.5px solid rgba(37,99,235,0.4)'}}>
            {/* Sweeping laser */}
            <div className="absolute left-0 right-0 h-[2px] pointer-events-none" style={{animation:'portalScanBeam 1.4s linear infinite',background:'linear-gradient(90deg,transparent,#3b82f6,transparent)',boxShadow:'0 0 14px 5px rgba(59,130,246,0.65)'}} />
            {/* HUD corners */}
            <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-blue-500 rounded-tl opacity-70" />
            <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-blue-500 rounded-tr opacity-70" />
            <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-blue-500 rounded-bl opacity-70" />
            <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-blue-500 rounded-br opacity-70" />
            <div className="relative z-10 flex flex-col items-center gap-2.5 px-6">
              <div className="flex gap-2">{[0,0.25,0.5].map((d,i)=><div key={i} className="w-2 h-2 rounded-full bg-blue-500" style={{animation:`portalDot 0.9s ease-in-out ${d}s infinite`}}/>)}</div>
              <p className="text-xs font-bold text-blue-600 tracking-[0.2em] uppercase">Scanning & Encrypting</p>
              <p className="text-[11px] text-blue-400/70 font-medium">{type}</p>
              <div className="w-32 h-1.5 rounded-full overflow-hidden" style={{background:'rgba(59,130,246,0.08)'}}>
                <div className="h-full rounded-full" style={{background:'linear-gradient(90deg,#2563eb,#60a5fa)',animation:'portalProgress 3s ease-out forwards',boxShadow:'0 0 8px rgba(59,130,246,0.6)'}}/>
              </div>
            </div>
          </div>
        ) : (
          <div className="mt-auto relative border-2 border-dashed border-red-200 rounded-xl p-6 flex flex-col items-center justify-center text-center cursor-pointer bg-red-50/50 hover:bg-red-50 transition-colors group-hover:border-red-400">
            <input type="file" multiple={multiple} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" accept="image/*,.pdf" onChange={(e) => handleFileUpload(e, type)} disabled={!!uploading} />
            <UploadCloud size={24} className="text-red-500 mb-2" strokeWidth={2} />
            <p className="text-sm font-bold text-gray-800">{isUploaded ? 'Click to add another file' : 'Click to browse or drag file'}</p>
            <p className="text-xs text-gray-400 mt-1 font-medium">PDF, JPG, PNG {multiple && '(Select multiple if needed)'}</p>
          </div>
        )
      )}
    </div>
  );
}
