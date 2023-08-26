
import React from 'react'
import { Button, Typography } from '@material-tailwind/react'
import { Link } from 'react-router-dom'
import Navbar from '../navbar/Navbar'

const PatientDashboard = () => {
  
  return (
    <>
        <Navbar/>
        <div className='pt-16 grid grid-cols-3'>
            <div>
                <Typography>
                    Welcome Naya!
                </Typography>
                <Typography>
                    Patient ID: PT0000X
                </Typography>
            </div>
            <div className='flex flex-col justify-center gap-10'>
            <Link to='/dashboard/my-doctors'>
                <Button variant='outlined' className=' border-emerald text-black normal-case text-xl font-normal p-10'>My Doctors</Button>
            </Link>
            <Link>
                <Button variant='outlined' className=' border-emerald text-black normal-case text-xl font-normal p-10'>Med Tracker</Button>
            </Link>
            <Link to='/dashboard/schedule'>
            <Button variant='outlined' className=' border-emerald text-black normal-case text-xl font-normal p-8'>Med Scheduled</Button>
            </Link>
            
            
            </div>
        </div>
    </>
  )
}

export default PatientDashboard