import React from 'react'
import { Typography } from '@material-tailwind/react'


const Header = () => {
  return (
    <div>
        <Typography variant='h3'>Welcome to MedAlert</Typography>
        <Typography variant='h4'>Type of Account</Typography>
        <p>Choose the type of your account</p>
    </div>
  )
}

export default Header