import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import Navbar from './components/Navbar';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

const DeleteActivityPage = () => {
  const navigate = useNavigate();
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [activitiesPerPage] = useState(5); 

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/activity`);
        setActivities(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching activities:', error);
        setLoading(false);
      }
    };

    fetchActivities();
  }, []);

  const indexOfLastActivity = currentPage * activitiesPerPage;
  const indexOfFirstActivity = indexOfLastActivity - activitiesPerPage;
  const currentActivities = activities.slice(indexOfFirstActivity, indexOfLastActivity);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  const openModal = (activity) => {
    setSelectedActivity(activity);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedActivity(null);
  };

  const handleDeleteActivity = async () => {
    try {
      await axios.delete(`${process.env.REACT_APP_API_URL}/activity/${selectedActivity.id}`);
      alert('Atividade deletada!');
      setActivities(activities.filter(activity => activity.id !== selectedActivity.id));
      closeModal();
    } catch (error) {
      console.error('Error deleting activity:', error);
      alert('Falha ao excluir. Tente novamente.');
    }
  };

  if (loading) return <p>Loading...</p>;
  if (activities.length === 0) return <p>No activities found</p>;

  return (
    <div>
      <Navbar />
      <div className="p-6">
        <h1 class="text-slate-900 font-extrabold text-4xl sm:text-3xl  tracking-tight text-center dark:text-white">Delete uma atividade</h1>
        <ul>
          {currentActivities.map(activity => (
            <li key={activity.id} className="flex justify-between items-center mb-2 p-2 border-b">
              <span class="text-slate-900 font-extrabold text-2xl sm:text-2xl  tracking-tight text-center dark:text-white">{activity.name}</span>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded"
                onClick={() => openModal(activity)}
              >
                Deletar
              </button>
            </li>
          ))}
        </ul>
        <div className="mt-4 flex justify-center">
          {[...Array(Math.ceil(activities.length / activitiesPerPage)).keys()].map(number => (
            <button
              key={number + 1}
              onClick={() => paginate(number + 1)}
              className={`mx-1 px-4 py-2 bg-gray-200 text-gray-600 px-3 py-1 rounded ${currentPage === number + 1 ? 'bg-blue-600' : 'hover:bg-blue-600'}`}
            >
              {number + 1}
            </button>
          ))}
        </div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Atividade Excluída"
        >
          <h2 className="text-xl font-bold mb-4">Certeza que deseja deletar essa atividades?</h2>
          {selectedActivity && (
            <div className="mb-4">
              <p><strong>Name:</strong> {selectedActivity.name}</p>
            </div>
          )}
          <button
            className="bg-red-500 text-white px-4 py-2 rounded mr-2"
            onClick={handleDeleteActivity}
          >
            Sim
          </button>
          <button
            className="bg-gray-300 text-black px-4 py-2 rounded"
            onClick={closeModal}
          >
            Cancelar
          </button>
        </Modal>
      </div>
    </div>
  );
};

export default DeleteActivityPage;
