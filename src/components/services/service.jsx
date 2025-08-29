import React from 'react'
import { GoArrowRight } from "react-icons/go";

import "./serviceStyle.css"

export const Service = (props) => {
  return (
    <div className='service'>
        <div className='arrow_num'>
            <h1 className='serivce_num'>{props.num}</h1>
            <div className='arrow_container'><GoArrowRight className='arrow'/></div>
        </div>
        <h1 className='service_title'>{props.name}</h1>
        <p>{props.description}</p>
      </div>
  )
}
