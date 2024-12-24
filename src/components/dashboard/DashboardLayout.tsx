import React from 'react';
import { Sidebar } from './Sidebar';
import { RepositoryList } from './RepositoryList';
import { MobileHeader } from './MobileHeader';

export function DashboardLayout() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Header */}
      <div className="md:hidden">
        <MobileHeader />
      </div>

      <div className="flex">
        {/* Sidebar - Hidden on mobile */}
        <div className="hidden md:block w-64 min-h-screen border-r border-gray-200 bg-white">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <RepositoryList />
        </div>
      </div>
    </div>
  );
}