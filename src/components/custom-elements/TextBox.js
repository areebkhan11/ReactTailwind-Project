import React, { Children } from 'react'

export default function TextBox({placeholder, type, text, id, value, Name, handleChange, padding, mb}) {
  return (
      <div  >
         <label class="text-left block text-gray-700 text-sm  " >
            {text}
          </label>
          <input type = {type}
             className={`shadow appearance-none border rounded w-full text-base py-${padding} px-3 text-gray-700 leading-tight focus:outline-none mb-${mb} focus:shadow-outline` }
              id={id}
              placeholder={placeholder}
              onChange={handleChange}
              value={value}
              name={Name}
            />
            </div>
  )
}
