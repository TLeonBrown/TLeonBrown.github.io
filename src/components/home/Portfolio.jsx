import React, { useState, useEffect, useCallback } from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";

const Portfolio = () => {
  return (
    <Jumbotron fluid className="bg-gray m-0" id="portfolio">
    <Container className="p-5 ">
      <h2 className="display-4 pb-5 text-center">
          Art Portfolio
      </h2>
      <div className="d-flex flex-wrap justify-content-center">
          <h5>Over the years, I have worked on several digital art projects as part of my Digital Arts minor.</h5>
      </div>
        
    </Container>
  </Jumbotron>
  );
};

export default Portfolio;
