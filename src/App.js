import React, { Component } from 'react';
import Grapher from './Grapher'

class App extends Component {
  render() {
    return (
      <div>
        <Grapher graphId="graph1" formula="2*x" zoom="false" showCoords="false"/>
        <Grapher graphId="graph2" formula="x^2" zoom="true" showCoords="true"/>
      </div>
    );
  }
}

export default App;
