import React, { Component, PropTypes } from 'react';
import mui, {Avatar} from 'material-ui';

class PeopleAvatar extends Component {
  render() {
    const { name, image, size } = this.props;
    let initial;

    if (!image && name) {
			initial = name.substr(0,1);
    }
    
    return (
			<Avatar style={styles.base} src={image} >{initial}</Avatar>
    );
  }
}

var styles = {
  base: {
	  fontFamily: 'medium-content-sans-serif-font',
    WebkitFontSmoothing: 'antialiased'
	}
}

export default PeopleAvatar;