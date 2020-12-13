import React from "react";
import Card from "react-bootstrap/Card";
import Skeleton from "react-loading-skeleton";
import * as Icon from 'react-bootstrap-icons';

function SkillsCard({ name, index }) {

  let icon = null;

  switch (index) {
    case 0:
      icon = <Icon.Globe2 />
      break;
    case 1:
      icon = <Icon.LayersFill />
      break;
    case 2:
      icon = <Icon.FileBarGraphFill />
      break;
    case 3:
      icon = <Icon.BarChartLineFill />
      break;
    case 4:
      icon = <Icon.CpuFill />
      break;
    case 5:
      icon = <Icon.Joystick />
      break;
    case 6:
      icon = <Icon.VectorPen />
      break;
  }

  return (
    <Card style={{width:"12em"}} className="card shadow p-3 m-4 bg-white rounded">
      <Card.Body>
        <Card.Title style={{textAlign: "center"}}as="h5">{name || <Skeleton />} </Card.Title>
        <br></br>
        <h2 style={{marginTop: "-20%", textAlign: "center"}}>
          {icon}
        </h2>
      </Card.Body>
    </Card>
  );
}

export default SkillsCard;
