import React, { useState } from 'react'
import Button from '../components/custom-elements/Button'
import Card from '../components/custom-elements/Card'
import TextBox from '../components/custom-elements/TextBox'
import Typography from '../components/custom-elements/Typography'
import {  useDispatch  } from 'react-redux'
import { loginUser } from '../redux/user/action'
import Navbar from '../components/custom-elements/Navbar'




export default function SignIn() {
  const dispatch = useDispatch();
  const [form, setForm] = useState({ Username: "", Password: "" })
  
  
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }


  
  const handleSubmit = () => {
    if("areebkhan@gmail.com" ==  form.Username && "areeb"  == form.Password){
      localStorage.setItem("authenticate", "true")
      dispatch(loginUser(true))
      
    }else{
      console.log("Not Enter")
    }

  }

  return (
    <div className="mt-4 bg-yellow" >
        <Navbar/>
    
       
    </div>
  )
}