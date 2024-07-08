import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ActivitiesListPage from './pages/ActivitiesListPage';
import AddActivityPage from './pages/AddActivityPage';

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ActivitiesListPage />} />
        <Route path="/add" element={<AddActivityPage />} />
      </Routes>
    </Router>
  );
};

export default App;
