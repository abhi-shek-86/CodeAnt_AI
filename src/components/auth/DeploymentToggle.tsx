import React from 'react';
import { useDeployment } from './DeploymentContext';
import type { DeploymentType } from './types';

export function DeploymentToggle() {
  const { deploymentType, setDeploymentType } = useDeployment();

  const handleToggle = (type: DeploymentType) => {
    setDeploymentType(type);
  };

  return (
    <div className="flex rounded-lg border border-gray-200 p-1 gap-1">
      <button 
        className={`flex-1 py-2.5 px-4 rounded-md transition-colors text-sm font-medium ${
          deploymentType === 'saas' 
            ? 'bg-blue-500 text-white' 
            : 'text-gray-700'
        }`}
        onClick={() => handleToggle('saas')}
      >
        SAAS
      </button>
      <button 
        className={`flex-1 py-2.5 px-4 rounded-md transition-colors text-sm font-medium ${
          deploymentType === 'self-hosted' 
            ? 'bg-blue-500 text-white' 
            : 'text-gray-700'
        }`}
        onClick={() => handleToggle('self-hosted')}
      >
        Self Hosted
      </button>
    </div>
  );
}