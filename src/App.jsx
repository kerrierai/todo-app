import React from 'react';
import './App.css';

import { Route, Routes } from 'react-router-dom';
import Today from './components/Pages/Today'
import Inbox from './components/Pages/Inbox'
import Upcoming from './components/Pages/Upcoming'
import Filter from './components/Pages/Filter'
import LoginPage from './components/Pages/LoginPage';


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage/>}></Route>
        <Route path="/today" element={<Today/>}></Route>
        <Route path="/inbox" element={<Inbox/>}></Route>
        <Route path="/upcoming" element={<Upcoming/>}></Route>
        <Route path="/filter" element={<Filter/>}></Route>
      </Routes>
    </>
  )
}


export default App