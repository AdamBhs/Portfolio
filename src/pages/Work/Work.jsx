import React, { useState, useRef } from 'react';
import "./WorkStyle.css";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import project1 from "../../assets/work/thumb1.png";
import project2 from "../../assets/work/thumb2.png";
import project3 from "../../assets/work/thumb3.png";

export const Work = () => {
  const swiperRef = useRef(null);
  const projectNames = ['Project 1', 'Project 2', 'Project 3', 'Project 4']; 
  const [project, setProject] = useState('Project 1');

  const handleSlideChange = (swiper) => {
    console.log(`Slide Index: ${swiper.activeIndex}, Project Name: ${projectNames[swiper.activeIndex]}`);
    setProject(projectNames[swiper.activeIndex]);
  };

  return (
    <div className='work-container'>
      <div className='project-description'>
        {project === "Project 1" &&
        <>
          <h1>01</h1>
          <h3>Fullstack project</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque consequat, faucibus et, et.</p>
          <p className='technology'>React.Js, CSS</p>
          <div className='line'></div>
        </>
        }
        {project === "Project 2" &&
        <>
          <h1>02</h1>
          <h3>Hello</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque consequat, faucibus et, et.</p>
          <p className='technology'>React.Js, CSS</p>
          <div className='line'></div>
        </>
        }
        {project === "Project 3" &&
        <>
          <h1>03</h1>
          <h3>Hello</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque consequat, faucibus et, et.</p>
          <p className='technology'>React.Js, CSS</p>
          <div className='line'></div>
        </>
        }
        {project === "Project 4" &&
        <>
          <h1>04</h1>
          <h3>Hello</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque consequat, faucibus et, et.</p>
          <p className='technology'>React.Js, CSS</p>
          <div className='line'></div>
        </>
        }
      </div>
      <div className="project-pictures">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          onSlideChange={handleSlideChange}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            console.log(swiper);
          }}
        >
          <SwiperSlide><img src={project1} alt="Project 1" /></SwiperSlide>
          <SwiperSlide><img src={project2} alt="Project 2" /></SwiperSlide>
          <SwiperSlide><img src={project3} alt="Project 3" /></SwiperSlide>
          <SwiperSlide><img src={project1} alt="Project 4" /></SwiperSlide>
        </Swiper>
        <div className="navigation-buttons">
          <div className='btn' onClick={() => swiperRef.current.slidePrev()}>
            <IoIosArrowBack size={24} />
          </div>
          <div className='btn' onClick={() => swiperRef.current.slideNext()}>
            <IoIosArrowForward size={24} />
          </div>
        </div>
      </div>
    </div>
  );
};
