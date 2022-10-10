import React from 'react'
import { Outlet } from 'react-router-dom';

import Sidebar from '../sidebar/Sidebar'
import Navbar from '../custom-elements/Navbar'
import RightSideBar from '../../pages/RightSideBar';


export default function FullLayout() {
  return (
    <>
    <div className='flex flex-col h-screen item-center '>

      
        <Sidebar />
     
      <div  className='flex flex-row-reverse '>
        <RightSideBar />
      </div>
    <div>
        {/* <Navbar className='absolute'/> */}

    </div>

      
        <Outlet  />
      

    </div>
    </>
  )
}
