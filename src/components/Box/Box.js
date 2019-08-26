    
import React from "react";
import "./Box.css";

const Box = props => (
    <div className="box" onClick={() => props.clickCount(props.id)}>
      <div className="img-box">
        <img alt={props.name} src={props.image} />
      </div>
    </div>
  );
  
  export default Box;