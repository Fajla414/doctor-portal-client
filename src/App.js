import React, { createContext, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home/Home';
import './App.css';
import Appointment from './components/Appointment/Appointment/Appointment';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import AddDoctor from './components/AddDoctor/AddDoctor';

export const MyContext = createContext();

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState([]);
  return (
    <MyContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <BrowserRouter>
      <p>Email: {loggedInUser.email}</p>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/appointment' element={<Appointment />} />
          <Route path='/login' element={<Login />} />
          <Route path='/addDoctor' element={<AddDoctor />} />
          <Route path='/dashboard/appointment' element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </MyContext.Provider>
  );
};

export default App;