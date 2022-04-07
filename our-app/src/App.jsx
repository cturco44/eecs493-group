import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import ActivitiesList from './routes/activities-list';
import Home from './routes/home';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="activities-list" element={<ActivitiesList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
