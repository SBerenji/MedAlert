import { Typography } from '@material-tailwind/react'
import React from 'react'
import { ScheduleCard } from '../../Card/ScheduleCard'
import dummyMedications from '../../../dummyMedications.json'

const Scheduler = () => {
  return (
    <>
        <div>
            <Typography variant='h2' className=' font-normal'>
                Med Schedule
            </Typography>
        </div>
        <div>

        </div>
        <div>
            {dummyMedications.map((info, index) => {
                <ScheduleCard data={info}/>
            })}
        </div>
    </>
  )
}

export default Scheduler