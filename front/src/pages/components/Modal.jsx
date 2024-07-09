import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ onClose, children }) => {
  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Detalhes da Atividades</h2>
          <button
            className="text-gray-500 hover:text-gray-700"
            onClick={onClose}
          >
            X
          </button>
        </div>
        <div className="mb-4">
          {children}
        </div>
        <div className="flex justify-end">
          <button
            className="bg-red-500 text-white px-4 py-2 rounded mr-2"
            onClick={() => {}}
          >
            Deletar
          </button>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={onClose}
          >
            Fechar
          </button>
        </div>
      </div>
    </div>,
    document.getElementById('modal-root') 
  );
};

export default Modal;
