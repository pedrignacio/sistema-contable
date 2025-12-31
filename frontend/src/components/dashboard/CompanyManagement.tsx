'use client';

import { useState, useEffect } from 'react';
import { api } from '@/lib/api';
import { Company } from '@/types';

interface CompanyManagementProps {
  token: string;
}

export default function CompanyManagement({ token }: CompanyManagementProps) {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [newCompanyName, setNewCompanyName] = useState('');
  const [newCompanyRut, setNewCompanyRut] = useState('');
  const [error, setError] = useState('');

  const fetchCompanies = async () => {
    try {
      const data = await api.getCompanies(token);
      setCompanies(data);
    } catch {
      // Silent fail or specific error
    }
  };

  useEffect(() => {
    fetchCompanies();
  }, [token]);

  const handleCreateCompany = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      await api.createCompany(token, { name: newCompanyName, rut: newCompanyRut });
      setNewCompanyName('');
      setNewCompanyRut('');
      fetchCompanies();
    } catch {
      setError('Error al crear empresa');
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md border border-emerald-100 overflow-hidden mt-8">
      <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50">
        <h2 className="text-lg font-bold text-gray-800">Empresas Registradas</h2>
        <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-2 py-1 rounded-full">{companies.length} Activas</span>
      </div>
      
      <div className="p-6">
        <div className="mb-8 p-5 border border-dashed border-emerald-200 rounded-xl bg-emerald-50/50">
          <h3 className="text-sm font-semibold mb-3 text-emerald-800 uppercase tracking-wide">Nueva Empresa</h3>
          <form onSubmit={handleCreateCompany} className="flex gap-3">
            <input
              type="text"
              placeholder="Nombre de la empresa"
              value={newCompanyName}
              onChange={(e) => setNewCompanyName(e.target.value)}
              className="flex-1 p-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500 outline-none text-gray-700"
              required
            />
            <input
              type="text"
              placeholder="RUT (76.123.456-7)"
              value={newCompanyRut}
              onChange={(e) => setNewCompanyRut(e.target.value)}
              className="w-40 p-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500 outline-none text-gray-700"
              required
            />
            <button
              type="submit"
              className="px-6 py-2 bg-emerald-600 text-white text-sm font-medium rounded-lg hover:bg-emerald-700 shadow-sm"
            >
              + Crear
            </button>
          </form>
          {error && <p className="text-xs text-red-600 font-medium mt-2">{error}</p>}
        </div>

        {companies.length === 0 ? (
          <div className="text-center py-10 text-gray-400">
            <p>No hay empresas registradas en el sistema.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {companies.map((c) => (
              <div key={c.id} className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow bg-white group cursor-pointer">
                <div className="flex justify-between items-start mb-2">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold text-lg">
                    {c.name.charAt(0)}
                  </div>
                  <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded">Activa</span>
                </div>
                <h3 className="font-semibold text-gray-800 group-hover:text-emerald-600 transition-colors">{c.name}</h3>
                <p className="text-sm text-gray-500 font-mono mt-1">{c.rut}</p>
                <div className="mt-4 pt-3 border-t border-gray-100 flex justify-between text-xs text-gray-500">
                  <span>Movimientos: 0</span>
                  <span className="text-emerald-600 font-medium group-hover:underline">Ver detalles →</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
