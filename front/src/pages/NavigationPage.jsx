import React from 'react';
import { Link } from 'react-router-dom';

const NavigationPage = () => {
  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4 text-center">Navegação</h1>
      <div className="grid gap-4">
        <Link
          to="/add-activity"
          className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-lg shadow-lg text-center block"
        >
          <div className="mb-2">Adicionar Atividade</div>
          <div className="text-sm text-gray-300">Adicionar uma nova atividade na lista.</div>
        </Link>
        <Link
          to="/activities"
          className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-lg shadow-lg text-center block"
        >
          <div className="mb-2">Lista de atividades</div>
          <div className="text-sm text-gray-300">Veja todas as atividades na lista.</div>
        </Link>
        <Link
          to="/update-activity/1"
          className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-lg shadow-lg text-center block"
        >
          <div className="mb-2">Atualizar Atividade</div>
          <div className="text-sm text-gray-300">Atualize as atividades.</div>
        </Link>
        <Link
          to="/activity-details/1"
          className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-lg shadow-lg text-center block"
        >
          <div className="mb-2">Detalhes</div>
          <div className="text-sm text-gray-300">Veja todos os detalhes das atividades.</div>
        </Link>
        <Link
          to="/delete-activity/1"
          className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-lg shadow-lg text-center block"
        >
          <div className="mb-2">Delete</div>
          <div className="text-sm text-gray-300">Delete uma atividade conforme sua necessidade.</div>
        </Link>
      </div>
    </div>
  );
};

export default NavigationPage;
