import React from 'react'

export default function Card({children, width, Padding }) {
  return (
    <div className="flex justify-center">
    <div className={`bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-${width} p-${Padding}`} >{children}</div>
    </div>
   
  )
}

