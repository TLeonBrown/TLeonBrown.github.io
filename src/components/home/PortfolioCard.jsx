import React from "react";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";

function PortfolioCard({ name, pdf, artist, dimension, medium }) {
  return (
    <Card style={{width:"30em", height: "15em"}} className="card shadow p-2 m-3 bg-white rounded">
      <Card.Body>
        <Nav.Link
            className="nav-link lead"
            href={pdf}
            target="_blank"
            rel="noreferrer noopener"
          >
          <Card.Title style={{color: "black"}} as="h4">{name} </Card.Title>
        </Nav.Link>
        <div style={{marginLeft: "6%"}}>
          <div style={{color: "black", fontStyle: "italic"}}>{artist}</div>
          <div style={{color: "black", fontStyle: "italic"}}>{dimension}</div>
          <div style={{color: "black", fontStyle: "italic"}}>{medium}</div>
        </div>
        <br></br>
        <Nav.Link>
          <p style={{marginTop: "-3%", textDecoration: "underline"}}>Artist Statement</p>
        </Nav.Link>
           
      </Card.Body>
    </Card>
  );
}

export default PortfolioCard;
