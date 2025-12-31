'use client';

import { useState } from 'react';
import { api } from '@/lib/api';
import { UserProfile } from '@/types';

interface LoginFormProps {
  onLoginSuccess: (token: string, user: UserProfile) => void;
}

export default function LoginForm({ onLoginSuccess }: LoginFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    
    try {
      const data = await api.login(email, password);
      onLoginSuccess(data.access_token, data.user);
    } catch (err) {
      setError('Error al iniciar sesión. Verifique sus credenciales.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-lg border border-emerald-100">
      <h1 className="text-3xl font-bold text-center text-emerald-800 mb-2">Contaluz</h1>
      <p className="text-center text-gray-500 mb-8 text-sm">Gestión inteligente para tu negocio</p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="email"
            placeholder="Correo Electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none text-gray-700"
            required
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none text-gray-700"
            required
          />
        </div>
        
        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-3 bg-emerald-600 text-white font-bold rounded-lg hover:bg-emerald-700 transition-colors disabled:opacity-50"
        >
          {isLoading ? 'Iniciando...' : 'Ingresar'}
        </button>
        
        {error && (
          <div className="p-3 bg-red-50 text-red-600 text-sm rounded-lg text-center">
            {error}
          </div>
        )}
      </form>
    </div>
  );
}
