import { useState, useEffect} from 'react'
import "./HomeStyle.css"
import photo from "../../assets/adem.png"
import { HiArrowDownTray } from "react-icons/hi2";
import { FaGithub,FaFacebook, FaLinkedinIn } from "react-icons/fa";
import axios from 'axios';
import CV from "../../assets/CV.pdf"

const Home = () => {
  const [commit, setCommit] = useState(0);
  const [experience, setExperience] = useState(0);
  const [projects, setProjects] = useState(0);
  const [technology, setTechnology] = useState(0);
  const [totalCommits, setTotalCommits] = useState(0);
  const accessToken  = import.meta.env.VITE_GITHUB_ACCESS_TOKEN;
  
  useEffect(() => {
    const fetchCommitCount = async () => {
      try {
        const headers = {
          Authorization: `Bearer ${accessToken}`,
          Accept: 'application/vnd.github.v3+json',
        };

        const reposResponse = await axios.get('https://api.github.com/user/repos', { headers });
        const repos = reposResponse.data;

        let totalCount = 0;

        for (const repo of repos) {
          const commitsResponse = await axios.get(`https://api.github.com/repos/${repo.full_name}/commits`, { headers });
          const commits = commitsResponse.data;
          totalCount += commits.length;
        }

        setTotalCommits(totalCount);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchCommitCount();
  }, [accessToken]);

  useEffect(() => {
    const targetCommit = 129;
    let currentCommit = 0;

    const interval = setInterval(() => {
      if (currentCommit < targetCommit) {
        currentCommit++;
        setCommit(currentCommit);
      } else {
        clearInterval(interval);
      }
    }, 30); 
  }, [totalCommits]);

  useEffect(() => {
    const targetExperience = 1;
    const targetProjects = 2;
    const targetTechnology = 3;

    const interval = setInterval(() => {
      setExperience((currentExperience) => {
        if (currentExperience < targetExperience) {
          return currentExperience + 1;
        }
        return currentExperience;
      });

      setProjects((currentProjects) => {
        if (currentProjects < targetProjects) {
          return currentProjects + 1;
        }
        return currentProjects;
      });

      setTechnology((currentTechnology) => {
        if (currentTechnology < targetTechnology) {
          return currentTechnology + 1;
        }
        return currentTechnology;
      });

      if (experience >= targetExperience && projects >= targetProjects && technology >= targetTechnology) {
        clearInterval(interval);
      }
    }, 300);

    return () => clearInterval(interval);
  }, [experience, projects, technology]);

  const handleDownloadCV = () => {
    const downloadUrl = CV;

    fetch(downloadUrl) 
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'cv.pdf'); 
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
      })
      .catch(error => console.error('Error downloading the file:', error));
  };

  const openLinkedIn = () => {
    const linkedinUrl = "https://www.linkedin.com/in/adam-ben-hassine-8b8644245/";
    window.open(linkedinUrl, "_blank");
  };

  const openGitHub = () => {
    const github = "https://github.com/AdamBhs";
    window.open(github, "_blank");
  };

  const openFacebook = () => {
    const facebook = "https://www.facebook.com/profile.php?id=61561473025708";
    window.open(facebook, "_blank");
  };

  return (
    <div className='home-container'>
      <div className='profil'>
        <div className='present'>
          <h4 className='present_specialty'>Software Developer</h4>

          <div className='present_name'>Hello I'm <br />
            <span>Adem Ben Hassine</span>
          </div>

          <p>I excel at crafting elegant digital experiences and I am proficient 
            in various programming Languages and technologies.
          </p>

          <div className='present_social'>
            <div className='btn_cv' onClick={handleDownloadCV}>DOWNLOAD CV <HiArrowDownTray className='install_icon'/></div>
            <div className="social_icons">
              <div className='social_icon' onClick={openGitHub}> <FaGithub /> </div>
              <div className='social_icon' onClick={openLinkedIn}> <FaLinkedinIn /> </div>
              <div className='social_icon' onClick={openFacebook}> <FaFacebook /> </div>
            </div>
          </div>
        </div>
        
        <div className="card">
          <div className="bg"><img src={photo} alt=""/></div>
          <div className="blob"></div>
        </div>

      </div>

      <div className='status'>
        <div className='status_experience'>
          <h1>{experience}</h1>
          <p>Years of <br/>experience</p>
        </div>

        <div className='status_project'>
          <h1>{projects}</h1>
          <p>Projects <br/> completed</p>
        </div>

        <div className='status_technology'>
          <h1>{technology}</h1>
          <p>Technologies <br /> mastered</p>
        </div>

        <div className='status_commits'>
          <h1>{commit}</h1>
          <p>Code <br/> commits</p>
        </div>
      </div>
    </div>
  )
}

export default Home;