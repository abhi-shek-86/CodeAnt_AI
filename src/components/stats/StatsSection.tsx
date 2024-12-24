import React from 'react';
import { Bug } from 'lucide-react';
import { StatsCard } from './StatsCard';

export function StatsSection() {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-8 w-full">
      <div className="flex items-center gap-3 mb-6">
        <Bug size={24} className="text-gray-900" />
        <h2 className="text-lg font-semibold">AI to Detect & Autofix Bad Code</h2>
      </div>
      
      <div className="grid grid-cols-3 gap-6">
        <StatsCard title="Language Support" value="30+" />
        <StatsCard title="Developers" value="10K+" />
        <StatsCard title="Hours Saved" value="100K+" />
      </div>
    </div>
  );
}