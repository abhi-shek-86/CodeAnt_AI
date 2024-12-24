import React from 'react';
import { Logo } from '../layout/Logo';
import { DeploymentToggle } from './DeploymentToggle';
import { LoginOptions } from './LoginOptions';
import { PrivacyNotice } from '../layout/PrivacyNotice';
import { StatsSection } from '../stats/StatsSection';
import { IssuesCard } from '../stats/IssuesCard';
import { DeploymentProvider } from './DeploymentContext';

export function LoginPage() {
  return (
    <DeploymentProvider>
      <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
        {/* Stats Section - Hidden on mobile */}
        <div className="hidden md:flex flex-1 p-16 flex-col justify-center items-center">
          <div className="w-full max-w-lg space-y-4">
            <StatsSection />
            <IssuesCard />
          </div>
        </div>

        {/* Login Section */}
        <div className="w-full md:w-[600px] bg-white p-6 md:p-16 flex flex-col justify-center">
          <div className="mb-8">
            <div className="mb-6 flex justify-center md:justify-start">
              <Logo />
            </div>
            <h1 className="text-2xl font-bold mb-6 text-center md:text-left">
              Welcome to CodeAnt AI
            </h1>
            <div className="mb-8">
              <DeploymentToggle />
            </div>
          </div>

          <LoginOptions />
          
          <div className="mt-8">
            <PrivacyNotice />
          </div>
        </div>
      </div>
    </DeploymentProvider>
  );
}