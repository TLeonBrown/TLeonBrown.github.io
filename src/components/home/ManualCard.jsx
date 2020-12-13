import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Skeleton from "react-loading-skeleton";
import * as Icon from 'react-bootstrap-icons';

function ManualCard({ value, index }) {
  const {
    name,
    description,
    url,
    classId,
    date
  } = value;

  let icon = null;

  switch (index) {
    case 0:
      icon = <Icon.MusicNoteBeamed />
      break;
    case 1:
      icon = <Icon.PieChartFill />
      break;
    case 2:
      icon = <Icon.DisplayFill />
      break;
    case 3:
      icon = <Icon.Controller />
      break;
  }
  
  return (
    <Col md={6}>
      <Card className="card shadow-lg p-3 mb-5 bg-white rounded">
        <Card.Body>
          <Card.Title as="h5">{name || <Skeleton />}  {icon}</Card.Title>
          <Card.Text>{description || <Skeleton count={3} />} </Card.Text>
          {url ? (
            <a
              href={url}
              target=" _blank"
              className="btn btn-outline-secondary"
            >
              <span className="text-dark card-link">
                <i className="fab fa-github" /> Repo
              </span>
            </a>
          ) : (
            <Skeleton count={2} />
          )}
          <hr />
          {value ? (
            <p className="card-text">
            <small className="text-muted">From {classId}, {date}</small>
          </p>
          ) : (
            <Skeleton />
          )}
        </Card.Body>
      </Card>
    </Col>
  );
}

export default ManualCard;