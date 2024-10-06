import { useState, useRef } from 'react';
import "./WorkStyle.css";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import project1 from "../../assets/work/quran_app.png";
import project2 from "../../assets/work/shope_app.png";
import project3 from "../../assets/work/thumb3.png";
import { GoArrowRight } from 'react-icons/go';
import { FaGithub } from 'react-icons/fa';

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
          <h3>Frontend Project</h3>
          <p>I've been building a website to listen to the Quran using an API.
             Through this project, I use useEffect and create custom hooks to manage API calls efficiently.</p>
          <p className='technology'>React.Js, CSS</p>
          <div className='line'></div>
          <div className="ref-github">
            <a href="https://recitersquran.netlify.app" target="_blank" rel="noopener noreferrer" className='ref'>
              <GoArrowRight />
            </a>
            <a href="https://github.com/AdamBhs/QuranApp" target="_blank" rel="noopener noreferrer" className='github'>
              <FaGithub />
            </a>
          </div>
        </>
        }
        {project === "Project 2" &&
        <>
          <h1>02</h1>
          <h3>Frontend Project</h3>
          <p>I built a landing page for an e-commerce clothing app, focusing on a user-friendly interface and responsive design to enhance the shopping experience.</p>
          <p className='technology'>React.Js, CSS</p>
          <div className='line'></div>
          <div className="ref-github">
            <a href="https://shopesmith.netlify.app" target="_blank" rel="noopener noreferrer" className='ref'>
              <GoArrowRight />
            </a>
            <a href="https://github.com/AdamBhs/E-commerce" target="_blank" rel="noopener noreferrer" className='github'>
              <FaGithub />
            </a>
          </div>
        </>
        }
        {project === "Project 3" &&
        <>
          <h1>03</h1>
          <h3>Hello</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque consequat, faucibus et, et.</p>
          <p className='technology'>React.Js, CSS</p>
          <div className='line'></div>
          <div className="ref-github">
            <div className='ref'><GoArrowRight /></div>
            <div className='github'><FaGithub /></div>
          </div>
        </>
        }
        {project === "Project 4" &&
        <>
          <h1>04</h1>
          <h3>Hello</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque consequat, faucibus et, et.</p>
          <p className='technology'>React.Js, CSS</p>
          <div className='line'></div>
          <div className="ref-github">
            <div className='ref'><GoArrowRight /></div>
            <div className='github'><FaGithub /></div>
          </div>
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
