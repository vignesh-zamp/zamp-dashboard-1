
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import DashboardLayout from './components/DashboardLayout';
import ProcessList from './components/ProcessList';
import ProcessDetails1 from './components/ProcessDetails1';
import ProcessDetails2 from './components/ProcessDetails2';
import ProcessDetails3 from './components/ProcessDetails3';
import ProcessDetails4 from './components/ProcessDetails4';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/done" element={<DashboardLayout />}>
          <Route index element={<ProcessList />} />
          {/* Process detail routes nested inside DashboardLayout */}
          <Route path="process/1" element={<ProcessDetails1 />} />
          <Route path="process/2" element={<ProcessDetails2 />} />
          <Route path="process/3" element={<ProcessDetails3 />} />
          <Route path="process/4" element={<ProcessDetails4 />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;