import {React, useState} from 'react'
import "./ResumeStyle.css"
import { Button } from '../../components/button/Button'
import { ExpCard } from '../../components/cards/ExpCard';
import { SiJavascript, SiSpring, SiTypescript } from 'react-icons/si';
import { FaAngular, FaFigma, FaJava, FaNodeJs, FaReact } from 'react-icons/fa6';

export const Resume = () => {
  const [activeSection, setActiveSection] = useState('experience');

  const handleClick = (section) => {
    setActiveSection(section);
    console.log("Clicked", section);
  };

  return (
    <div className='resume-container'>
      <div className='options_resume'>
        <h1>Why hire me?</h1>
        <p>Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit.</p>
        <div className='btns_options'>
          <Button name="Experience" onClick={() => handleClick('experience')} className={`button ${activeSection === 'experience' ? 'active' : ''}`}/>
          <Button name="Education" onClick={() => handleClick('education')} className={`button ${activeSection === 'education' ? 'active' : ''}`}/>
          <Button name="Skills" onClick={() => handleClick('skills')} className={`button ${activeSection === 'skills' ? 'active' : ''}`}/>
          <Button name="About me" onClick={() => handleClick('about')} className={`button ${activeSection === 'about' ? 'active' : ''}`}/>
        </div>
      </div>
      <div className='content'>
          {activeSection === 'experience' && 
            <div className='content-container'>
              <h2>My experience</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br /> Scelerisque consequat, faucibus et, et.</p>
              <div className='experience_list'>
                <ExpCard time="2022" title="Full Stack Developer Developer Developer" description="Tech solution Inc."/>
                <ExpCard time="2022" title="Full Stack Developer" description="Tech solution Inc."/>
                <ExpCard time="2022" title="Full Stack Developer" description="Tech solution Inc."/>
                <ExpCard time="2022" title="Full Stack Developer" description="Tech solution Inc."/>
                <ExpCard time="2022" title="Full Stack Developer" description="Tech solution Inc."/>
                <ExpCard time="2022" title="Full Stack Developer" description="Tech solution Inc."/>
              </div>
            </div>
          }

          {activeSection === 'education' && 
            <div className='content-container'>
              <h2>My education</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br /> Scelerisque consequat, faucibus et, et.</p>
              <div className='experience_list'>
                <ExpCard time="2022" title="Full Stack Developer Developer Developer" description="Tech solution Inc."/>
                <ExpCard time="2022" title="Full Stack Developer" description="Tech solution Inc."/>
                <ExpCard time="2022" title="Full Stack Developer" description="Tech solution Inc."/>
                <ExpCard time="2022" title="Full Stack Developer" description="Tech solution Inc."/>
                <ExpCard time="2022" title="Full Stack Developer" description="Tech solution Inc."/>
                <ExpCard time="2022" title="Full Stack Developer" description="Tech solution Inc."/>
              </div>
            </div>
          }
          
          {activeSection === 'skills' && 
            <div className='content-container'>
              <h2>My skills</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br /> Scelerisque consequat, faucibus et, et.</p>
              <div className='skills_list'>

                <div className='icon_container'>
                  <div className='skill_name'>Typescript</div>
                  <div className='icon_skill'>
                    <SiTypescript className="icon"/>
                  </div>
                </div>

                <div className='icon_container'>
                  <div className='skill_name'>Javascript</div>
                  <div className='icon_skill'>
                    <SiJavascript className="icon"/>
                  </div>
                </div>

                <div className='icon_container'>
                  <div className='skill_name'>Java</div>
                  <div className='icon_skill'>
                    <FaJava className="icon"/>
                  </div>
                </div>

                <div className='icon_container'>
                  <div className='skill_name'>Spring</div>
                  <div className='icon_skill'>
                    <SiSpring className="icon"/>
                  </div>
                </div>

                <div className='icon_container'>
                  <div className='skill_name'>React.Js</div>
                  <div className='icon_skill'>
                    <FaReact className="icon"/>
                  </div>
                </div>

                <div className='icon_container'>
                  <div className='skill_name'>Angular.Js</div>
                  <div className='icon_skill'>
                    <FaAngular className="icon" />
                  </div>
                </div>

                <div className='icon_container'>
                  <div className='skill_name'>Figma</div>
                  <div className='icon_skill'>
                    <FaFigma className="icon"/>
                  </div>
                </div>

                <div className='icon_container'>
                  <div className='skill_name'>Node.Js</div>
                  <div className='icon_skill'>
                  <FaNodeJs className="icon"/>
                  </div>
                </div>

                <div className='icon_container'>
                  <div className='skill_name'>Node.Js</div>
                  <div className='icon_skill'>
                  <FaNodeJs className="icon"/>
                  </div>
                </div>
                <div className='icon_container'>
                  <div className='skill_name'>Node.Js</div>
                  <div className='icon_skill'>
                  <FaNodeJs className="icon"/>
                  </div>
                </div>

              </div>
            </div>
          }

          {activeSection === 'about' && 
             <div className='content-container'>
              <h2>About me</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br /> Scelerisque consequat, faucibus et, et.</p>
              <div className='personal_data'>
                <div>Name <span>Adem Ben Hassine</span></div>
                <div>Phone <span>(+216) 54 014 243</span></div>
                <div>Experience <span>1+ Year</span></div>
                <div>Location <span>Sousse</span></div>
                <div>Nationality <span>Tunisian</span></div>
                <div>Email <span>Adem.bnHassine@gmail.com</span></div>
                <div>Freelance <span>Available</span></div>
                <div>Languages <span>English, French</span></div>
              </div>
             
             </div>
          }

        </div>
    </div>
  )
}
