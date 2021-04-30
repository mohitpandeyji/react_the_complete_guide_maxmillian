import React, { Component } from "react";
import Person from "./Person/Person";

// const persons = (props) =>
//   props.person.map((item, index) => {
//     console.log("[Persons.js]  rendering..");
//     return (
//       <Person
//         key={item.id}
//         name={item.name}
//         age={item.age}
//         click={() => props.clicked(index)}
//         changed={(event) => props.changed(event, item.id)}
//       />
//     );
//   });

// export default persons;

class Persons extends Component {
  // static getDerivedStateFromProps(props, state) {
  //     console.log("[Persons.js] getDerivedStateFromProps lifecycle hook", props);
  //     return state;
  // }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(
      "[Persons.js] shouldComponentUpdate lifecycle hook",
      nextProps,
      nextState
    );
    return true;
  }

  getSnapshotBeforeUpdate(preProps, prevState) {
    console.log(
      "[Persons.js] getSnapshotBeforeUpdate lifecycle hook",
      preProps,
      prevState
    );
    // return null
    return { message: "Snapshot!" };
  }

  componentDidUpdate(preProps, prevState, snapshot) {
    console.log("[Persons.js] componentDidUpdate lifecycle hook", snapshot);
  }

  componentWillUnmount() {
    // using for cleanup
    console.log("[Persons.js] componentWillUnmount lifecycle hook");
  }

  render() {
    console.log("[Persons.js]  rendering..");

    return this.props.person.map((item, index) => {
      return (
        <Person
          key={item.id}
          name={item.name}
          age={item.age}
          click={() => this.props.clicked(index)}
          changed={(event) => this.props.changed(event, item.id)}
        />
      );
    });
  }
}
export default Persons;
