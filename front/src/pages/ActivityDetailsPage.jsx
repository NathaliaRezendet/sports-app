import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from './components/Navbar';
import Modal from './components/Modal';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ActivityDetailsPage = () => {
  const navigate = useNavigate();
  const [activities, setActivities] = useState([]);
  const [filteredActivities, setFilteredActivities] = useState([]);
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/activity`);
        setActivities(response.data);
        setFilteredActivities(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching activities:', error);
        setLoading(false);
      }
    };

    fetchActivities();
  }, []);

  const handleActivityClick = (activity) => {
    setSelectedActivity(activity);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedActivity(null);
  };

  const handleDeleteActivity = async (id) => {
    try {
      await axios.delete(`${process.env.REACT_APP_API_URL}/activity/${id}`);
      alert('Activity deleted successfully!');
      navigate('/activities');
    } catch (error) {
      console.error('Error deleting activity:', error);
      alert('Failed to delete activity. Please try again.');
    }
  };

  const handleSearchChange = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = activities.filter((activity) =>
      activity.name.toLowerCase().includes(term)
    );
    setFilteredActivities(filtered);
    setCurrentPage(1); 
  };

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentActivities = filteredActivities.slice(indexOfFirstItem, indexOfLastItem);

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
    setCurrentPage(Math.ceil(filteredActivities.length / itemsPerPage));
  };

  if (loading) return <p>Carregando...</p>;

  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto mt-10 mb-10">
        <h1 className="text-slate-900 font-extrabold text-4xl sm:text-3xl tracking-tight text-center dark:text-white mb-10">
          Atividades
        </h1>
        <div className="mb-10">
          <input
            type="text"
            placeholder="Procure sua atividade"
            className="p-3 text-lg border border-gray-200 rounded-md block mx-auto w-full md:w-96 mb-10"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentActivities.map((activity) => (
            <div
              key={activity.id}
              className={`p-4 rounded shadow cursor-pointer hover:shadow-lg`}
              style={{ backgroundColor: 'rgb(209 213 219 / var(--tw-text-opacity))' }}
              onClick={() => handleActivityClick(activity)}
            >
              <div className="w-full">
                <h2 className="text-xl font-semibold text-white">{activity.name}</h2>
                <p className="text-sm text-gray-300">{activity.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center mt-6">
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            className="bg-gray-200 text-gray-600 px-3 py-1 rounded mx-2"
          >
            Anterior
          </button>
          <button
            onClick={nextPage}
            disabled={currentPage === Math.ceil(filteredActivities.length / itemsPerPage)}
            className="bg-gray-200 text-gray-600 px-3 py-1 rounded mx-2"
          >
            Próxima
          </button>
        </div>
      </div>

      {modalOpen && selectedActivity && (
        <Modal onClose={handleCloseModal}>
          <div className="p-4">
            <p>
              <strong>Nome:</strong> {selectedActivity.name}
            </p>
            <p>
              <strong>Descrição:</strong> {selectedActivity.description}
            </p>
            {selectedActivity.photos && (
              <Carousel
                showArrows={true}
                infiniteLoop={true}
                showThumbs={false}
              >
                {selectedActivity.photos.map((photo, index) => (
                  <div key={index}>
                    <img
                      src={photo}
                      alt={`Activity ${index + 1}`}
                      className="w-full h-auto"
                    />
                  </div>
                ))}
              </Carousel>
            )}
          </div>
        </Modal>
      )}
      <div id="modal-root"></div>
    </div>
  );
};

export default ActivityDetailsPage;
