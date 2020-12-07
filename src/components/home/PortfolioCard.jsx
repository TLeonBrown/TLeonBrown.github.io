import React from "react";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";

function PortfolioCard({ name, pdf }) {
  return (
    <Card style={{width:"30em", height: "15em"}} className="card shadow p-2 m-3 bg-white rounded">
      <Card.Body>
        <Nav.Link
            className="nav-link lead"
            href={pdf}
            target="_blank"
            rel="noreferrer noopener"
          >
           <Card.Title style={{color: "black", fontStyle: "italic"}} as="h4">{name} </Card.Title>
          </Nav.Link>
      </Card.Body>
    </Card>
  );
}

export default PortfolioCard;
