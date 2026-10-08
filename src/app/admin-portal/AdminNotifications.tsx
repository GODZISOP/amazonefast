"use client";

import { useState, useRef, useEffect } from 'react';
import { Bell, Activity } from 'lucide-react';

export default function AdminNotifications({ notifications, unreadNotifs }: { notifications: any[], unreadNotifs: number }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative cursor-pointer" ref={dropdownRef}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="text-gray-400 hover:text-gray-900 transition relative p-2"
      >
        <Bell size={20} />
        {unreadNotifs > 0 && (
          <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 border-2 border-white rounded-full"></span>
        )}
      </button>

      {/* Notification Dropdown */}
      {isOpen && (
        <div className="absolute top-12 right-0 w-80 bg-white border border-gray-200 shadow-xl rounded-2xl z-50 overflow-hidden">
          <div className="p-4 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
            <h4 className="font-bold text-sm text-gray-900">Recent Activity</h4>
            <span className="text-xs text-[#ff6b35] font-semibold cursor-pointer hover:underline">Mark all as read</span>
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
                    <p className="text-sm text-gray-800">
                      {notif.clients?.full_name ? <span className="font-bold">{notif.clients.full_name} </span> : ''}
                      {notif.message}
                    </p>
                    <p className="text-xs text-gray-400 mt-1">{new Date(notif.created_at).toLocaleDateString()}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}
