import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

export default function  Resume (props) {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    const ResumeHeading = (props) => {
      return (
        <div className="resume-heading">
          <div className="resume-main-heading">
            <div className="heading-bullet"></div>
            <span>{props.heading ? props.heading : ""}</span>
            {props.fromDate && props.toDate ? (
              <div className="heading-date">
                {props.fromDate + "-" + props.toDate}
              </div>
            ) : (
              <div></div>
            )}
          </div>
          <div className="resume-sub-heading">
            <span>{props.subHeading ? props.subHeading : ""}</span>
          </div>
          <div className="resume-heading-description">
            <span>{props.description ? props.description : ""}</span>
          </div>
        </div>
      );
    };

  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  const programmingSkillsDetails = [
    { skill: "React.js", ratingPercentage: 85 },
    { skill: "HTML", ratingPercentage: 90 },
    { skill: "SCSS", ratingPercentage: 80 },
    { skill: "SQL", ratingPercentage: 70 },
    { skill: "CSS", ratingPercentage: 80 },
    { skill: "Java Programming", ratingPercentage: 75 },
    { skill: "Redux", ratingPercentage: 70 },
    { skill: "Javascript", ratingPercentage: 80 },
    { skill: "Git", ratingPercentage: 80 },
  ];

  const projectsDetails = [
    {
      title: "Reconciliation Dasboard",
      duration: { fromDate: "2023", toDate: "2023" },
      description:
        "A dashboard used to display the reconciliation report of each dealer for each month and the option to download and send the report.",
      subHeading: "Technologies Used: React JS, Redux , Javascript , SCSS, Antd",
    },
    {
      title: "Admin Dashboard",
      duration: { fromDate: "2023", toDate: "Present" },
      description:
        "A Personal Portfolio website to showcase all my details and projects at one place.",
      subHeading: "Technologies Used: React JS, Charts , Context-API, Material-UI",
    },
    {
      title: "Swiggy Clone",
      duration: { fromDate: "2023", toDate: "2023" },
      description:
        "Built a food ordering app like Swiggy.",
      subHeading: "Technologies Used: React JS, CSS, HTML, Material-UI",
    },
   
    
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"DIT University , Dehradun"}
        subHeading={"BTech in Computer Science with 8.5 SGPA"}
        fromDate={"2019"}
        toDate={"2023"}
      />

      <ResumeHeading
        heading={"R.A.N Public School, Rudrapur"}
        subHeading={"12TH CBSE Board with 89.8%"}
        fromDate={"2018"}
        toDate={"2019"}
      />
      <ResumeHeading
        heading={"R.A.N Public School, Rudrapur "}
        subHeading={"10TH CBSE Board with 10 CGPA"}
        fromDate={"2016"}
        toDate={"2017"}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"Tekion Corp"}
          subHeading={"Associate Software Engineer Intern"}
          fromDate={"Jan 2023"}
          toDate={"July 2023"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            Worked as a Frontend Developer on the project - Reconciliation Dashboard, which is a centralized tool that provides an overview of the reconciliation process within an organization.
          
          </span>
        </div>
        <div className="experience-description">
        
          <span className="resume-description-text">
            -  Technologies used - React.js, Redux, SCSS , Javascript
          </span>
          <br />
        </div>
        <br/>
        

        <ResumeHeading
          heading={"Green Lights Studios"}
          subHeading={"Frontend Developer"}
          fromDate={"Jan 2022"}
          toDate={"March 2022"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
           Contributed to the design and development of the website for a company operating in the cryptocurrency industry
          </span>
          <br/>
          <span className="resume-description-text">
            -  Technologies used - React.js, CSS, Javascript, HTML , Figma , Storybook.
          </span>
        </div>
       
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Gaining new skills"
        description="I am always eager to learn new skills and help myself grow."
      />
      <ResumeHeading
        heading="Writing quotes"
        description="I like to listen to write one-liners and also contributed in various Anthologies."
      />
      <ResumeHeading
        heading="Playing TableTennis and Badminton"
        description="As outdoor games are necessary for staying fit, i like playing them. "
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
        
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };


  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);


 

  return (
    <div
      className="resume-container screen-container fade-in" id={props.id || ""} >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"> </div>
              <div className="bullets">{getBullets()}</div>

            </div>

          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>

        </div>
      </div>
    </div>
  );
}