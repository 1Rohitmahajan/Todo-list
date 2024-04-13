// src/components/Dashboard.js

import React from 'react';
import TaskInput from './TaskInput';
import TaskList from './TaskList';

const Dashboard = () => {
  return (
    <div className=" container -fluid bg-light">
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body" style={{ backgroundColor: '#f8f9fa', padding: '20px' }}>
              <h5 className="card-title">Add New Task</h5>
              <TaskInput />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body" style={{ backgroundColor: '#f8f9fa', padding: '20px' }}>
              <h5 className="card-title">Tasks List</h5>
              <TaskList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
