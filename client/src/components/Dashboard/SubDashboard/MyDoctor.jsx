import { Card, List, Button, ListItem, Typography, Breadcrumbs} from '@material-tailwind/react'
import React from 'react'
import dummyDoctors from '../../../dummyDoctors.json'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Navbar from '../../Navbar/Navbar'

const MyDoctor = () => {
  const navigate = useNavigate();
  return (
    <div className='h-4/5'>
        <Navbar/>
        <div className=' pt-16'>
          <Typography variant="h2" className=" font-normal">My Doctors</Typography>
          <Breadcrumbs>
            <Link className="opacity-60" to='/dashboard'>
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
                >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
            </Link>
            <Link className="opacity-60" onClick={() => navigate(0)}>
                <span>My Doctors</span>
            </Link>
        </Breadcrumbs>
          <div className='flex flex-col items-center pt-4'>
            <Card className=' h-96 md:w-3/4'>
              <List className=' overflow-auto'>
                {dummyDoctors.map(doctor => (
                  <ListItem key={doctor.id} ripple={false} className='justify-between border-blue-gray-300 border'>
                    <div>
                      <Typography variant="h6" >{doctor.profession}</Typography>
                      <Typography>Dr. {doctor.fullName}</Typography>
                      <Typography>Phone: {doctor.phoneNumber}</Typography>
                    </div>
                    <Button className=' bg-emerald'>See Prescription</Button>
                  </ListItem>
                ))}
              </List>
            </Card>
        </div>
        </div>
    </div>
  )
}

export default MyDoctor