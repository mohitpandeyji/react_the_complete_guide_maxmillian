import React, { Component } from "react";
import "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";

/* CLASS BASED COMPONENTS WITH state and setState  */

class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App.js] Counstructor");
  }
  state = {
    person: [
      { id: "hgjgj", name: "Mohit", age: 23 },
      { id: "pgjh7", name: "Neeraj", age: 24 },
      { id: "gry54", name: "Ravi", age: 27 },
    ],
    showPersons: false,
  };

  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] getDerivedStateFromProps method", props);
    return state;
  }

  componentDidMount() {
    console.log("[App.js] componentDidMount method");
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log("[App.js] shouldComponentUpdate method");
    return true;
  }

  componentDidUpdate(){
    console.log("[App.js] componentDidUpdate method");

  }

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
    this.setState({ showPersons: !this.state.showPersons });
  };

  render() {
    console.log(" [App.js] render method called");

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            person={this.state.person}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
          />
        </div>
      );
    }

    const personsLength = this.state.person.length;

    return (
      <div className="App">
        <Cockpit
          title={this.props.appTitle}
          personsLength={personsLength}
          toggle={this.togglePersonHandler}
          showPerson={this.state.showPersons}
        />
        {persons}
      </div>
    );
  }
}

export default App;
