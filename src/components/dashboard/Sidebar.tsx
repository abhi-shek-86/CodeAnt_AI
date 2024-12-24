import React from 'react';
import { Bug, Home, Code, Cloud, HelpCircle, Settings, Phone, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function Sidebar() {
  const navigate = useNavigate();
  const [showSupport, setShowSupport] = React.useState(false);

  const handleLogout = () => {
    navigate('/');
  };

  const handleSupport = () => {
    setShowSupport(true);
  };

  const isMobile = window.innerWidth < 768;

  return (
    <div className="p-4 h-full flex flex-col">
      <div className="flex items-center gap-2 mb-8">
        <Bug size={32} className="text-gray-900" />
        <span className="text-xl font-semibold">CodeAnt AI</span>
      </div>

      <div className="mb-4">
        <select className="w-full p-2 rounded-md border border-gray-200">
          <option>UtkarshDhairyaPanwar</option>
        </select>
      </div>

      <nav className="flex-1">
        <NavItem icon={<Home size={20} />} label="Repositories" active />
        <NavItem icon={<Code size={20} />} label="AI Code Review" />
        <NavItem icon={<Cloud size={20} />} label="Cloud Security" />
        <NavItem icon={<HelpCircle size={20} />} label="How to Use" />
        <NavItem icon={<Settings size={20} />} label="Settings" />
        {isMobile && (
          <>
            <NavItem icon={<Phone size={20} />} label="Support" onClick={handleSupport} />
            <NavItem icon={<LogOut size={20} />} label="Logout" onClick={handleLogout} />
          </>
        )}
      </nav>

      {!isMobile && (
        <div className="mt-auto pt-4 border-t border-gray-200">
          <NavItem icon={<Phone size={20} />} label="Support" onClick={handleSupport} />
          <NavItem icon={<LogOut size={20} />} label="Logout" onClick={handleLogout} />
        </div>
      )}

      {showSupport && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h3 className="text-lg font-semibold mb-4">Support Contact</h3>
            <p className="mb-2">Email: vasamsettiabhi13@gmail.com</p>
            <p className="mb-4">Phone: +91 9133804129</p>
            <button 
              onClick={() => setShowSupport(false)}
              className="w-full bg-blue-500 text-white rounded-lg py-2"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function NavItem({ icon, label, active, onClick }: { 
  icon: React.ReactNode; 
  label: string; 
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg mb-1 ${
        active ? 'bg-blue-500 text-white' : 'text-gray-700 hover:bg-gray-100'
      }`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}