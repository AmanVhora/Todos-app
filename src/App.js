import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import { TodosList } from './features/todosList';

function App() {
  return (
    <Router>
      <div className="App-header">
        <div className="container pt-5">
          <Routes>
            <Route
              exact
              path="/"
              Component={TodosList}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
