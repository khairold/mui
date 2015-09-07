import React, { Component, PropTypes } from 'react';
import Radium from 'radium';

class GreyedText extends Component {
  render() {
  	const { children, size, brightness } = this.props;
    return (
      <span style={[styles.base, styles[size], styles[brightness]]} >{children}</span>
    );
  }
}

var styles = {
  base: {
    fontFamily: 'medium-content-sans-serif-font', 
    fontSize: 12, 
    color: 'rgba(0, 0, 0, 0.4)',
    WebkitFontSmoothing: 'antialiased'
  },
  medium: {
    fontSize: 14
  },
  darker: {
    color: '#8f8f8f'
  }

}

export default Radium(GreyedText);