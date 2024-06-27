import {React, useState, useEffect} from 'react'
import "./HomeStyle.css"
import photo from "../../assets/adem.png"
import { HiArrowDownTray } from "react-icons/hi2";
import { FaGithub,FaFacebook, FaLinkedinIn } from "react-icons/fa";
import axios from 'axios';
import CV from "../../assets/CV.pdf"

const Home = () => {
  const [commit, setCommit] = useState(0);
  const [totalCommits, setTotalCommits] = useState(0);
  const accessToken  = process.env.REACT_APP_GITHUB_ACCESS_TOKEN;
  
  useEffect(() => {
    const fetchCommitCount = async () => {
      try {
        const headers = {
          Authorization: `Bearer ${accessToken}`,
          Accept: 'application/vnd.github.v3+json',
        };

        // Fetch list of repositories
        const reposResponse = await axios.get('https://api.github.com/user/repos', { headers });
        const repos = reposResponse.data;

        let totalCount = 0;

        // Iterate through repositories and count commits
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
    const targetCommit = totalCommits;
    let currentCommit = 0;
    const interval = setInterval(() => {
      if (currentCommit < targetCommit) {
        currentCommit++;
        setCommit(currentCommit);
      } else {
        clearInterval(interval);
      }
    }, 30); 
  }, []);

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
    console.log(totalCommits)
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
            <div className='social_icon' onClick={openGitHub}> <FaGithub /> </div>
            <div className='social_icon' onClick={openLinkedIn}> <FaLinkedinIn /> </div>
            <div className='social_icon' onClick={openFacebook}> <FaFacebook /> </div>
          </div>
        </div>
        
        <div class="card">
          <div class="bg"><img src={photo} alt=""/></div>
          <div class="blob"></div>
        </div>

      </div>

      <div className='status'>
        <div className='status_experience'>
          <h1>1</h1>
          <p>Years of <br/>experience</p>
        </div>

        <div className='status_project'>
          <h1>2</h1>
          <p>Projects <br/> completed</p>
        </div>

        <div className='status_technology'>
          <h1>3</h1>
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