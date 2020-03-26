import React, { Component } from 'react'

import './App.css';

export default class App extends Component {

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
