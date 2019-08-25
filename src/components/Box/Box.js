    
import React from "react";
import "./Box.css";

const Card = props => (
    <div className="box" onClick={() => props.clickCount(props.id)}>
      <div className="box-container">
        <img alt={props.name} src={props.image} />
      </div>
    </div>
  );
  
  export default Box;