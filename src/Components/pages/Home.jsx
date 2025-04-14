import React, {useContext} from "react";
import { AuthContext } from "../../main"
import { Navigate } from "react-router-dom";
import { IoDownloadOutline } from "react-icons/io5";
import profile from '/images/profile.jpeg'
import jsimg from '../../../public/images/jsimg.png'
import htmlcss from '../../../public/images/htmlcss.png'
import reactimg from '../../../public/images/reactimg.png'
import reduximg from '../../../public/images/reduximg.png'
import mongodbimg from '../../../public/images/mongodbimg.png'
import nodeimg from '../../../public/images/nodeimg.jpg'
;


const Home = () => {

  return (
    <>
      
      <section className="about-section" >
        <div className="profile-main">
          <div className="profile-about">
            <h2 className="profile-heading">About Me</h2>
            <br />
            <p className="profile-text">
              Hello! I'm Paras, a passionate and dedicated 
            </p>
            <p className="profile-text">
            MERN stack web developer. With a keen interest 
            </p>
            <p className="profile-text">
            in building dynamic and responsive web applications,
            </p>
            <p className="profile-text">
            I have honed my skills in various modern web technologies. 
            </p>
            <p className="profile-text">
            My journey into web development has equipped me with a 
            </p>
            <p className="profile-text">
            robust understanding of both front-end and back-end development,
            </p>
            <p className="profile-text">
            enabling me to create seamless user experiences.
            </p>
               
          </div>
          <div className="profile-icon">
            <img src={profile} alt="profile" />
          </div>
        </div>
      </section>
      <section className="skills-section">
      <div className="skills-container">
          <h3 className="skills-title">Skills and Technologies</h3>
          <div className="skills-box">
            <div className="box box-1">
            <img src={htmlcss} alt="" />
            </div>
            <div className="box box-2">
            <img src={jsimg} alt="" />
            </div>
            <div className="box box-3">
            <img src={reactimg} alt="" />
            </div>
            <div className="box box-4">
            <img src={reduximg} alt="" />
            </div>
            <div className="box box-5">
            <img src={nodeimg} alt="" />
            </div>
            <div className="box box-6">
            <img src={mongodbimg} alt="" />
            </div>
          </div>
        </div>
        <div className="resume">
          <span><IoDownloadOutline />
            <a href="Paras_Pardhi_Mern_resume.pdf" download="Paras_Pardhi_Mern_resume.pdf">Download Resume</a>
          </span>
        </div>
      </section>

    </>
  );
};

export default Home;
