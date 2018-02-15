import React, { Component } from 'react';
import Grapher from './Grapher'

class App extends Component {
  render() {
    return <Grapher graphId="graph" formula="x*x"/>
  }
}

export default App;
