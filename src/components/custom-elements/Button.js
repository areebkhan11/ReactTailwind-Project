


import classnames from 'classnames';
import React from 'react'

export default function Button({size, bgColor, bg, textColor, children, width, buttonType, onClick }) {
  return (
        <button className={classnames(`bg-500 ${textColor} hover:bg-${bgColor} text-white font-bold py-2  w-${width} mb-2 rounded focus:outline-none focus:shadow-outline ${buttonType} `, {
          "text-xs": size === 'sm',
          "text-xl": size === 'lg',
          })}
          onClick={onClick}
          
          >
        {children}
        </button>
    )

}

