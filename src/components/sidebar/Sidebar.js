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
          <h6>Master admin</h6>
          <p>Inam@zaavia.net</p>
          <p>Admin</p>


          <div className="flex flex-wrap justify-center mt-4">
              <img
                src={img}
                className= {!open ? "rounded-full w-12 mb-8 mx-auto absolute z-10" : "rounded-full w-14 mb-4 mx-auto absolute z-10"}
                alt="Avatar"
              />
           
            </div>
        </div>
        <div className=' flex flex-col gap-3 px-4  pt-8 min-h-screen' style={{background:"#2d313e"}} >
          {
            NavbarItems?.map((e, i) => {
              return (
                <a onClick={()=>navigate(e.link)}  key={i} className="group cursor-pointer flex items-center gap-6 h-8 target:shadow-lg  hover:bg-blue-500 rounded-r-full active:ring-cyan-200  focus:ring-2 focus:ring-cyan-200">
                  <div>{React.createElement(e.icon, { size: '17' })}</div>
                  <h6
                    
                    className={`whitespace-pre duration-500 ${!open && "opacity-0 translate-x-28 overflow-hidden"}`}>{e.name}</h6>
                 
                </a>)
            })

          }

        </div>
      </div>



    </>
   
    )
}
