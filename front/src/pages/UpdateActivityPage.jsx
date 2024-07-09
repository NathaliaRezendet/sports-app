import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';

const UpdateActivityPage = () => {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState(null);
  const [editName, setEditName] = useState('');
  const [currentPage, setCurrentPage] = useState(1); 
  const [itemsPerPage, setItemsPerPage] = useState(5); 

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/activity`);
        setActivities(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching activities:", error);
        setLoading(false);
      }
    };

    fetchActivities();
  }, []);

  const handleEditClick = (id, name) => {
    setEditingId(id);
    setEditName(name);
  };

  const handleSaveClick = async (id) => {
    try {
      await axios.put(`${process.env.REACT_APP_API_URL}/activity/${id}`, { name: editName });
      setActivities(activities.map(activity => (activity.id === id ? { ...activity, name: editName } : activity)));
      setEditingId(null);
    } catch (error) {
      console.error("Error updating activity:", error);
    }
  };

  const handleCancelClick = () => {
    setEditingId(null);
  };

  // Paginação
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentActivities = activities.slice(indexOfFirstItem, indexOfLastItem);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const firstPage = () => {
    setCurrentPage(1);
  };

  const lastPage = () => {
    setCurrentPage(Math.ceil(activities.length / itemsPerPage));
  };

  return (
    <div>
      <Navbar />
      <div className="p-6 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold mb-6">Atualizar atividade</h1>
        {loading ? (
          <p className="text-center text-gray-500">Carregando...</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
              <thead className="bg-gray-800 text-white">
                <tr>
                  <th className="p-4 text-left">ID</th>
                  <th className="p-4 text-left">Nome</th>
                  <th className="p-4 text-left">Descrição</th>
                </tr>
              </thead>
              <tbody>
                {currentActivities.map(activity => (
                  <tr key={activity.id} className="border-b">
                    <td className="p-4">{activity.id}</td>
                    <td className="p-4">
                      {editingId === activity.id ? (
                        <input
                          type="text"
                          value={editName}
                          onChange={(e) => setEditName(e.target.value)}
                          className="border p-2 rounded w-full"
                        />
                      ) : (
                        activity.name
                      )}
                    </td>
                    <td className="p-4">
                      {editingId === activity.id ? (
                        <div className="flex space-x-2">
                          <button
                            onClick={() => handleSaveClick(activity.id)}
                            className="bg-green-500 text-white px-4 py-2 rounded"
                          >
                            Salvar
                          </button>
                          <button
                            onClick={handleCancelClick}
                            className="bg-red-500 text-white px-4 py-2 rounded"
                          >
                            Cancelar
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => handleEditClick(activity.id, activity.name)}
                          className="bg-blue-950 text-white px-4 py-2 rounded"
                        >
                          Atualizar
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {/* Paginação */}
            <div className="flex justify-between items-center mt-4">
              <div>
                <button
                  onClick={firstPage}
                  disabled={currentPage === 1}
                  className="bg-gray-200 text-gray-600 px-3 py-1 rounded"
                >
                  Primeira
                </button>
                <button
                  onClick={prevPage}
                  disabled={currentPage === 1}
                  className="bg-gray-200 text-gray-600 px-3 py-1 rounded mx-2"
                >
                  Anterior
                </button>
              </div>
              <div>
                <button
                  onClick={nextPage}
                  disabled={currentPage === Math.ceil(activities.length / itemsPerPage)}
                  className="bg-gray-200 text-gray-600 px-3 py-1 rounded mx-2"
                >
                  Próxima
                </button>
                <button
                  onClick={lastPage}
                  disabled={currentPage === Math.ceil(activities.length / itemsPerPage)}
                  className="bg-gray-200 text-gray-600 px-3 py-1 rounded"
                >
                  Última
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UpdateActivityPage;
