import React, { Component, PropTypes } from 'react';

class PeopleName extends Component {
  render() {
  	const { children } = this.props;
    return (
      <span style={styles.base} >{children}</span>
    );
  }
}

var styles = {
  base: {
	  color: '#57ad68',
	  fontSize: 14,
	  fontFamily: 'medium-content-sans-serif-font'
	}
}

export default PeopleName;