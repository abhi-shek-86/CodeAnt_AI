import React from 'react';

interface LoginButtonProps {
  icon: React.ReactNode;
  provider: string;
  className?: string;
}

export function LoginButton({ icon, provider, className = '' }: LoginButtonProps) {
  return (
    <button className={`w-full flex items-center justify-center gap-2 py-2 px-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors ${className}`}>
      {icon}
      <span className="font-medium">Sign in with {provider}</span>
    </button>
  );
}