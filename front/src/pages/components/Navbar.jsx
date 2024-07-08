import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-900 p-4 flex items-center justify-start">
      <button
        className="text-white text-xl flex items-center mr-4"
        onClick={() => navigate('/')}
      >
        <FontAwesomeIcon icon={faHome} className="mr-2" />
      </button>
      <h1 className="text-white text-2xl">Sports App</h1>
    </div>
  );
};

export default Navbar;
