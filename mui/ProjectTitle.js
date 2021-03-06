import React, { Component, PropTypes } from 'react';
import Radium from 'radium';

class ProjectTitle extends Component {
  render() {
  	const { children, size } = this.props;
    return (
      <span style={[styles.base, styles[size]]} >{children}</span>
    );
  }
}

var styles = {
  base: {
    WebkitFontSmoothing: 'antialiased',
    borderCollapse: 'separate',
    color: '#333333',
    display: 'block',
    fontFamily: "medium-content-sans-serif-font, 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Geneva, Verdana, sans-serif",
    fontSize: 22,
    height: 25,
    fontStyle: 'normal',
    fontWeight: 'bold',
    letterSpacing: 'normal',
    wordWrap: 'break-word'
  },
  small: {
    fontSize: 22,
    height: 25
  },
  medium: {
    fontSize: 26,
    height: 29
  },
  large: {
    fontSize: 60,
    height: 66
  }
}

export default Radium(ProjectTitle); 