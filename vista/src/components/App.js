import React, { Component } from 'react';
import logo from '../img/logo.svg';
import '../styles/App.css';


class RouterHandle extends Component {
  constructor(props) {
    super(props);
    this.state = {spinerLoad:true,controller:"test"}
    debugger;
    this;
    

}
componentWillReceiveProps(newProps){
  debugger;
  this;
}
componentDidMount() {
  debugger;
  this;

}
  render() {
    debugger;
    this;
    
    return (
      <div className="App">
        
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default RouterHandle;
