import {Typography } from '@material-tailwind/react'
import React from 'react'
import { ScheduleCard } from '../../Card/ScheduleCard'
import dummyMedications from '../../../dummyMedications.json'
import BreadcrumbsWithIcon from '../../BreadCrumb/BreadCrumb'
import Navbar from '../../Navbar/Navbar'

const Scheduler = () => {
  return (
    <>
        <Navbar/>
        <div className=' pt-16'>
            <Typography variant='h2' className=' font-normal'>
                Med Schedule
            </Typography>
        </div>
        <div>
            <BreadcrumbsWithIcon/>
        </div>
        <div>
            {dummyMedications.map((info, index) => (
                <ScheduleCard data={info} key={index} />

            ))}
        </div>
    </>
  )
}

export default Scheduler