import React from 'react';

export function IssuesCard() {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-6 w-full mt-4">
      <div className="flex items-center gap-3 mb-2">
        <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
          <div className="h-5 w-5 bg-blue-500 rounded-full" />
        </div>
        <div>
          <div className="text-sm text-blue-500 flex items-center gap-1">
            <span>↑ 14%</span>
          </div>
          <div className="text-sm text-gray-500">This week</div>
        </div>
      </div>
      <div className="mt-2">
        <div className="text-base font-medium mb-1">Issues Fixed</div>
        <div className="text-4xl font-bold">500K+</div>
      </div>
    </div>
  );
}