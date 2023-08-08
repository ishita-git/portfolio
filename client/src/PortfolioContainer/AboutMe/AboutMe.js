import React,{useEffect} from 'react'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../utilities/ScrollService'
import Animations from '../../utilities/Animations'
import  './AboutMe.css';


export default function AboutMe(props) {
    let fadeInScreenHandler = (screen) => {
      if (screen.fadeInScreen !== props.id) return;
      Animations.animations.fadeInScreen(props.id);
    };

    const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
    
    const SCREEN_CONSTANTS = {
        description:"Web Developer with background knowledge of Node.js , SQL , along with a kack of building applications with utmost efficiency . Strong individual pusuing BTech in Computer Science , willing to be an asset for an organisation.",
        highlights:{
            bullets: [
                "Web and Frontend Developer",
                "React.js Developer",
                "Java Programming",
            ],
            heading: "Here are a few Highlights:"
        },
    };
    const renderHighlights = () => {
        return SCREEN_CONSTANTS.highlights.bullets.map((value, i) => (
          <div className="highlight" key={i}>
            <div className="highlight-blob"></div>
            <span>{value}</span>
          </div>
        ));
      };


      

      return (
        <div
          className="about-me-container screen-container fade-in"
          id={props.id || ""}
        >
          <div className="about-me-parent">
            <ScreenHeading title={"About Me"} subHeading={"Why Choose Me?"} />
            <div className="about-me-card">
              <div className="about-me-profile"></div>
              <div className="about-me-details">
             
                <span className="about-me-description">
                  {SCREEN_CONSTANTS.description}
                </span>
                <div className="about-me-highlights">
                  <div className="highlight-heading">
                    <span>{SCREEN_CONSTANTS.highlights.heading}</span>
                  </div>
                  {renderHighlights()}
                </div>
                <div className="about-me-options">
                  <button
                    className="btn primary-btn"
                    onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
                  >
                    {" "}
                    Contact Me{" "}
                  </button>
                  <a href="resume.pdf" download="resume.pdf">
                    <button className="btn highlighted-btn">Get Resume</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }