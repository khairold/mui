import React, { Component, PropTypes } from 'react';
import Radium from 'radium';

class ProjectSubTitle extends Component {
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
    color: '#8f8f8f',
    display: 'block',
    fontFamily: "medium-content-sans-serif-font, 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Geneva, Verdana, sans-serif",
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: 'normal',
    letterSpacing: 'normal',
    wordWrap: 'break-word'
  },
  small: {
    fontSize: 14
  },
  medium: {
    fontSize: 18
  },
  large: {
    fontSize: 36
  }
}

export default Radium(ProjectSubTitle); 