import { fn } from 'jquery';
import React, { Component } from 'react';

export default class EventStateCC extends Component {
  testProperty = 'Test';
  counter = 0;

  constructor() {
    super();
    // console.log(this)
    this.clickHandlerNormalFunction = this.clickHandlerNormalFunction.bind(this);

    // console.log(this.state)
    this.state = {
      counter: 0,
      course: {
        name: 'ReactJS',
        duration: 40,
        cureentSession: 3,
        teacher: {
          firstName: 'Hamid',
          lastName: 'Izadi Matin',
        },
      },
    };
  }

  clickHandlerNormalFunction(e) {
    console.log('Event 3');
    console.log(e);
    // console.log(this.testProperty) raise error
    console.log(this);
  }

  clickHandlerArrowFunction = (e) => {
    console.log('Event 4');
    console.log(e);
    console.log(this);
    console.log(this.testProperty);
  };

  /*****************/
  incrementHandlerForceUpte = () => {
    this.counter++;
    this.forceUpdate();
    console.log(this.counter);
  };

  decrementHandlerForceUpdate = () => {
    this.counter--;
    this.forceUpdate();
    console.log(this.counter);
  };

  incrementHandlerState = () => {
    this.setState({ counter: this.state.counter + 1 });
    console.log(this.state);
  };

  decrementHandlerState = () => {
    this.setState({ counter: this.state.counter - 1 });
  };

  addSessionHandler = () => {
    this.setState({
      course: { ...this.state.course, cureentSession: this.state.course.cureentSession + 1 },
    });
  };

  updateTeacherNameHandlre = () => {
    const newcourse = { ...this.state.course };
    newcourse.duration = 50;
    newcourse.teacher.firstName = 'Hamid Reza';

    this.setState({
      course: newcourse,
    });
  };

  render() {
    return (
      <div>
        <h2>Event and State In Class Components</h2>
        <hr />
        <button
          onClick={() => {
            console.log('Event 1');
            console.log(this.testProperty);
          }}
        >
          Event 1
        </button>

        <button
          onClick={(e) => {
            console.log('Event 2');
            console.log(e);
            console.log(this.testProperty);
            // console.log(`counter = ${this.counter}`)
          }}
        >
          Event 2 with event parameter
        </button>

        <button onClick={this.clickHandlerNormalFunction}>
          Event 3 with EventHandler Normal Function
        </button>

        <button onClick={this.clickHandlerArrowFunction}>
          Event 4 with EventHandler Arrow Function
        </button>

        <hr />
        <div style={{ textAlign: 'center', padding: '20px' }}>
          <p>Counter (forceUpdate): {this.counter}</p>
          <button onClick={this.incrementHandlerForceUpte}>+</button>
          <button onClick={this.decrementHandlerForceUpdate}>-</button>
          <hr />
          <p>Counter (state): {this.state.counter}</p>
          <button onClick={this.incrementHandlerState}>+</button>
          <button onClick={this.decrementHandlerState}>-</button>

          <hr />
          <h3>
            Course : {this.state.course.name}, duration: {this.state.course.duration}
          </h3>
          <p>Current Session: {this.state.course.cureentSession}</p>
          <p>
            Teacher: {this.state.course.teacher.firstName} {this.state.course.teacher.lastName}
          </p>
          <button onClick={this.addSessionHandler}>add session</button>
          <button onClick={this.updateTeacherNameHandlre}>Update Teacher Name</button>
        </div>
      </div>
    );
  }
}
