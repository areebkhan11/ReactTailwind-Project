import React, { useState } from 'react'
import Button from '../components/custom-elements/Button'
import Card from '../components/custom-elements/Card'
import TextBox from '../components/custom-elements/TextBox'
import Typography from '../components/custom-elements/Typography'
import {  useDispatch  } from 'react-redux'
import { loginUser } from '../redux/user/action'




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
    <div className="mt-40 bg-yellow" >
      <Card width={96} >
        <div className='px-28'>
          <Typography  size={"xl"} color={"brown"} > Login </Typography>
        </div>
     
          <TextBox
            value={form.Username}
            Name={"Username"}
            handleChange={handleChange}
            type={"text"}
            padding={3}
            mb={4}
            placeholder={"Username"} />


          <TextBox
            value={form.Password}
            Name={"Password"}
            type={"password"}
            padding={3}
            mb={6}
            handleChange={handleChange}
            placeholder={"Password"} />


   
        <div class="flex items-center justify-between">

          <Button
            bgColor={"blue-500"}
            children={"Sign In"}
            width={36}
            onClick={handleSubmit}
          />
          <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
            Forgot Password?

          </a>
        </div>
      </Card>
    </div>
  )
}