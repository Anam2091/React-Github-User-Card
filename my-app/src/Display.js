import React from "react";
import Card from "react-bootstrap/Card";

function Display(props) {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{props.passingprops.login}</Card.Title>
          <Card.Text>{props.passingprops.followers}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Display;
