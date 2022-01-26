import React from 'react'
import Typical from 'react-typical'
import './Profile.css';
import ScrollService from '../../../utilities/ScrollService';

export default function Profile(){

    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                        <div className='colz-icon'>

                        <a href='https://www.facebook.com/ishita.amod/'>
                            <i className='fa fa-facebook-square'></i>
                        </a>
                        {" "}
                        <a href='https://github.com/ishita-git'>
                            <i class="fa fa-github-square"></i>
                        </a>
                        {" "}
                        <a href='https://www.instagram.com/__ishhh__ta__/'>
                            <i className='fa fa-instagram'></i>
                        </a>
                        {" "}
                        <a href='https://www.linkedin.com/in/ishita19sep2001/'>
                            <i class="fa fa-linkedin-square"></i>
                        </a>
                        {" "}
                        <a href='https://twitter.com/amod_ishita'>
                            <i className='fa fa-twitter'></i>
                        </a>
                        </div> 
                    </div>
                <div className='profile-details-name'>
                     <span className='primary-text'>
                        
                        {" "}
                        Hello, I'M <span className='highlighted-text'>Ishita</span>
                     </span>
                </div>
                <div className='profile-details-role'>
                    <span className='primary-text'>
                        {" "}
                        <h1>
                          {" "}
                          <Typical
                          loop={Infinity}
                          steps={[
                              "Ethusiastic Dev 👨‍💻 ",
                              1000,
                              "Android Developer 📱",
                              1000,
                              "Java Developer 💻",
                              1000,
                              "React Dev⚛️  ",
                              1000,
                              "Website Dev 💻 ",
                              1000,
                          ]}
                          />
                          
                        </h1>
                    </span>

                    <span className='profile-role-tagline'>
                    Knack of building applications with front and back end operations.
                    </span>
                </div>
                <div className='profile-options'>
                        <button className='btn primary-btn'
                        onClick={() => ScrollService.scrollHandler.scrollToHireMe()}>
                            {" "}
                            Contact Me{" "}
                        </button>
                        <a href='resume.pdf' download='resume.pdf'>
                            <button className='btn highlighted-btn'>
                               Get Resume
                            </button>
                        </a>
                </div>
                
                </div>
                <div className='profile-picture'>
                    <div className='profile-picture-background'></div>

                </div>
            </div>
        </div>



    )


}

