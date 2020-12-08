import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import {
  navBar,
  mainBody,
  about,
  repos,
  manualProjects,
  leadership,
  skills,
  portfolio,
  getInTouch,
  contactInfo
} from "./editable-stuff/config.js";
import MainBody from "./components/home/MainBody";
import AboutMe from "./components/home/AboutMe";
import Project from "./components/home/Project";
import Portfolio from "./components/home/Portfolio";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Skills from "./components/home/Skills";
import GetInTouch from "./components/home/GetInTouch.jsx";
import Leadership from "./components/home/Leadership.jsx";

const Home = React.forwardRef((props, ref) => {
  return (
    <>
      <MainBody
        gradient={mainBody.gradientColors}
        title={`${mainBody.firstName} ${mainBody.middleName} ${mainBody.lastName}`}
        message={mainBody.message}
        icons={mainBody.icons}
        ref={ref}
      />
      {about.show && (
        <AboutMe
          heading={about.heading}
          message={about.message}
          link={about.imageLink}
          imgSize={about.imageSize}
          resume={about.resume}
          contactInfo={contactInfo}
        />
      )}
      {repos.show && (
        <Project
          heading={repos.heading}
          username={repos.gitHubUsername}
          length={repos.reposLength}
          specfic={repos.specificRepos}
          manualProjects={manualProjects}
        />
      )}
      {leadership.show && (
        <Leadership
          heading={leadership.heading}
          message={leadership.message}
          img={leadership.images}
          imageSize={leadership.imageSize}
        />
      )}
      {skills.show && (
        <Skills
          heading={skills.heading}
          skills={skills.skills}
        />
      )}
    </>
  );
});

const App = () => {
  const titleRef = React.useRef();

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL + "/"}>
      {navBar.show && (window.location.pathname !== "/portfolio") && <Navbar ref={titleRef} />}
      {console.log(window.location.pathname)}
      <Route path="/" exact component={() => <Home ref={titleRef} />} />
      <Route path="/portfolio" exact component={() => 
      <Portfolio 
        ref={titleRef}
        heading={portfolio.heading}
        projects={portfolio.projects}
        pdfs={portfolio.pdfs}
        artists={portfolio.artists}
        dimensions={portfolio.dimensions}
        mediums={portfolio.mediums}
      />
      }/>
      <Footer>
        {getInTouch.show && (
          <GetInTouch
            heading={getInTouch.heading}
            message={getInTouch.message}
            email={contactInfo.email}
            phone={contactInfo.phone}
          />
        )}
      </Footer>
    </BrowserRouter>
  );
};

export default App;
