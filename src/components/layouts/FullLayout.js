import React from 'react'

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
    
        
    </div>
    </>
  )
}
