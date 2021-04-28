import React from "react";
const validation = (props) => {
  return (
    <div>
      {props.inputLength.length > 10 ? (
        <p>Text too Long </p>
      ) : (
        <p>Text to small</p>
      )}
    </div>
  );
};
export default validation;
