import React, { Component } from 'react';
import { setGrapherStyle } from './SetGrapherStyle';
const functionPlot = require('function-plot');

class Grapher extends Component {
  constructor(props) {
    super(props);
    this.plotFunction = this.plotFunction.bind(this);
    this.setStyle = this.setStyle.bind(this);
    this.zoom = toBool(this.props.zoom);
    this.showCoords = toBool(this.props.showCoords);
  }

  componentDidMount(){
    this.plotFunction();
    this.setStyle();
  }

  plotFunction() {
    functionPlot({
      target: '#' + this.props.graphId,
      grid: true,
      disableZoom: !this.zoom,
      data: [
        { fn: this.props.formula, color: '#DB0066', skipTip: !this.showCoords }
      ]
    });
  }

  setStyle() {
    setGrapherStyle(this.props.graphId, this.zoom);
  }

  render() {
    return (
      <div id={this.props.graphId}>
      </div>
    );
  }
}

export default Grapher;

function toBool(boolString) {
  if(boolString === 'true') {
    return true;
  } else {
    return false;
  }
}