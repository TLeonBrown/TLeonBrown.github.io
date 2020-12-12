import React from "react";
import { Jumbotron, Container } from "react-bootstrap";
import SkillsCard from "./SkillsCard";


function Skills({ heading, skills }) {
  return (
    <Jumbotron fluid className="bg-white m-0" id="skills">
      <Container className="p-5 ">
        <h2 className="display-4 pb-5 text-center">
          {heading}
        </h2>

        <div className="d-flex flex-wrap justify-content-center">
          {skills.map((skill, index) => (
            <SkillsCard key={`${skill}-${index}`} name={skill} index={index} />
          ))}
        </div>
          
      </Container>
    </Jumbotron>
  );
}

export default Skills;
