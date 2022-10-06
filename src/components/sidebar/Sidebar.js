import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import MenuItem from './MenuItem'
import { MdOutlineSpaceDashboard } from "react-icons/md"
import { FiMenu } from 'react-icons/fi'
import { MdSupervisedUserCircle } from "react-icons/md"
import { MdSettings } from "react-icons/md"
import { FiGitBranch } from "react-icons/fi"
import { GoCalendar } from "react-icons/go"
import img from "../../assets/images/kisspng-avatar-user-medicine-surgery-patient-avatar-5acc9f7a7cb983.0104600115233596105109.jpg"


const NavbarItems =  [
    { name: "Dashboard", link: '/dashboard', icon: MdOutlineSpaceDashboard },
    { name: "Users", link: "/users", icon: MdSupervisedUserCircle },
    { name: "Branch", link: "/branch", icon: FiGitBranch },
    { name: "Accademic Session", link: "/accademic-session", icon: GoCalendar },
    { name: "Setting", link: "/setting", icon: MdSettings }
]
   


export default function Sidebar() {
  const [open, setopen] = React.useState(false)
  const navigate = useNavigate();
 
    return (
      <>
      
      <div className={`min-h-screen ${open ? "w-72" : "w-16"} fixed duration-500 z-20 text-white rounded-sm drop-shadow-xl `} >
        <div className="py-3 flex justify-end  px-4 "  style={{background:"#1d2028"}}>
          <FiMenu size={27} className="cursor-pointer" onClick={() => setopen(!open)} />
        </div>
        <div className='bg-black h-32  ' style={{background:"#1d2028"}}>
          {open ? <div>
          <h6>Master admin</h6>
          <p>Inam@zaavia.net</p>
          <p>Admin</p>
          </div> :<div className='h-24'></div> 
          }
          <div className="flex flex-wrap justify-center mt-4">
              <img
                src={img}
                className= {!open ? "rounded-full w-12 mb-8 mx-auto absolute z-10" : "rounded-full w-14 mb-4 mx-auto absolute z-10"}
                alt="Avatar"
              />
           
            </div>
        </div>
        <div className=' flex flex-col gap-3  pr-4 pt-8 min-h-screen' style={{background:"#2d313e"}} >
          {
            NavbarItems?.map((e, i) => {
              return (

                <a onClick={()=>navigate(e.link)}  key={i} className="group px-4 cursor-pointer flex items-center gap-6 h-8 target:shadow-lg  hover:bg-blue-500 rounded-r-full active:ring-cyan-200  focus:ring-2 focus:ring-cyan-200">
                  <div>{React.createElement(e.icon, { size: '17' })}</div>
                  <h6 className={`whitespace-pre duration-500 ${!open && "opacity-0 translate-x-28 overflow-hidden"}`}>{e.name}</h6>
                </a>
                
                
                )

            })

          }
          {
            <ul class="relative">
            <li>
					<button type="button" class="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                  <svg class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd"></path></svg>
                  <span class="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item>E-commerce</span>
                  <svg sidebar-toggle-item class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
					<ul id="dropdown-example" class="hidden py-2 space-y-2">
						<li>
							<a href="#"
								class="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 pl-11">Products</a>
						</li>
						<li>
							<a href="#"
								class="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 pl-11">Billing</a>
						</li>
						<li>
							<a href="#"
								class="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 pl-11">Invoice</a>
						</li>
					</ul>
				</li>
             
           
          </ul>
          }

        </div>
      </div>



    </>
   
    )
}
