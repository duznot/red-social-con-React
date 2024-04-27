import React, { Component } from 'react';
import firebase from './firebase/firebase';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Navbarprofile from './components/Navbarprofile';
import Login from './components/Login';
import Register from './components/Register';

class App extends Component {
  constructor(props, state) {
    super(props, state)
    this.state = { logged: false};
  }

  componentDidMount() {
    console.log('componentDidMount()')
    this.listener();
  }
  
  listener = () => {
    firebase.auth().onAuthStateChanged((logged) => {
      logged ? this.setState({ logged: true }) : this.setState({ logged: false });
    });
  }

  render() {
    console.log('render()')

    if (this.state.logged) {
      return (
          <Navbarprofile/>  
      );
    } else {

        return (
          <Switch>
            <div className="Navigation">
              <Route exact path="/" component={Login} />
              <Route path="/Register" component={Register} />
            </div>
          </Switch>

        );
      
    }

  }

}

export default App;
