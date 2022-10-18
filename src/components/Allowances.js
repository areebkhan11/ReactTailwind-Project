import React from 'react'
import DashboardNavbar from './custom-elements/DashboardNavbar'

const Allowances = () => {
    return (
        <div>
            <DashboardNavbar />
            <div className='flex justify-start mt-7 mb-4 bg-[#039be5] p-1 text-white text-2xl'>
                <h3>Allowances</h3>
            </div>
        </div>
    )
}

export default Allowances