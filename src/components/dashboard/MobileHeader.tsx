import React, { useState } from 'react';
import { Bug, Menu, X } from 'lucide-react';
import { Sidebar } from './Sidebar';

export function MobileHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-white">
        <div className="flex items-center gap-2">
          <Bug size={32} className="text-gray-900" />
          <span className="text-xl font-semibold">CodeAnt AI</span>
        </div>
        <button 
          onClick={() => setIsMenuOpen(true)}
          className="p-2 hover:bg-gray-100 rounded-lg"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-50">
          <div className="flex justify-end p-4">
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-lg"
            >
              <X size={24} />
            </button>
          </div>
          <div className="h-[calc(100vh-64px)] overflow-y-auto">
            <Sidebar />
          </div>
        </div>
      )}
    </>
  );
}