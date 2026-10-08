"use client";

import { useState } from 'react';
import { Settings, Save, Lock, Mail, Loader2, CheckCircle2 } from 'lucide-react';

export default function AdminSettings() {
  const [email, setEmail] = useState('admin@amazonfast.com');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setMessage('');

    if (newPassword !== confirmPassword) {
      setError("New passwords do not match.");
      return;
    }

    const savedPassword = localStorage.getItem('admin_master_password') || 'admin0000';
    
    if (currentPassword !== savedPassword) {
      setError("Current password is incorrect.");
      return;
    }

    setSaving(true);
    
    // Simulate network delay
    setTimeout(() => {
      if (newPassword) {
        localStorage.setItem('admin_master_password', newPassword);
      }
      
      setMessage("Settings updated successfully!");
      setSaving(false);
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
      
      setTimeout(() => setMessage(''), 3000);
    }, 1000);
  };

  return (
    <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm max-w-3xl">
      <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
        <Settings size={24} className="text-[#ff6b35]" /> Admin Preferences
      </h2>
      
      {message && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3 text-green-700 font-medium">
          <CheckCircle2 size={20} />
          {message}
        </div>
      )}

      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 font-medium">
          {error}
        </div>
      )}

      <form onSubmit={handleSave} className="space-y-8">
        {/* Email Settings */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2 border-b border-gray-100 pb-2">
            <Mail size={18} className="text-gray-400" /> Notifications
          </h3>
          
          <div className="flex flex-col gap-2 max-w-md">
            <label className="text-sm font-bold text-gray-700">Admin Notification Email</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:border-[#ff6b35] focus:ring-1 focus:ring-[#ff6b35] transition" 
              disabled // Email is currently hardcoded in the backend, so we keep it visually disabled or we explain it
            />
            <p className="text-xs text-gray-400 font-medium">This is where new client alerts are sent. (Controlled via environment variables)</p>
          </div>
        </div>

        {/* Security Settings */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2 border-b border-gray-100 pb-2">
            <Lock size={18} className="text-gray-400" /> Change Master Password
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2 md:col-span-2 max-w-md">
              <label className="text-sm font-bold text-gray-700">Current Password</label>
              <input 
                type="password" 
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className="px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:border-[#ff6b35] focus:ring-1 focus:ring-[#ff6b35] transition" 
                placeholder="Enter current password"
                required
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-gray-700">New Password</label>
              <input 
                type="password" 
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:border-[#ff6b35] focus:ring-1 focus:ring-[#ff6b35] transition" 
                placeholder="Enter new password"
                required
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-gray-700">Confirm New Password</label>
              <input 
                type="password" 
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:border-[#ff6b35] focus:ring-1 focus:ring-[#ff6b35] transition" 
                placeholder="Confirm new password"
                required
              />
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-gray-100 flex justify-end">
          <button 
            type="submit"
            disabled={saving}
            className="bg-[#ff6b35] text-white font-bold py-3 px-8 rounded-xl transition shadow-md hover:shadow-lg hover:bg-[#e85a2a] flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {saving ? <Loader2 size={18} className="animate-spin" /> : <Save size={18} />}
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}
