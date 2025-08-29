import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { Service } from '../../components/services/service';
import "./ServicesStyle.css"

export const Services = () => {
  const services = [
    {
      num: "01",
      title: "Front End",
      description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque tenetur",
      href: ""
    },
    {
      num: "02",
      title: "Back End",
      description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque tenetur",
      href: ""
    },
    {
      num: "03",
      title: "UI/UX Design",
      description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque tenetur",
      href: ""
    },
    {
      num: "04",
      title: "Machine Learning",
      description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque tenetur",
      href: ""
    },
  ]

  return (
    <div className='services-options'>
      {services.map((data, index) => {
        return (<Service num ={data.num} name = {data.title} description= {data.description} href= {data.href}/>)
      })}
    </div>
  )
}
