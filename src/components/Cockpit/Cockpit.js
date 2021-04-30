import React, {useEffect} from "react";
import classes from "./Cockpit.module.css";
import Aux from "../../hoc/aux"

const Cockpit = (props) => {
  
  console.log("[Cockpit.js]  rendering..");
  
  useEffect(() => {
    console.log("[Cockpit.js]  useEffect called...");
    setTimeout(() => {
        alert("saved data to cloud");
    },1000);

    return(() => {console.log("[Cockpit.js] cleanup work in  useEffect ");});

  },[]);
//   array above are dependency on which condition it will rerun so give
//  empty array to run this for only the first time , else the props like [props.showPerson]

  let btnClass = "";

  if (props.showPerson) {
    btnClass = classes.Red;
  }
  const assignedClasses = [];
  if (props.personsLength > 1) {
    assignedClasses.push("teal");
  }
  if (props.personsLength > 2) {
    assignedClasses.pop("teal");
    assignedClasses.push("pink");

    assignedClasses.push("bold");
  }

  return (
    <Aux className={classes.Cockpit}>
      <h1>{props.title} </h1>
      <p className={assignedClasses.join(" ")}>
        Total {props.personsLength} persons
      </p>
      <button className={btnClass} onClick={props.toggle}>
        {props.showPersons ? "Hide Persons" : "Show Persons"}
      </button>
    </Aux>
  );
};
export default Cockpit;
