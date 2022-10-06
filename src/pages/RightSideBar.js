import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { HiUsers, HiUserCircle } from 'react-icons/hi'
import { ImSearch } from 'react-icons/im'
import { ImCross } from 'react-icons/im'

export default function RightSideBar() {
    const [open, setopen] = React.useState(false)
    const navigate = useNavigate();

    const users = [
        {
            id: 1,
            name: "Sarmad"
        },
        {
            id: 2,
            name: "Areeb"
        },
    ]

    return (
        <>
            <div className={`min-h-screen ${open ? "w-80" : "w-16"} fixed duration-500 z-20 text-white rounded-sm drop-shadow-xl `} >
                <div className="py-5 flex flex-row justify-between absolute px-5 w-full" style={{ background: "#3C4252" }}>
                    <HiUsers size={25} className="cursor-pointer fixed" onClick={() => setopen(true)} />
                    <p className='ml-11'>Users</p>
                    <ImSearch className='mr-5 mt-1' />
                    <ImCross className='mt-1' onClick={() => setopen(false)} />
                </div>
                <div className='flex flex-col gap-3 px-4 pt-20 min-h-screen text-black' style={{ background: "#F5F5F5" }} >
                    {
                        users.map(user => {
                            return (
                                <div key={user.id} className='cursor-pointer'>
                                    {open ?
                                        <div className='hover:bg-gray-200'>
                                            <div className="flex justify-start">
                                                <div className="form-check flex gap-4">
                                                    <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 mt-1 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                    <label className="form-check-label inline-block text-gray-800" for="flexCheckIndeterminate">{user.name}</label>
                                                    {/* <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckIndeterminate" />
                                                    <label class="form-check-label inline-block text-gray-800" for="flexCheckIndeterminate">
                                                        {user.name}
                                                    </label> */}
                                                </div>
                                            </div>
                                        </div>
                                        :
                                        <HiUserCircle className='flex justify-start' size={30} />}
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </>

    )
}
