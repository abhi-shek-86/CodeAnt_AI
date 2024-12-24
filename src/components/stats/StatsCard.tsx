import React from 'react';

interface StatsCardProps {
  title: string;
  value: string;
}

export function StatsCard({ title, value }: StatsCardProps) {
  return (
    <div className="text-center">
      <div className="text-2xl font-bold mb-1">{value}</div>
      <div className="text-sm text-gray-600">{title}</div>
    </div>
  );
}