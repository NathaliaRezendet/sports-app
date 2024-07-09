import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';

const ActivitiesListPage = () => {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
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
    <div className="h-screen">
      <Navbar />
      <div className="p-6 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold mb-6">Lista de atividades</h1>
        {loading ? (
          <p className="text-center text-gray-500">Loading...</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden divide-y divide-gray-200">
              <thead className="bg-gray-800 text-white">
                <tr>
                  <th className="p-4 text-left">ID</th>
                  <th className="p-4 text-left">Nome</th>
                  <th className="p-4 text-left">Descrição</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {currentActivities.map(activity => (
                  <tr key={activity.id}>
                    <td className="p-4">{activity.id}</td>
                    <td className="p-4">{activity.name}</td>
                    <td className="p-4">{activity.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

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
    </div>
  );
};

export default ActivitiesListPage;
