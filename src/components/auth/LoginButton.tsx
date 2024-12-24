import React from 'react';

interface LoginButtonProps {
  icon: React.ReactNode;
  provider: string;
  onClick: () => void;
}

export function LoginButton({ icon, provider, onClick }: LoginButtonProps) {
  return (
    <button 
      onClick={onClick}
      className="w-full flex items-center justify-center gap-3 py-3 px-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
    >
      {icon}
      <span className="text-sm font-medium">Sign in with {provider}</span>
    </button>
  );
}