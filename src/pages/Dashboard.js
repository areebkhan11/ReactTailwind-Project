import React from 'react'
import Form from '../components/form/Form'
import Posts from '../components/Posts/Posts'

export default function Dashboard() {
  return (
    <div class="flex flex-row gap-11 justify-between m-32 ">
    <div>
      <Posts />   
    </div>
    <div>
      <Form />
    </div>
  </div>
  )
}
