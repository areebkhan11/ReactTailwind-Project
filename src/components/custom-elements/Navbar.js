import React from 'react'
import { useDispatch } from 'react-redux'
import { loginUser } from '../../redux/user/action';

export default function Navbar({openRight}) {

    const dispatch = useDispatch();

    const handleSubmit = () =>{
        localStorage.setItem("authenticate", "false")
        dispatch(loginUser(false))
    }


  return (
    <div>
        <nav class="w-full flex flex-wrap font-bold items-center justify-between py-3 bg-gray-100  shadow-lg">
            <div class="container-fluid w-full flex flex-wrap items-center justify-between px-6">
                <div className="container-fluid pl-4 ">
                    <h1>The Indus Hospital Blood Center (Korangi) </h1>
                </div>
                


                
                <button type="button" 
                    class= {`flex ${openRight ? "px-80  duration-500" : "px-32 duration-500"} transition duration-500   py-2.5 bg-transparent text-blue-600 font-medium text-lg leading-tight uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition  ease-in-out`}
                    onClick={handleSubmit}        
                    >
                    Log Out
                </button>
            </div>
        </nav>
    </div>
  )


}
