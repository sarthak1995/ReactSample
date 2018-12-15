import React, { Component } from 'react';
import Radium, { StyleRoot } from "radium";
import './App.css';
import Person from './Person/Person'

class App extends Component {

  state = {
    persons: [
      { id: 'asdf', name: 'Sarthak', age: '24' },
      { id: 'hgfhgf', name: 'MAx', age: '24' },
      { id: 'rtre', name: 'Payne', age: '24' },
      { id: 'ngfbnfg', name: 'Sarthak', age: '24' },
    ],
    other: "random",
    showData: false,
  }

  onClickHandler = (newName) => {
    console.log('Button was clicked');

    // DONT DO THIS
    // this.state.persons[0].name = "YO MAMA";

    this.setState({
      persons: [
        { id: 'asdf', name: newName, age: '24' },
        { id: 'hgfhgf', name: 'MAx', age: '24' },
        { id: 'rtre', name: 'Payne', age: '24' },
        { id: 'ngfbnfg', name: 'Sarthak', age: '24' },
      ]
    })

  }

  personDeleteHandler = (personIndex) => {
    let persons = [...this.state.persons];
    // let persons = this.state.persons;
    persons.splice(personIndex, 1);
    this.setState({ persons: persons })
  }

  nameChangedHandler = (event, id) => {

    let personIndex = this.state.persons.findIndex(p => p.id === id);
    let persons = [...this.state.persons];
    persons[personIndex].name = event.target.value;
    this.setState({ persons: persons });
    // this.setState({
    //   persons: [
    //     { name: event.target.value, age: '24' },
    //     { name: 'MAx', age: '24' },
    //     { name: 'Payne', age: '24' },
    //     { name: 'Sarthak', age: '21' },
    //   ]
    // })
  }

  toggleDataHandler = () => {
    const dataState = this.state.showData;
    this.setState({
      showData: !dataState,
    })
  }

  render() {

    let btnStyle = {
      backgroundColor: 'blue',
      color: 'white',
      ':hover': {
        backgroundColor: 'green'
      }
    }

    let persons = null;

    if (this.state.showData) {
      persons = (
        <div>
          {
            this.state.persons.map((person, index) => {
              return <Person
                key={person.id}
                click={() => this.personDeleteHandler(index)}
                name={person.name}
                age={person.age}
                changed={(event) => this.nameChangedHandler(event, person.id)}
              />
            })
          }
          {/* <Person name={this.state.persons[0].name} age={this.state.persons[0].age} click={() => this.onClickHandler('DEF')} changed={this.nameChangedHandler} />
          <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
          <Person name={this.state.persons[3].name} age={this.state.persons[3].age} /> */}
          <button key='btnClickMe' style={btnStyle} onClick={this.onClickHandler.bind(this, 'ABC')}>CLick me!</button>
        </div>
      );

      btnStyle.backgroundColor = "red";
      // btnStyle[':hover'].backgroundColor = "pink";
    }

    let classes = ['App'];

    if (this.state.persons.length < 3)
      classes.push('red');

    if (this.state.persons.length >= 3)
      classes.push('bold')

    return (
      // <StyleRoot>
        <div className={classes.join(' ')}>
          <h2>Hi! This is my FIrst react App</h2>
          <button style={btnStyle} onClick={this.toggleDataHandler} >TOGGLE PERSONS</button>
          {persons}

        </div>
     // </StyleRoot>
    );
  }
}

export default (App);
