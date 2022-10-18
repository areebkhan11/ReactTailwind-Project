import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginUser } from '../../redux/user/action';
import img from "../../assets/images/kisspng-avatar-user-medicine-surgery-patient-avatar-5acc9f7a7cb983.0104600115233596105109.jpg"


export default function Navbar({ openRight }) {

    const [dropdown, setDropdown] = useState(false)

    const dispatch = useDispatch();

    const handleSubmit = () => {
        localStorage.setItem("authenticate", "false")
        dispatch(loginUser(false))
    }

    const handleDropdown = () =>{
        setDropdown((dropdown) => !dropdown)
    }

    return (
        <div>
            <nav class="w-full flex flex-wrap font-bold items-center justify-between py-3 bg-gray-100  shadow-lg">
                <div class="container-fluid w-full flex flex-wrap items-center justify-between px-6">
                    <div className="container-fluid pl-4 ">
                        <h1>The Indus Hospital Blood Center (Korangi) </h1>
                    </div>




                    <div
                        class={`flex ${openRight ? "px-80  duration-500" : "px-16 duration-500"}  transition duration-500   py-2.5 bg-transparent  font-medium text-lg leading-tight  rounded  hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition  ease-in-out`}
                    // onClick={handleSubmit}        
                    >
                        <div className="flex flex-wrap justify-center pl-2 ">
                            <img
                                src={img}
                                className={"rounded-full w-8  mx-auto"}
                                alt="Avatar"
                            />


                        </div>
                            <div className='p-1'>
                                <h1>Master Admin</h1>
                            </div>
                        <div class="flex flex-column  inline-block text-left">
                            <div>
                                <button type="button" onClick={handleDropdown} >
                                  
                                    <svg class="-mr-1 ml-2 h-5 w-5 mt-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                                    </svg>
                                </button>
                            </div>

                            {dropdown ? <div className={openRight? `absolute right-80 top-8 z-10 mt-8  w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none` : `absolute right-24 top-8 z-10 mt-8  w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`} role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                                <div class="py-1" role="none">
                                   
                                    <a href="#" class="text-gray-700  block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">My Profile</a>
                            
                                    <form method="POST" action="#" role="none">
                                        <button type="submit" class="text-gray-700 block w-full px-4 py-2 text-left text-sm" role="menuitem" tabindex="-1" id="menu-item-3">Log out</button>
                                    </form>
                                </div>
                            </div> : null}
                        </div>

                    </div>
                </div>
            </nav>
        </div>
    )


}
