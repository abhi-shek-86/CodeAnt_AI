import React from 'react';
import { Github, Gitlab, Key } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { LoginButton } from './LoginButton';
import { useDeployment } from './DeploymentContext';

export function LoginOptions() {
  const { deploymentType } = useDeployment();
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/dashboard');
  };

  if (deploymentType === 'self-hosted') {
    return (
      <div className="space-y-4">
        <LoginButton 
          icon={<Gitlab size={20} className="text-orange-500" />}
          provider="Self Hosted GitLab"
          onClick={handleLogin}
        />
        <LoginButton 
          icon={<Key size={20} />}
          provider="SSO"
          onClick={handleLogin}
        />
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <LoginButton 
        icon={<Github size={20} />}
        provider="Github"
        onClick={handleLogin}
      />
      <LoginButton 
        icon={<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bitbucket/bitbucket-original.svg" className="w-5 h-5" alt="Bitbucket" />}
        provider="Bitbucket"
        onClick={handleLogin}
      />
      <LoginButton 
        icon={<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/azure/azure-original.svg" className="w-5 h-5" alt="Azure" />}
        provider="Azure Devops"
        onClick={handleLogin}
      />
      <LoginButton 
        icon={<Gitlab size={20} className="text-orange-500" />}
        provider="GitLab"
        onClick={handleLogin}
      />
    </div>
  );
}