import React from "react";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";

function PortfolioCard({ name, pdf, artist, dimension, medium, extra, statement }) {

  const mouseEnter = () => {
    document.getElementById(name).style.color = "blue";
  }

  const mouseLeave = () => {
    document.getElementById(name).style.color = "black";
  }

  return (
    <Card style={{width:"30em", height: "15em"}} className="card shadow p-2 m-3 bg-white rounded">
      <Card.Body>
        <Nav.Link
            className="nav-link lead"
            href={pdf}
            target="_blank"
            rel="noreferrer noopener"
          >
          <Card.Title id={name} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} style={{color: "black", textDecoration: "underline", fontWeight: "normal"}} as="h4">{name} </Card.Title>
        </Nav.Link>
        <div style={{marginLeft: "6%"}}>
          <div style={{color: "black", fontStyle: "italic"}}>{artist}</div>
          <div style={{color: "black", fontStyle: "italic"}}>{dimension}</div>
          <div style={{color: "black", fontStyle: "italic"}}>{medium}</div>
          <div style={{color: "black", fontWeight: "bold"}}>{(extra === "" ? null : extra)}</div>
        </div>
        <br></br>
        <br style={{display: (extra === "" ? "block" : "none")}}></br>
        <Nav.Link 
            href={(statement === null) ? null : statement}
            target="_blank"
            rel="noreferrer noopener"
          >
          <p style={{marginTop: "-3%", textDecoration: "underline"}}>{(statement === null) ? "" : "Artist Statement"}</p>
        </Nav.Link>
           
      </Card.Body>
    </Card>
  );
}

export default PortfolioCard;
