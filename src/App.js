import React, { Component } from 'react';
import Navigation from './components/Navigation';
import Router from './Router';


export default class App extends Component {
  render() {
    return (
    <div className="page-container">
      <Navigation forNav='topNav'/>
<Router/>
     </div>
    );
  }
}


