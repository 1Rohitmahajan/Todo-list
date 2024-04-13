// src/components/TaskList.js

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, toggleTask } from '../actions/taskActions';

const TaskList = () => {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();
  const [selectedTaskId, setSelectedTaskId] = useState(null);

  const handleDeleteTask = (taskId) => {
    if (selectedTaskId === taskId) {
      dispatch(deleteTask(taskId));
      setSelectedTaskId(null);
    }
  };

  const handleToggleTask = (taskId) => {
    if (selectedTaskId === taskId) {
      dispatch(toggleTask(taskId));
      setSelectedTaskId(null);
    } else {
      setSelectedTaskId(taskId);
    }
  };

  return (
    <ul className="list-group">
      {tasks.map(task => (
        <li key={task.id} className={`list-group-item ${task.completed ? 'completed' : ''}`}>
          <div>
            <input 
              type="checkbox"
              checked={task.completed}
              onChange={() => handleToggleTask(task.id)}
              className="form-check-input me-2 red"
            />
            <span>{task.text}</span>
          </div>
          <div>{task.time}</div>
          <button
            className="btn btn-outline-danger btn-sm ms-2"
            onClick={() => handleDeleteTask(task.id)}
            disabled={selectedTaskId !== task.id}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
