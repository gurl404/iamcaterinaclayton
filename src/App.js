// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ModelingPage from './ModelingPage';
import SingingPage from './SingingPage';
import ActingPage from './ActingPage';
import Home from './Home';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/modeling" element={<ModelingPage />} />
        <Route path="/singing" element={<SingingPage />} />
        <Route path="/acting" element={<ActingPage />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
