'use client';

import CompanyManagement from './CompanyManagement';

interface ContadorViewProps {
  token: string;
}

export default function ContadorView({ token }: ContadorViewProps) {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="p-4 bg-white border border-emerald-100 rounded-lg shadow-sm">
          <h3 className="font-bold text-emerald-800 mb-2">Gestión de Empresas</h3>
          <p className="text-sm text-gray-600 mb-4">Administra las empresas asignadas y sus movimientos.</p>
          <div className="space-y-2">
            <button className="w-full text-left px-3 py-2 text-sm bg-emerald-50 text-emerald-700 rounded hover:bg-emerald-100">
              + Nueva Declaración
            </button>
            <button className="w-full text-left px-3 py-2 text-sm bg-emerald-50 text-emerald-700 rounded hover:bg-emerald-100">
              Importar Cartola Bancaria
            </button>
          </div>
        </div>
        <div className="p-4 bg-white border border-emerald-100 rounded-lg shadow-sm">
          <h3 className="font-bold text-emerald-800 mb-2">Vencimientos</h3>
          <ul className="text-sm space-y-1 text-gray-600">
            <li className="flex justify-between"><span>F29 (IVA)</span> <span className="text-amber-600 font-medium">20 Oct</span></li>
            <li className="flex justify-between"><span>Previred</span> <span className="text-amber-600 font-medium">13 Oct</span></li>
          </ul>
        </div>
      </div>

      <CompanyManagement token={token} />
    </div>
  );
}
