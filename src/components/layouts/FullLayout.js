import React from 'react'
import { Outlet } from 'react-router-dom';

import Sidebar from '../sidebar/Sidebar'
import Navbar from '../custom-elements/Navbar'
import RightSideBar from '../../pages/RightSideBar';


export default function FullLayout() {
  return (
    <>
    <div className='flex flex-col '>

      <div className='flex flex-col ml-2'>
        <Sidebar />
      </div>
      <div  className='flex flex-row-reverse'>
        <RightSideBar />
      </div>
      <div>
        <Navbar />
      </div>
        <div className='flex justify-center bg-[#F5F5F5]'>
        <Outlet  />
        </div>
    </div>
    </>
  )
}
