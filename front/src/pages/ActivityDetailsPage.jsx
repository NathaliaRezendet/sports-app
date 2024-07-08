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
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto mt-10">
        <h1 className="text-2xl font-bold mb-4">Activities</h1>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search by name"
            className="p-2 border border-gray-300 rounded-md"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredActivities.map((activity) => (
            <div
              key={activity.id}
              className={`p-4 bg-white rounded shadow cursor-pointer hover:shadow-lg ${
                selectedActivity && selectedActivity.id === activity.id ? 'flex justify-center items-center h-screen' : ''
              }`}
              onClick={() => handleActivityClick(activity)}
            >
              <div className={`w-full sm:w-3/4 lg:w-full ${selectedActivity && selectedActivity.id === activity.id ? '' : 'hidden'}`}>
                <h2 className="text-xl font-semibold text-black">{activity.name}</h2>
                <p className="text-black">{activity.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {modalOpen && selectedActivity && (
        <Modal onClose={handleCloseModal}>
          <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Activity Details</h2>
            <p>
              <strong>ID:</strong> {selectedActivity.id}
            </p>
            <p>
              <strong>Name:</strong> {selectedActivity.name}
            </p>
            <p>
              <strong>Description:</strong> {selectedActivity.description}
            </p>
            <p>
              <strong>Date:</strong> {selectedActivity.date}
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
            <button
              className="bg-red-500 text-white px-4 py-2 rounded mt-4"
              onClick={() => handleDeleteActivity(selectedActivity.id)}
            >
              Delete Activity
            </button>
          </div>
        </Modal>
      )}
      <div id="modal-root"></div>
    </div>
  );
};

export default ActivityDetailsPage;