import React, { Suspense } from 'react';
import { Link } from 'react-router-dom';
import { CarouselCustomArrows } from '../components/Carousel/CarouselCustomArrow';
import { Spinner, Typography } from "@material-tailwind/react";
import Layout from '../components/Layout/Layout';



const Welcome = () => {
  return (
    <>
      <Layout/>
        <Suspense fallback={<Spinner />}>
          <div className='grid grid-cols-1 pt-16 md:grid-cols-2 md:gap-10'>
            <div className='grid items-center gap-1 text-left md:h-3/4 md:w-3/4'>
              <Typography variant='h1' className=' font-light md:font-medium'>Welcome to MedAlert!</Typography>
              <div className='grid gap-1'>
                <Typography variant='h4' className=' font-light'>Your all-in-one solution for medication management.</Typography>
              </div>
              <div className='py-4 md:py-0'>
                <Typography variant='h4' className=' font-light'>Do not have an account?</Typography>
                <button className='px-2 py-1 text-xl bg-emerald text-white rounded-lg transition-all hover:-translate-y-[2px] md:block dark:border-white'>
                  <Link to="/register">
                    Register Now
                  </Link>
                </button>
              </div>
            </div>
            <CarouselCustomArrows />
          </div>
        </Suspense>
    </>
  )
}

export default Welcome