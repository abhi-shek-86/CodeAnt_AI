import React from 'react';
import { Search, RefreshCw, Plus } from 'lucide-react';

const repositories = [
  { name: 'design-system', language: 'React', size: '7320 KB', updated: '1 day ago', visibility: 'Public' },
  { name: 'codeant-ci-app', language: 'Javascript', size: '5871 KB', updated: '2 days ago', visibility: 'Private' },
  { name: 'analytics-dashboard', language: 'Python', size: '4521 KB', updated: '5 days ago', visibility: 'Private' },
  { name: 'mobile-app', language: 'Swift', size: '3096 KB', updated: '3 days ago', visibility: 'Public' },
  { name: 'e-commerce-platform', language: 'Java', size: '6210 KB', updated: '6 days ago', visibility: 'Private' },
  { name: 'blog-website', language: 'HTML/CSS', size: '1876 KB', updated: '4 days ago', visibility: 'Public' },
  { name: 'social-network', language: 'PHP', size: '5432 KB', updated: '7 days ago', visibility: 'Private' },
];

export function RepositoryList() {
  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h1 className="text-2xl font-bold mb-1">Repositories</h1>
          <p className="text-gray-600">33 total repositories</p>
        </div>
        <div className="flex gap-2 w-full md:w-auto">
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 hover:bg-gray-50">
            <RefreshCw size={20} />
            <span className="hidden md:inline">Refresh All</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600">
            <Plus size={20} />
            <span className="hidden md:inline">Add Repository</span>
          </button>
        </div>
      </div>

      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        <input
          type="text"
          placeholder="Search Repositories"
          className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="space-y-4">
        {repositories.map((repo) => (
          <div key={repo.name} className="bg-white p-4 rounded-lg border border-gray-200">
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-semibold">{repo.name}</h3>
                  <span className="px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-800">
                    {repo.visibility}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    {repo.language}
                  </div>
                  <span>{repo.size}</span>
                  <span>Updated {repo.updated}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}