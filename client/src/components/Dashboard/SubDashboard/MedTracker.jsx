import React from 'react'
import Navbar from '../../Navbar/Navbar'
import { Breadcrumbs, Typography } from '@material-tailwind/react'
import { Link } from 'react-router-dom'
import dummyMedications from '../../../dummyMedications.json'

const MedTracker = () => {
  return (
    <>
        <Navbar/>
        <div className=' pt-16'>
            <Typography variant="h2" className=" font-normal">Med Tracker</Typography>
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
                <span>Pill Tracker</span>
            </Link>
            </Breadcrumbs>  
            <div className=' grid justify-start grid-cols-4'>
                {dummyMedications.map((data, index) => (
                    <div key={index}>
                        <div className=' col-span-1'>
                            <Typography variant='h4' className=' font-normal'>{data.medicineName}</Typography>
                            <Typography>Leave note for your doctor using the plus sign</Typography>
                        </div>
                        <div className=' col-span-3'>
                            
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </>
  )
}

export default MedTracker