import React from "react";
// css module ./Person.module.css
import PersonClasses from "./Person.module.css";
import Validate from "../ValidationComponent/ValidationComponent";
import Radium from "radium";
// import styled from 'styled-components';

const person = (props) => {
  const style = {
    "@media (min-widt:500px)": { width: "450px" },
  };

  // const StyledP = styled.p`
  // color:${props => props.alt ? "yellow" : "black"};
  // background-color:lightblue;

  // &:hover {
  //   background-color:teal;
  //   color:black;
  // }
  //  `;
  // // tagged templte syntax ``
  // const bool= true;

  const rnd = Math.random();
  if(rnd > 0.7){
       throw new Error("Something went wrong!!")
  }

  return (
    <div className={PersonClasses.Person} style={style}>
      <p onClick={props.click}>
        I am {props.name} , i am {props.age} years old
      </p>
      {/* this is not the correct usage of styled-components because you've called styled inside
        another component.To resolve this only create new StyledComponents outside of any
         render method and function component. */}
      {/* <StyledP alt={bool}>This is my styled-component</StyledP>  */}
      <p>{props.children}</p>

      <input type="text" onChange={props.changed} value={props.name} />
      <Validate inputLength={props.name}></Validate>
    </div>
  );
};

export default Radium(person);
