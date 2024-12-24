import React, { createContext, useContext, useState } from 'react';
import type { DeploymentType } from './types';

interface DeploymentContextType {
  deploymentType: DeploymentType;
  setDeploymentType: (type: DeploymentType) => void;
}

const DeploymentContext = createContext<DeploymentContextType | undefined>(undefined);

export function DeploymentProvider({ children }: { children: React.ReactNode }) {
  const [deploymentType, setDeploymentType] = useState<DeploymentType>('saas');

  return (
    <DeploymentContext.Provider value={{ deploymentType, setDeploymentType }}>
      {children}
    </DeploymentContext.Provider>
  );
}

export function useDeployment() {
  const context = useContext(DeploymentContext);
  if (!context) {
    throw new Error('useDeployment must be used within a DeploymentProvider');
  }
  return context;
}