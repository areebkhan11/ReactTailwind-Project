import React from 'react'
import classnames from 'classnames';

export default function Typography({children, color , size}) {
  
  return (

    <h5 className={classnames(`font-medium mb-3 leading-tight text-${size} color-${color}`)}>{children}</h5>
  )
}
