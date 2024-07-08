import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/tailwind.css'
import NavigationPage from './pages/NavigationPage';
import AddActivityPage from './pages/AddActivityPage';
import ActivitiesListPage from './pages/ActivitiesListPage';
import ActivityDetailsPage from './pages/ActivityDetailsPage';
import UpdateActivityPage from './pages/UpdateActivityPage';
import DeleteActivityPage from './pages/DeleteActivityPage';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<NavigationPage />} />
          <Route path="/add-activity" element={<AddActivityPage />} />
          <Route path="/activities" element={<ActivitiesListPage />} />
          <Route path="/activity-details/:id" element={<ActivityDetailsPage />} />
          <Route path="/update-activity/:id" element={<UpdateActivityPage />} />
          <Route path="/delete-activity/:id" element={<DeleteActivityPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;