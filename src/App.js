import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import RenderRockets from './components/rockets/Rockets';
import RenderMissions from './components/Missions';
import MyProfile from './components/myProfile';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<RenderRockets />} />
          <Route path="/missions" element={<RenderMissions />} />
          <Route path="/profile" element={<MyProfile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
