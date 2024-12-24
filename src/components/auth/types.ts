export type DeploymentType = 'saas' | 'self-hosted';

export interface LoginButtonProps {
  icon: React.ReactNode;
  provider: string;
  className?: string;
  authUrl: string;
}