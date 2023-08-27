import React from 'react'
import { Button, Typography } from '@material-tailwind/react'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import { ReactComponent as PillIIcon } from '../../assets/pills.svg';
import { ReactComponent as DoctorIcon } from '../../assets/doc.svg';
import { ReactComponent as ScheduleIcon } from '../../assets/schedule.svg'

const PatientDashboard = () => {

  return (
    <>
      <Navbar />
      <div className='pt-16 grid md:grid-cols-3'>
        <div>
          <Typography>
            Welcome Naya!
          </Typography>
          <Typography>
            Patient ID: PT0000X
          </Typography>
        </div>
        <div className='flex flex-col justify-center gap-4 items-center'>
          <div>
            <Link to='/dashboard/my-doctors'>
              <Button variant='outlined' className='border-emerald border-2 text-black normal-case text-xl font-normal p-4 w-48 flex flex-col  items-center justify-center gap-2'>
                My Doctors
                <DoctorIcon className='w-6 h-6' />
              </Button>
            </Link>
          </div>
          <div>
            <Link to='/dashboard/med-tracker'>
              <Button variant='outlined' className='border-emerald border-2 text-black normal-case text-xl font-normal p-4 w-48 flex flex-col items-center justify-center gap-2'>
                Med Tracker
                <PillIIcon className='w-6 h-6' />
              </Button>
            </Link>
          </div>
          <div>
            <Link to='/dashboard/schedule'>
              <Button variant='outlined' className='border-emerald border-2 text-black normal-case text-xl font-normal p-4 w-48 flex flex-col items-center justify-center gap-2'>
                Med Scheduled
                <ScheduleIcon className='w-6 h-6' />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default PatientDashboard
