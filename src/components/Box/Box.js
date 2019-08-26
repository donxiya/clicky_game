    
import React from "react";
import "./Box.css";

const Box = props => (
    <div className="box" onClick={() => props.clickCount(props.id)}>
      <div className="img-box">
        <img alt={props.name} src={require(`../assets/images/1.jpg`)} />
      </div>
    </div>
  );
  
  export default Box;