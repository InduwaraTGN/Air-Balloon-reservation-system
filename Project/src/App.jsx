// src/App.js - CORRECTED VERSION
import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Remove BrowserRouter
import HomePage from './views/HomePage';

function App() {
  return (
    // No Router wrapper here, just Routes directly
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* Add more routes as you create more pages */}
    </Routes>
  );
}

export default App;