import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="p-4 flex items-center justify-start">
      <button
        className="text-white text-xl flex items-center mr-4"
        onClick={() => navigate('/')}
      >
        <FontAwesomeIcon icon={faHome} className="mr-2" />
      </button>
      <h1 class="text-slate-900 font-extrabold text-4xl sm:text-3xl  tracking-tight text-center dark:text-white">
        Sports App
      </h1>{' '}
    </div>
  );
};

export default Navbar;
