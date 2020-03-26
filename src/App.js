import React, { Component } from 'react'
import './App.css';
//psuedocode: create a class for App
//this is the class for App that creates the color box
export default class App extends Component {
//psuedocode:make a constructor for the App class
constructor(props) {
  //psuedocode:call the super constructor for props
  super(props);
  //psuedocode:make a variable to hold color
  this.divColor='blue';
  //psuedocode:make the state variables with the color, toggle and counter
  this.state = {
    color: this.divColor,
    clickCounter: 0,
    isToggleOn: false
  }
}
onChange = (e) => {
  
}
  //psuedocode:render the colorbox with its click paragraph
  render() {
    return (
      <div className="App">
        <h1> Box color change .</h1>
        <div              className="colorBox"
        style={{backgroundColor: this.state.color}}
        onClick={this.onChange}
        >
        <p>Click Here</p>
        </div>
      </div>
    )
  }
}
