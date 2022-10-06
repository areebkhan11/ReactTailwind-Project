import React from 'react'
import { Outlet } from 'react-router-dom';

import Sidebar from '../sidebar/Sidebar'
import Navbar from '../custom-elements/Navbar'
import RightSideBar from '../../pages/RightSideBar';


export default function FullLayout() {
  return (
    <>
    <Navbar />
      <div className='flex flex-col '>
        <Sidebar />
      </div>
      <div  className='flex flex-row-reverse w-full h-screen'>
        <RightSideBar />
      </div>
        {/* <div className='pl-60'>
        <Outlet  />
        </div> */}
    </>
  )
}
