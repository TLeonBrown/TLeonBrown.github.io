import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import PortfolioCard from "./PortfolioCard";
import Nav from "react-bootstrap/Nav";

const Portfolio = ({ heading, projects, pdfs, artists, dimensions, mediums }) => {

  return (
    <Jumbotron fluid className="bg-gray m-0" id="portfolio">
    <Container className="p-5">
      <h2 className="display-4 pb-5 text-center">
        {heading}
      </h2>

      <h5 className="text-center">Over the years, I have worked on several projects as part of my Digital Arts minor.</h5>
      <h6 className="text-center">
        These projects were made in a variety of digital software, including Adobe Illustrator, Adobe Photoshop, Blender, and the Unreal Engine.
      </h6>
      <br></br>

      <div className="d-flex flex-wrap justify-content-center">
          {projects.map((project, index) => (
            <PortfolioCard 
              key={`${project}-${index}`} 
              name={project} 
              pdf={pdfs[index]} 
              artist={artists[index]}
              dimension={dimensions[index]}
              medium={mediums[index]}
            />
          ))}
        </div>
          <br></br>

    </Container>
  </Jumbotron>
  );
};

export default Portfolio;
