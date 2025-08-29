import React from 'react'
import "./ExpCardStyle.css"
import { GoDotFill } from "react-icons/go";

export const ExpCard = (props) => {
  return (
    <div className='card_resume'>
        <h4 className='time'>{props.time}</h4>
        <h3 className='title'>{props.title}</h3>
        <div>
            <GoDotFill className='dot'/> 
            <p className='desc'>{props.description}</p>
        </div>
    </div>
  )
}
