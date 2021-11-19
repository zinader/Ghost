import React from 'react';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import './App.css';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
       <Router>
          <Routes>
            <Route path='/' element={<Home/>} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
