// src/components/App.js

import React from 'react';
import Dashboard from './components/Dashboard';

const App = () => {
  return (
    <div style={{ backgroundColor: 'lightblue' }}>
      <h1 className="text-center my-4">To-Do Application</h1>
    <Dashboard />
    </div>
  );
};

export default App;
