import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout/Layout'

export const Error = () => {
  return (
        <Layout>
            <div className='flex items-center justify-center h-screen mx-2 my-2 overflow-hidden '>
                <div className='px-6 py-4 rounded shadow-lg'>
                    <div className='mb-2 text-xl font-bold text-center'>
                    <h3>404 - Sorry could not find this page 🐈</h3>
                    <Link to="/">
                        <p className='underline text-cyan-500'>Return Home</p>
                    </Link>
                    </div>
                </div>
            </div>
        </Layout>
  )
}
