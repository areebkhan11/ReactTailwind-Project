import React from 'react'
import Button from '../custom-elements/Button'
import Card from '../custom-elements/Card'
import TextBoxt from '../custom-elements/TextBox'
import Typography from '../custom-elements/Typography'


export default function Form() {
  return (
    <div className='flex '>
    <Card width={96} Padding={4}>
      <Typography size={"2xl"}>Create a Post</Typography>

    
      <TextBoxt  
        padding={3.5}
        placeholder={"Creator"}
        mb={4}
      />
     
      <TextBoxt 
        padding={3.5}
        placeholder={"Title"}
        mb={4}
      />

      <TextBoxt 
        padding={3.5}
        placeholder={"Message"}
        mb={4}
      />

      <TextBoxt 
        padding={3.5}
        placeholder={"Tags"}
        mb={4}
      />

      <Button 
            bgColor={"blue-300"}
            children={"Submit"}
            width={"full"}
            bg={"blue-500"}
            // onClick={handleSubmit}
            >
        
      </Button>

      <Button 
            bgColor={"cyan-600"}
            children={"Clear"}
            width={"full"}
            bg={"cyan-500"}

            // onClick={handleSubmit}
            >
        
      </Button>


    </Card>
    </div>
  )
}
