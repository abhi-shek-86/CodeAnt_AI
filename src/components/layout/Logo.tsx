import React from 'react';
import { Bug } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Bug size={32} className="text-gray-900" />
      <span className="text-xl font-semibold">CodeAnt AI</span>
    </div>
  );
}