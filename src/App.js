import React, { Component } from "react";
// import { useState } from "react";
import Radium, { StyleRoot } from "radium"; //StyleRoot for media query
import "./App.css";
import Person from "./Person/Person";
// import UserInput from "./UserInput/UserInput";
// import UserOutput from "./UserOutput/UserOutput";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";

// assignment 1

// class App extends Component{

//   state ={
//     username :"mayank"
//   }
//   inputChangedHandler = (event) => {
//     this.setState({username: event.target.value})

//   }

//   render(){
//     return (
//       <div className="App">
//         <UserInput change={this.inputChangedHandler} username="username"></UserInput>
//         <UserOutput username={this.state.username} ></UserOutput>
//         <UserOutput username="Ajay"></UserOutput>
//         <UserOutput username="Vijay"></UserOutput>
//       </div>
//     )
//   }
// }

// export default App;

/* CLASS BASED COMPONENTS WITH state and setState  */

class App extends Component {
  state = {
    person: [
      { id: "hgjgj", name: "Mohit", age: 23 },
      { id: "pgjh7", name: "Neeraj", age: 24 },
      { id: "gry54", name: "Ravi", age: 27 },
    ],
    showPersons: false,
  };

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.person;

    // there is a flaw in this approach in javascript objects and arrays are reference types
    // always update state in immutable fashion ,so without mutating originl state first
    // so create new object use either spread operator or .slice
    // const persons = this.state.person.slice();
    const persons = [...this.state.person];

    persons.splice(personIndex, 1);

    this.setState({ person: persons });
  };

  switchNameHandler = (newName) => {
    // console.log("Button Was Clicked !!");
    //   Dont do this :  Do not mutate state directly. Use setState()  react/no-direct-mutation-state
    // this.state.person[0].name="Mohit Pandey";
    this.setState({
      person: [
        { name: newName, age: 23 },
        { name: "Neeraj Upadhayay", age: 24 },
        { name: "Ravi Pandey", age: 27 },
      ],
    });
  };

  nameChangedHandler = (event, id) => {
    console.log(id);
    const personIndex = this.state.person.findIndex((p) => {
      return p.id === id;
    });
    const person = { ...this.state.person[personIndex] };
    // or
    // const person = Object.assign({}, this.state.person[personIndex]);
    person.name = event.target.value;
    const persons = [...this.state.person];
    persons[personIndex] = person;
    this.setState({
      person: persons,
    });
  };

  togglePersonHandler = (prevState, props) => {
    console.log(prevState, prevState.showPersons);
    this.setState({ showPersons: !this.state.showPersons });
  };

  render() {
    console.log("render called");
    const personDetail = this.state.person.map((item, index) => {
      return (
        //higher order component that wraps code that might fail
        <ErrorBoundary  key={item.id}> 
        <Person
         
          name={item.name}
          age={item.age}
          click={() => this.deletePersonHandler(index)}
          changed={(event) => this.nameChangedHandler(event, item.id)}
        />
        </ErrorBoundary>
      );
    });

    const style = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "1px solid green",
      padding: "8px",
      cusror: "pointer",
      ":hover": { backgroundColor: "lightgreen", color: "black" }, //hover pseudo selector using radium library
    };
    let person = null;

    if (this.state.showPersons) {
      person = <div>{personDetail}</div>;
      style.backgroundColor = "red";
      style[":hover"] = { backgroundColor: "pink", color: "black" };
    }

    const personsLength = this.state.person.length;
    const classes = [];
    if (personsLength > 1) {
      classes.push("teal");
    }
    if (personsLength > 2) {
      classes.pop("teal");
      classes.push("pink");

      classes.push("bold");
    }

    return (
      <StyleRoot>
        <div className="App">
          <h1>Hello , My react app </h1>

          <p className={classes.join(" ")}>Total {personsLength} persons</p>

          {/* <button 
         style={style}
         onClick={() => this.switchNameHandler("Pandey ji !!")}>Switch Name</button> */}
          <button style={style} onClick={this.togglePersonHandler}>
            {this.state.showPersons ? "Hide Persons" : "Show Persons"}
          </button>

          {/* JSX way of rendering content conditionally using ternary operator */}
          {/* { this.state.showPersons ?
           <div>
            <Person  
              name={this.state.person[0].name}  
              age={this.state.person[0].age}
               />
            <Person  
              name={this.state.person[1].name}  
              age={this.state.person[1].age}
              click={this.switchNameHandler.bind(this,"Mohit -- Pandey")}
              changed={this.nameChangedHandler}>My Hobies : Racing </Person>
            <Person  
              name={this.state.person[2].name}  
              age={this.state.person[2].age}
              />
          </div> : null
          } */}

          {/* Javascipt way of rendering content conditionally */}
          {person}

          {/* outputting list */}
          {/* {personDetail} */}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);

/* FUNCTIONAL COMPONENTS WITH REACT HOOK - useState() */
// const app = props => {
//   const [personState, setPersonsState] = useState({
//     person:[{name:"Mohit", age:23},
//     {name:"Neeraj" , age:24},
//     {name:"Ravi" , age:27}
//   ]
//   });

//   const  switchNameHandler =  () => {
//   // console.log("Button Was Clicked !!");
//   //   Dont do this :  Do not mutate state directly. Use setState()  react/no-direct-mutation-state
//   // this.state.person[0].name="Mohit Pandey";
//   setPersonsState({person:[{name:"Mohit Pandey", age:23},
//   {name:"Neeraj Upadhayay" , age:24},
//   {name:"Ravi Pandey" , age:27}
// ]})
//   }

//   console.log(personState);

//   return (
//     <div className="App">
//       <h1>Hello , My react app  </h1>
//       <button onClick={switchNameHandler}>Switch Name</button>
//       <Person
//         name={personState.person[0].name}
//         age={personState.person[0].age} />
//       <Person
//         name={personState.person[1].name}
//         age={personState.person[1].age} >My Hobies : Racing </Person>
//       <Person
//         name={personState.person[2].name}
//         age={personState.person[2].age} />
//     </div>
//   );

// }

// export default app;
