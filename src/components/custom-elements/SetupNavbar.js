import React from 'react';
import { useNavigate } from 'react-router-dom'

export default function DashboardNavbar() {

  const navigate = useNavigate();

//   const handleClientManagement = (e) => {
//     e.preventDefault();
//     navigate('/clientmanagement')
//   }

  return (
    <div>
        <nav className="w-full flex flex-wrap font-semibold items-center justify-between border-b border-gray-300 bg-[#F5F5F5]">
            <div className="container-fluid w-full flex flex-wrap items-center justify-start px-6 gap-20 py-3">
                <div className='pl-4 cursor-pointer'>
                    <h1 onClick={() => navigate('/taskoutcometarget')}>Task/Outcome/Target</h1>
                </div>
                
                <div className='cursor-pointer'>
                    <h1 onClick={() => navigate('/ticketID')}>Ticket ID</h1>
                </div>

                <div className='cursor-pointer'>
                    <h1 onClick={() => navigate('/geomappinginterval')}>GeoMappingInterval</h1>
                </div>

                <div className='cursor-pointer'>
                    <h1 onClick={() => navigate('/allowances')}>Allowances</h1>
                </div>
                <div className='cursor-pointer'>
                    <h1 onClick={() => navigate('/EventTypeSetup')}>Event Type Setup</h1>
                </div>    
                <div className='cursor-pointer'>
                    <h1 onClick={() => navigate('/supplierlist')}>Supplies List</h1>
                </div>   
                <div className='cursor-pointer'>
                    <h1 onClick={() => navigate('/removevehicle')}>Remove Vehicle</h1>
                </div>                
            </div>
        </nav>
    </div>
  )


}
