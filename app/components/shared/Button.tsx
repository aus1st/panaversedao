import React, { FC } from 'react'

const Button:FC<{text: string}> = ({text}) => {
  return (
    
        <button className="mt-5 px-5 py-2 bg-teal-800 
        hover:shadow-lg hover:scale-105 duration-700 text-lg
        text-white rounded-full font-semibold">{text}</button>
    
  )
}

export default Button
