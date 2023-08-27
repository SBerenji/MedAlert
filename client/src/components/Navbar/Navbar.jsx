import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { ProfileMenu } from '../Profile/ProfileMenu';
// Redux State 
// import { useSelector } from 'react-redux';
import { Button } from '@material-tailwind/react';
import { ProfileMenu } from '../Profile/ProfileMenu';

const Navbar = () => {
//   const linkTo = button === 'login' ? '/login' : `/${button}`;

  // Check for authentication
//   const { isAuthenticated } = useSelector(state => state.user);
  const user = localStorage.getItem("token");

  const [isAuthenticated, setIsAuthenticated] = useState(!!user);


  // Logic for autheticated navbar
  const authLinks = (
    <>
      <Link>
          <button className='rounded-lg border-2 border-b-4 border-r-4 border-black px-2 py-1 text-xl font-bold transition-all hover:-translate-y-[2px] md:block dark:border-white'>
            MedAlert
          </button>
      </Link>
      <div>
        <Button>Inbox</Button>
        <ProfileMenu/>
      </div>
    </>
  );

  const guestLinks = (
    <>
      <Link to="/">
          <button className='rounded-lg border-2 border-b-4 border-r-4 border-black px-2 py-1 text-xl font-bold transition-all hover:-translate-y-[2px] md:block dark:border-white'>
            MedAlert
          </button>
      </Link>
      <button className='px-2 py-1 text-xl bg-emerald text-white rounded-lg transition-all hover:-translate-y-[2px] md:block dark:border-white'>
          <Link to="/login">
            Login
          </Link>
      </button>
    </>
  )

  return (
    <div className='fixed inset-x-0 top-0 bg-white dark:bg-gray-950 z-[10] h-fit border-b border-zinc-300 py-2'>
      <div className='flex items-center justify-between h-full gap-2 px-8 mx-auto max-w-7xl '>
        {/* Logo */}
        

        {isAuthenticated ? authLinks : guestLinks}
      </div>
    </div>
  );
};

export default Navbar;
