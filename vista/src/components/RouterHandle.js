import React, { Component } from 'react';
import App from './App';
import {getLocation,getUser} from '../containers/User.js';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

class RouterHandle extends Component {
  constructor(props) {
    super(props);
    this.state = { spinerLoad: true, controller: "test" }
    

  }
  componentDidMount() {
    getLocation(function (response) {
      debugger
      if (response && response.data && response.data.d) {
        this.setState({ location: response.data.d })
      }
    }.bind(this));
    getUser((response) => {
      debugger
      if (response && response.data && response.data.d) {
        this.setState({ user: response.data.d })
      }
    });
  }

  Handle(e, i) {
    debugger
    this
    return (
      <div>
        <h2>User:</h2>
      </div>
    )
  }
  render() {

    return (
      <Router>
        <Switch>
        <Route path="/" component={this.Handle.bind(this)} />
          <Route path="/about/:de" render={this.Handle.bind(this)} />
          <Route path="/company" component={this.Handle.bind(this)} />
          <Route path="/admin/:user" component={this.Handle.bind(this)} />
        </Switch>
      </Router>
    );
  }
}

export default RouterHandle;
