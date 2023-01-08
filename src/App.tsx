import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Thanks from './pages/Thanks';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/thanks" element={<Thanks />} />
      </Routes>
    </div>
  );
}

export default App;
