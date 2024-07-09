import React from 'react';
import { Link } from 'react-router-dom';

const NavigationPage = () => {
  return (
    <div
      className="max-w-md mx-auto mt-10"
      style={{ backgroundColor: '#000524' }}
    >
      <h1 className="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center dark:text-white mb-10">
        Navegação
      </h1>
      <div className="grid gap-4">
        <Link
          to="/add-activity"
          className="bg-blue-700 hover:bg-blue-800 text-white p-4 rounded-lg shadow-lg text-center block"
          style={{
            backgroundColor: 'rgb(30 41 59/var(--tw-bg-opacity))',
            boxShadow: 'inset 0 1px 0 0 #ffffff0d',
          }}
        >
          <div className="mb-2">Cadastrar Atividade</div>
          <div className="text-sm text-gray-300">
            Adicionar uma nova atividade na lista.
          </div>
        </Link>
        <Link
          to="/activities"
          className="bg-blue-700 hover:bg-blue-800 text-white p-4 rounded-lg shadow-lg text-center block"
          style={{
            backgroundColor: 'rgb(30 41 59/var(--tw-bg-opacity))',
          }}
        >
          <div className="mb-2">Lista de atividades</div>
          <div className="text-sm text-gray-300">
            Veja todas as atividades na lista.
          </div>
        </Link>
        <Link
          to="/update-activity/1"
          className="bg-blue-700 hover:bg-blue-800 text-white p-4 rounded-lg shadow-lg text-center block"
          style={{
            backgroundColor: 'rgb(30 41 59/var(--tw-bg-opacity))',
          }}
        >
          <div className="mb-2">Atualizar Atividade</div>
          <div className="text-sm text-gray-300">Atualize as atividades.</div>
        </Link>
        <Link
          to="/activity-details/1"
          className="bg-blue-700 hover:bg-blue-800 text-white p-4 rounded-lg shadow-lg text-center block"
          style={{
            backgroundColor: 'rgb(30 41 59/var(--tw-bg-opacity))',
          }}
        >
          <div className="mb-2">Detalhes</div>
          <div className="text-sm text-gray-300">
            Veja todos os detalhes das atividades.
          </div>
        </Link>
        <Link
          to="/delete-activity/1"
          className="bg-blue-700 hover:bg-blue-800 text-white p-4 rounded-lg shadow-lg text-center block"
          style={{
            backgroundColor: 'rgb(30 41 59/var(--tw-bg-opacity))',
          }}
        >
          <div className="mb-2">Delete</div>
          <div className="text-sm text-gray-300">
            Delete uma atividade conforme sua necessidade.
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NavigationPage;
