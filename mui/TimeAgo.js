import React, { Component, PropTypes } from 'react';

class TimeAgo extends Component {
  render() {
  	const { children } = this.props;
    return (
      <span style={styles.base} >{children}</span>
    );
  }
}

var styles = {
  base: {
    fontFamily: 'medium-content-sans-serif-font', 
    fontSize: 12, 
    color: 'rgba(0, 0, 0, 0.4)',
    display: 'block',
    WebkitFontSmoothing: 'antialiased'
  }
}

export default TimeAgo;