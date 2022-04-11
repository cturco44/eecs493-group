import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './routes/home';
import ActivitiesList from './routes/activities-list';
import HelpActivitiesList from './routes/help-activities-list';
import HelpStart from './routes/help-start';
import InProgress from './routes/in-progress';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="activities-list" element={<ActivitiesList />} />
          <Route path="help-activities-list" element={<HelpActivitiesList />} />
          <Route path="help-start" element={<HelpStart />} />
          <Route path="in-progress" element={<InProgress />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
