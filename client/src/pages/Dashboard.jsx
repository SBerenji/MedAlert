import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import DoctorDashboard from '../components/Dashboard/DoctorDashboard';
import PatientDashboard from '../components/Dashboard/PatientDashboard';

const Dashboard = () => {

  const [userRole, setUserRole] = useState('patient');

  console.log(userRole)

  const navigate = useNavigate();
  return (
    <div>
      {userRole === 'doctor' && <DoctorDashboard />}
      {userRole === 'patient' && <PatientDashboard />}
      {!userRole && navigate('/login')}
    </div>
  )
}

export default Dashboard