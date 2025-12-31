'use client';

import { useState, useEffect } from 'react';
import { api } from '@/lib/api';
import { UserProfile } from '@/types';
import CompanyManagement from './CompanyManagement';

interface AdminViewProps {
  token: string;
}

export default function AdminView({ token }: AdminViewProps) {
  const [usersList, setUsersList] = useState<UserProfile[]>([]);
  
  // User Management State
  const [newUserEmail, setNewUserEmail] = useState('');
  const [newUserPassword, setNewUserPassword] = useState('');
  const [newUserRole, setNewUserRole] = useState('CONTADOR');
  const [newUserFirstName, setNewUserFirstName] = useState('');
  const [newUserLastName, setNewUserLastName] = useState('');
  const [userSuccessMsg, setUserSuccessMsg] = useState('');
  const [error, setError] = useState('');
  const [isCreating, setIsCreating] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const data = await api.getUsers(token);
        setUsersList(data);
      } catch {
        console.error('Failed to fetch users');
      }
    };
    loadUsers();
  }, [token]);

  const handleCreateUser = async (e: React.FormEvent) => {
    e.preventDefault();
    setUserSuccessMsg('');
    setError('');
    setIsCreating(true);
    
    try {
      await api.createUser(token, {
        email: newUserEmail,
        password: newUserPassword,
        role: newUserRole,
        firstName: newUserFirstName,
        lastName: newUserLastName
      });
      setUserSuccessMsg('Usuario creado exitosamente');
      setNewUserEmail('');
      setNewUserPassword('');
      setNewUserFirstName('');
      setNewUserLastName('');
      
      // Refresh users list
      const data = await api.getUsers(token);
      setUsersList(data);
    } catch {
      setError('Error al crear usuario');
    } finally {
      setIsCreating(false);
    }
  };

  return (
    <div className="space-y-8 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 bg-amber-50 border border-amber-100 rounded-lg">
          <h3 className="font-bold text-amber-800">Auditoría</h3>
          <p className="text-xs text-amber-700 mt-1">3 Alertas pendientes</p>
        </div>
        <div className="p-4 bg-emerald-50 border border-emerald-100 rounded-lg">
          <h3 className="font-bold text-emerald-800">Usuarios</h3>
          <p className="text-xs text-emerald-700 mt-1">{usersList.length} Usuarios registrados</p>
        </div>
        <div className="p-4 bg-blue-50 border border-blue-100 rounded-lg">
          <h3 className="font-bold text-blue-800">Reportes</h3>
          <p className="text-xs text-blue-700 mt-1">Balance General Consolidado</p>
        </div>
      </div>

      {/* User Management Section */}
      <div className="bg-white rounded-xl shadow-md border border-emerald-100 overflow-hidden">
        <div className="p-6 border-b border-gray-100 bg-gray-50">
          <h2 className="text-lg font-bold text-gray-800">Gestión de Usuarios</h2>
          <p className="text-sm text-gray-500">Crear y visualizar usuarios del sistema</p>
        </div>
        
        <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Create User Form */}
          <div className="lg:col-span-1 bg-emerald-50/50 p-5 rounded-xl border border-emerald-100">
            <h3 className="font-semibold text-emerald-800 mb-4">Nuevo Usuario</h3>
            <form onSubmit={handleCreateUser} className="space-y-3">
              <input
                type="email"
                placeholder="Email"
                value={newUserEmail}
                onChange={(e) => setNewUserEmail(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded text-sm placeholder-gray-500 text-gray-900 focus:ring-2 focus:ring-emerald-500 outline-none"
                required
              />
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Contraseña"
                  value={newUserPassword}
                  onChange={(e) => setNewUserPassword(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded text-sm placeholder-gray-500 text-gray-900 focus:ring-2 focus:ring-emerald-500 outline-none pr-10"
                  required
                  minLength={6}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  )}
                </button>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  placeholder="Nombre"
                  value={newUserFirstName}
                  onChange={(e) => setNewUserFirstName(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded text-sm placeholder-gray-500 text-gray-900 focus:ring-2 focus:ring-emerald-500 outline-none"
                />
                <input
                  type="text"
                  placeholder="Apellido"
                  value={newUserLastName}
                  onChange={(e) => setNewUserLastName(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded text-sm placeholder-gray-500 text-gray-900 focus:ring-2 focus:ring-emerald-500 outline-none"
                />
              </div>
              <select
                aria-label="Seleccionar Rol"
                value={newUserRole}
                onChange={(e) => setNewUserRole(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded text-sm bg-white text-gray-900 focus:ring-2 focus:ring-emerald-500 outline-none"
              >
                <option value="CONTADOR">Contador</option>
                <option value="CLIENTE">Cliente</option>
                <option value="ADMIN">Administrador</option>
              </select>
              <button
                type="submit"
                disabled={isCreating}
                className="w-full py-2 bg-emerald-600 text-white text-sm font-medium rounded hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isCreating ? 'Creando...' : 'Crear Usuario'}
              </button>
              {userSuccessMsg && <p className="text-xs text-emerald-600 font-medium text-center">{userSuccessMsg}</p>}
              {error && <p className="text-xs text-red-600 font-medium text-center">{error}</p>}
            </form>
          </div>

          {/* Users List */}
          <div className="lg:col-span-2">
            <h3 className="font-semibold text-gray-700 mb-4">Lista de Usuarios</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                  <tr>
                    <th className="px-4 py-3">Usuario</th>
                    <th className="px-4 py-3">Rol</th>
                    <th className="px-4 py-3">Estado</th>
                  </tr>
                </thead>
                <tbody>
                  {usersList.map((u) => (
                    <tr key={u.email} className="bg-white border-b hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-900">
                        <div>{u.firstName} {u.lastName}</div>
                        <div className="text-xs text-gray-500">{u.email}</div>
                      </td>
                      <td className="px-4 py-3">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          u.role === 'ADMIN' ? 'bg-amber-100 text-amber-800' :
                          u.role === 'CONTADOR' ? 'bg-emerald-100 text-emerald-800' :
                          'bg-blue-100 text-blue-800'
                        }`}>
                          {u.role}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <span className="text-emerald-600 font-medium text-xs">● Activo</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <CompanyManagement token={token} />
    </div>
  );
}
// End of AdminView component
