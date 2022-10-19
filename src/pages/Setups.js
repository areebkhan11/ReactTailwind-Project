import React, { useState } from 'react'
import {  useDispatch  } from 'react-redux'
import { loginUser } from '../redux/user/action'
import SetupNavbar from '../components/custom-elements/SetupNavbar'




export default function Setups() {
  const dispatch = useDispatch();
  const [form, setForm] = useState({ Username: "", Password: "" })
  
  
  

  return (
    <div className="mt-4 bg-yellow" >
        <SetupNavbar />
       
    </div>
  )
}