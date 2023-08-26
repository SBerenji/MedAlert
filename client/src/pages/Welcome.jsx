import React, { Suspense } from 'react';
import { Link } from 'react-router-dom';
import { CarouselCustomArrows } from '../components/Carousel/CarouselCustomArrow';
import { Spinner } from "@material-tailwind/react";
import Layout from '../components/Layout/Layout';



const Welcome = () => {
  return (
    <>
      <Layout/>
        <Suspense fallback={<Spinner />}>
          <div className='grid grid-cols-1 pt-16 md:grid-cols-2'>
            <div className='grid items-center gap-1 text-left'>
              <p>Your Personal Medication Reminder</p>
              <h1 className='text-4xl font-bold'>Never Miss a Dose Again, Stay Healthy and Complete!</h1>
              <div className='grid gap-1'>
                <p>Are you struggling to keep up with your medication schedule?</p>
                <p>Say hello to MediAlerts - the ultimate solution for staying on top of your health routine.</p>
              </div>
              <div className='py-4 md:py-0'>
                <button className='px-2 py-1 text-xl text-white bg-black rounded-lg transition-all hover:-translate-y-[2px] md:block dark:border-white'>
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