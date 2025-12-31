'use client';

import { UserProfile } from '@/types';

interface ClientViewProps {
  user: UserProfile;
}

export default function ClientView({ user }: ClientViewProps) {
  const handleFeatureNotAvailable = () => {
    alert('Esta funcionalidad estará disponible en el próximo módulo.');
  };

  return (
    <div className="mb-8 p-6 bg-linear-to-r from-emerald-500 to-teal-600 rounded-lg text-white shadow-lg">
      <h2 className="text-2xl font-bold mb-2">Bienvenido, {user.firstName || 'Cliente'}</h2>
      <p className="opacity-90">Tu situación tributaria está al día.</p>
      <div className="mt-6 flex gap-4">
        <button 
          onClick={handleFeatureNotAvailable}
          className="bg-white text-emerald-700 px-4 py-2 rounded font-medium hover:bg-emerald-50 transition-colors"
        >
          Ver Carpeta Tributaria
        </button>
        <button 
          onClick={handleFeatureNotAvailable}
          className="bg-emerald-700 text-white px-4 py-2 rounded font-medium border border-emerald-400 hover:bg-emerald-800 transition-colors"
        >
          Solicitar Certificado
        </button>
      </div>
    </div>
  );
}
