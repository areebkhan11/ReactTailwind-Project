import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import MenuItem from './MenuItem'
import { MdOutlineSpaceDashboard } from "react-icons/md"
import { FiMenu } from 'react-icons/fi'
import { MdSupervisedUserCircle } from "react-icons/md"
import { MdSettings } from "react-icons/md"
import { FiGitBranch } from "react-icons/fi"
import { GoCalendar } from "react-icons/go"
import Navbar from '../custom-elements/Navbar'
import { Outlet } from 'react-router-dom';
import img from "../../assets/images/kisspng-avatar-user-medicine-surgery-patient-avatar-5acc9f7a7cb983.0104600115233596105109.jpg"

import { HiUsers, HiUserCircle } from 'react-icons/hi'
import { ImSearch } from 'react-icons/im'
import { ImCross } from 'react-icons/im'

const NavbarItems = [

  { id: 0, name: "Dashboard", link: '/dashboard', icon: MdOutlineSpaceDashboard },
  { id: 1, name: "Users", link: "/users", icon: MdSupervisedUserCircle },
  { id: 2, name: "Branch", link: "/branch", icon: FiGitBranch },
  { id: 3, name: "Accademic Session", link: "/accademic-session", icon: GoCalendar },
  { id: 4, name: "Setting", link: "/setting", icon: MdSettings },
  { id: 5, multi: true, name: "Calanders", list: [{ name: "First value", link: "/main", icon: GoCalendar }] },
  {
    id: 6, multi: true, name: "Reports", list: [{ name: "second value", link: "/main", icon: GoCalendar },
    { name: "third value", link: "/main", icon: GoCalendar }]
  }
]



export default function Sidebar() {
  const [open, setopen] = React.useState(false)
  const [dropdown, setDropdown] = React.useState(false)
  const [id, setId] = React.useState(false)
  const navigate = useNavigate();
  const [openRight, setopenRight] = React.useState(false)


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

  const handletogle = (i) => {

    const filter = NavbarItems.find((x => x.id === i))
    if (filter.id === i) {
      setId(i)
      setDropdown((dropdown) => !dropdown)
    }


  }




  return (
    <>

      <div className={` ${open ? "w-72" : "w-16"} overflow-hidden top-0 left-0 fixed duration-500 z-10 overflow-x-hidden text-white rounded-sm drop-shadow-xl `} >

        <div className="py-3 flex justify-end  px-4 " style={{ background: "#1d2028" }}>
          <FiMenu size={27} className="cursor-pointer" onClick={() => setopen(!open)} />
        </div>
        <div className='bg-black h-32' style={{ background: "#1d2028" }}>
          {open ? <div>
            <h6>Master admin</h6>
            <p>Inam@zaavia.net</p>
            <p>Admin</p>
          </div> : <div className='h-24'></div>
          }
          <div className="flex flex-wrap justify-center mt-4">
            <img
              src={img}
              className={!open ? "rounded-full w-12 mb-8 mx-auto absolute z-10" : "rounded-full w-14 mb-4 mx-auto absolute z-10"}
              alt="Avatar"
            />

          </div>
        </div>
        <div className=' flex flex-col gap-3  pr-4 pt-8 min-h-screen' style={{ background: "#2d313e" }} >
          {
            NavbarItems?.map((e, i) => {
              return (
                <>
                  {!e?.multi &&
                    <a onClick={() => navigate(e.link)} key={i} className="group px-5 cursor-pointer flex items-center gap-6 h-8 target:shadow-lg  hover:bg-blue-500 rounded-r-full active:ring-cyan-200  focus:ring-2 focus:ring-cyan-200">
                      <div>{React.createElement(e.icon, { size: '17' })}</div>
                      <h6 className={`whitespace-pre duration-500 ${!open && "opacity-0 translate-x-28 overflow-hidden"}`}>{e.name}</h6>
                    </a>}

                  {e?.multi && <ul className="relative">
                    <li>
                      <button onClick={() => handletogle(i)} type="button" className="group px-4 cursor-pointer flex items-center gap-6 target:shadow-lg  " aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                        <div>{React.createElement(GoCalendar, { size: '17' })}</div>
                        <h6 className={`whitespace-pre duration-500 ${!open && "opacity-0 translate-x-28 overflow-hidden"}`}>{e.name}</h6>
                        <svg sidebar-toggle-item className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>

                      </button>
                      {id === i && e?.list.map((v, i) => {
                        return (
                          <ul id="dropdown-example" className={dropdown ? "py-2 space-y-2" : "hidden py-2 space-y-2"}>
                            <li>
                              <a href="#" className="flex items-center w-full p-1 text-base font-normal text-white transition duration-75 rounded-lg group hover:bg-blue-500 rounded-r-full active:ring-cyan-200  focus:ring-2 focus:ring-cyan-200 pl-20">{v.name}</a>
                            </li>
                          </ul>
                        )
                      })
                      }
                    </li>
                  </ul>}

                </>
              )

            })
          }



        </div>
      </div>

      <div>

        <div className='flex flex-row-reverse'>
          <div className={`min-h-screen ${openRight ? "w-80" : "w-16"}  fixed duration-500 z-20 text-white rounded-sm drop-shadow-xl `} >
            <div className="py-5 flex flex-row justify-between absolute px-5 w-full bg-[#3C4252]">
              <HiUsers size={25} className="cursor-pointer fixed" onClick={() => setopenRight(true)} />
              <p className='ml-11'>Users</p>
              <ImSearch className='mr-5 mt-1' />
              <ImCross className='mt-1 cursor-pointer' onClick={() => setopenRight(false)} />
            </div>
            <div className='flex flex-col gap-3 px-4 pt-20 min-h-screen text-black bg-[#F5F5F5]'>
              {
                users.map(user => {
                  return (
                    <div key={user.id}>
                      {openRight ?
                        <div className='hover:bg-gray-200'>
                          <div className="flex justify-start">
                            <div className="form-check flex gap-4">
                              <input id="default-checkbox" type="checkbox" value="" className="cursor-pointer w-4 h-4 mt-1 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
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
        </div>


        <div className={`${open ? "ml-64 duration-500" : "ml-12"} bg-[#F5F5F5] border-b border-gray-400`}>
          <Navbar openRight={openRight} />

      <div className={`${open ? "ml-64 duration-500" : "ml-12"} bg-[#F5F5F5] border-b border-gray-400`}>
        <Navbar openRight={openRight}/>
      </div>
    </div>
    
    <div className={`${open ? "ml-72 duration-500 mr-20" : "ml-0" }  ${openRight ? "mr-72 duration-500 ml-20" : "mr-0" } flex justify-center bg-[#F5F5F5]`}>
        <Outlet  />
        </div>
      </div>

      <div className={`${open ? "ml-64 duration-500" : "ml-0"} flex justify-center bg-[#F5F5F5]`}>
        <Outlet />
      </div>
    </>

  )
}
