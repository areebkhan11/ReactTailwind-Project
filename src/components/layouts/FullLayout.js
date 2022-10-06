import React from 'react'
import { Outlet } from 'react-router-dom';

import Sidebar from '../sidebar/Sidebar'
import Navbar from '../custom-elements/Navbar'


export default function FullLayout() {
  return (
    <>
    <Navbar />
      <div className='flex flex-col '>
        <Sidebar />
      </div>
        <div className='pl-60'>
        <Outlet  />
        </div>
    </>
  )
}
