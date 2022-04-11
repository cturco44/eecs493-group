import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './routes/home';
import LandingPage from './routes/landing-page/landing-page';
import SelectionPage from './routes/selection-page/selection-page';
import ActivitiesList from './routes/activities-list/activities-list';
import ActivityDescription from './routes/activity-description/activity-description';
import HelpActivitiesList from './routes/help-activities-list/help-activities-list';
import HelpStart from './routes/help-start/help-start';
import InProgress from './routes/in-progress/in-progress';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/selection-page/selection-page" element={<SelectionPage />} />
          <Route path="/activities-list/activities-list" element={<ActivitiesList />} />
          <Route path="/activities-list/activities-list" element={<Activit />} />
          <Route path="/help-activities-list/help-activities-list" element={<HelpActivitiesList />} />
          <Route path="/help-start/help-start" element={<HelpStart />} />
          <Route path="/in-progress/in-progress" element={<InProgress />} />

          {/* <Route path="landing-page" element={<LandingPage />} />
          <Route path="selection-page" element={<SelectionPage />} />
          <Route path="mindfulness" element={<Mindfulness />} />
          <Route path="activity-description" element={<ActivityDescription />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
