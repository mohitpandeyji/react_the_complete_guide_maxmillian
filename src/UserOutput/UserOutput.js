import React from "react";
import "./UserOutput.css";

const UserOutput = (props) => {
  return (
    <div className="Output">
      <p style={{ color: "green" }}>Good morning {props.username} !!</p>
      <p style={{ color: "orange" }}>Welcome to my learning path</p>
    </div>
  );
};

export default UserOutput;
