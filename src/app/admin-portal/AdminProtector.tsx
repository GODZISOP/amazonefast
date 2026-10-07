"use client";

import { useState, useEffect } from 'react';
import { Lock } from 'lucide-react';

export default function AdminProtector({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (localStorage.getItem('admin_auth') === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'admin0000') {
      localStorage.setItem('admin_auth', 'true');
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Incorrect master password');
    }
  };

  // Prevent hydration mismatch by not rendering anything until mounted
  if (!mounted) return null;

  if (isAuthenticated) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-[#f9fafb] flex flex-col items-center justify-center p-4 selection:bg-[#ff6b35] selection:text-white">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl border border-gray-100 p-8 text-center">
        <div className="w-16 h-16 bg-[#ff6b35]/10 text-[#ff6b35] rounded-full flex items-center justify-center mx-auto mb-6">
          <Lock size={32} />
        </div>
        
        <h1 className="text-2xl font-black text-gray-900 mb-2">Admin Access</h1>
        <p className="text-gray-500 text-sm mb-8 font-medium">Please enter the master password to access the admin portal.</p>
        
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="text-left">
            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Master Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#ff6b35] focus:border-[#ff6b35] outline-none transition font-medium text-gray-900"
              placeholder="••••••••"
              required
            />
          </div>
          
          {error && <p className="text-red-500 text-sm font-bold">{error}</p>}
          
          <button 
            type="submit"
            className="w-full bg-[#ff6b35] hover:bg-[#e85a2a] text-white font-bold py-3 px-4 rounded-xl transition shadow-md hover:shadow-lg flex items-center justify-center gap-2"
          >
            Access Dashboard
          </button>
        </form>
      </div>
    </div>
  );
}
