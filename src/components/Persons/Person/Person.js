import React, { Component } from "react";
// css module ./Person.module.css
import PersonClasses from "./Person.module.css";

// const person = (props) => {
//   console.log("[Person.js]  rendering..");

//   return (
//     <div className={PersonClasses.Person}>
//       <p onClick={props.click}>
//         I am {props.name} , i am {props.age} years old
//       </p>
//       <p>{props.children}</p>

//       <input type="text" onChange={props.changed} value={props.name} />
//     </div>
//   );
// };

// export default person;

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  componentDidMount() {
    this.inputElementRef.current.focus();
  }

  render() {
    console.log("[Person.js]  rendering..");

    return (
      <div className={PersonClasses.Person}>
        <p onClick={this.props.click}>
          I am {this.props.name} , i am {this.props.age} years old
        </p>
        <p>{this.props.children}</p>

        <input
          type="text"
          ref={this.inputElementRef}
          onChange={this.props.changed}
          value={this.props.name}
        />
      </div>
    );
  }
}

export default Person;
