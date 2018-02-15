import React, { Component } from 'react';
import { setGrapherStyle } from './SetGrapherStyle';
const functionPlot = require('function-plot');

class Grapher extends Component {
  constructor(props) {
    super(props);
    this.plotFunction = this.plotFunction.bind(this);
    this.setStyle = this.setStyle.bind(this);
  }

  componentDidMount(){
    this.plotFunction();
    this.setStyle();
  }

  plotFunction() {
    functionPlot({
      target: '#' + this.props.graphId,
      grid: true,
      disableZoom: true,
      data: [
        { fn: this.props.formula, color: '#DB0066', skipTip: true }
      ]
    })
  }

  setStyle() {
    setGrapherStyle(this.props.graphId);
  }

  render() {
    return (
      <div id={this.props.graphId}>
      </div>
    );
  }
}

export default Grapher;
