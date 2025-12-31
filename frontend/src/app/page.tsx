'use client';

import { useState } from 'react';
import { UserProfile } from '@/types';
import LoginForm from '@/components/auth/LoginForm';
import AdminView from '@/components/dashboard/AdminView';
import ContadorView from '@/components/dashboard/ContadorView';
import ClientView from '@/components/dashboard/ClientView';

export default function Home() {
  const [token, setToken] = useState('');
  const [user, setUser] = useState<UserProfile | null>(null);

  const handleLoginSuccess = (newToken: string, newUser: UserProfile) => {
    setToken(newToken);
    setUser(newUser);
  };

  const renderDashboardContent = () => {
    if (!user) return null;

    switch (user.role) {
      case 'ADMIN':
        return <AdminView token={token} />;
      case 'CONTADOR':
        return <ContadorView token={token} />;
      case 'CLIENTE':
        return <ClientView user={user} />;
      default:
        return <div>Rol no reconocido</div>;
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-24 bg-emerald-50">
      {!token ? (
        <LoginForm onLoginSuccess={handleLoginSuccess} />
      ) : (
        <div className="w-full max-w-6xl">
          <header className="flex justify-between items-center mb-8 bg-white p-4 rounded-xl shadow-sm border border-emerald-100">
            <div>
              <h1 className="text-2xl font-bold text-emerald-800">Contaluz</h1>
              <p className="text-sm text-gray-500">Panel de Control</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right hidden md:block">
                <p className="text-sm font-medium text-gray-900">{user?.firstName} {user?.lastName}</p>
                <p className="text-xs text-gray-500">{user?.role}</p>
              </div>
              <button 
                onClick={() => { setToken(''); setUser(null); }}
                className="px-4 py-2 text-sm text-red-600 bg-red-50 rounded-lg hover:bg-red-100 transition-colors"
              >
                Cerrar Sesión
              </button>
            </div>
          </header>

          {renderDashboardContent()}
        </div>
      )}
    </main>
  );
}

