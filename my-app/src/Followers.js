import React from "react"
import Card from "react-bootstrap/Card";


function Followers (props){

    return(
        <div>
            <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{props.nextprop.login}</Card.Title>
       
        </Card.Body>
      </Card>
        
        </div>
    )
}





export default Followers;