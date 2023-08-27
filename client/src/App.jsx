import { useState } from 'react'
// Import React Router Dom
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Welcome from './pages/Welcome'
import Login from './pages/Login'
import Register from './pages/Register'
import Footer from './components/Footer/Footer'
import Dashboard from './pages/Dashboard'
import Scheduler from './components/Dashboard/SubDashboard/Scheduler'
import MyDoctor from './components/Dashboard/SubDashboard/MyDoctor'
import MedTracker from './components/Dashboard/SubDashboard/MedTracker'
import { useSelector } from 'react-redux'

function App() {


  // const user = localStorage.getItem("token");

  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  console.log(isLoggedIn);

  const user = localStorage.getItem("token");


  return (
    <>
      <BrowserRouter>
        <Routes>
        {user ? (
            <>
              <Route exact path='/dashboard' element={<Dashboard />} />
              <Route path='/dashboard/med-tracker' element={<MedTracker />} />
              <Route path='/dashboard/my-doctors' element={<MyDoctor />} />
              <Route path='/dashboard/schedule' element={<Scheduler />} />
            </>
          ) : (
            <Route path='*' element={<Error />} />
          )}
          <Route exact path="/" element={<Welcome/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path='/register' element={<Register/>}/>
          {/* <Route path='/dashboard/med-tracker' element={<MedTracker/>}/>
          <Route path='/dashboard/my-doctors' element={<MyDoctor/>}/>
          <Route path='/dashboard/schedule' element={<Scheduler/>}/> */}
          <Route exact path='*' element={<Error/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  )
}

export default App
