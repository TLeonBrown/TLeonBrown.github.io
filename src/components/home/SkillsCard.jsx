import React from "react";
import Card from "react-bootstrap/Card";
import Skeleton from "react-loading-skeleton";

function SkillsCard({ name, value }) {
  return (
    <Card style={{width:"12em"}} className="card shadow p-3 m-4 bg-white rounded">
      <Card.Body>
        <Card.Title style={{textAlign: "center"}}as="h5">{name || <Skeleton />} </Card.Title>
        {/* <hr /> */}
      </Card.Body>
    </Card>
  );
}

export default SkillsCard;
