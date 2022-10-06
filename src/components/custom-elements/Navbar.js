import React from 'react'
import { useDispatch } from 'react-redux'
import { loginUser } from '../../redux/user/action';

export default function Navbar() {

    const dispatch = useDispatch();

    const handleSubmit = () =>{
        localStorage.setItem("authenticate", "false")
        dispatch(loginUser(false))
    }

  return (
    <div>
        <nav class="relative w-full flex flex-wrap items-center justify-between py-3 bg-gray-100 text-gray-500 hover:text-gray-700 focus:text-gray-700 shadow-lg">
            <div class="container-fluid w-full flex flex-wrap items-center justify-between px-6">
                <div class="container-fluid pl-4">
                    
                    
                </div>
                
                <button type="button" 
                    class="flex px-6 py-2.5 bg-transparent text-blue-600 font-medium text-lg leading-tight uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out"
                    onClick={handleSubmit}        
                    >
                    Log Out
                </button>
            </div>
        </nav>
    </div>
  )


}
