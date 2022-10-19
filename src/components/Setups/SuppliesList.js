import React from 'react'
import SetupNavBar from '../custom-elements/SetupNavbar'

const SupplierList = () => {
    return (
        <div>
            <SetupNavBar />
            <div className='flex justify-start mt-7 mb-4 bg-[#039be5] p-1 text-white text-2xl'>
                <h3>Supplier List</h3>
            </div>
        </div>
    )
}

export default SupplierList