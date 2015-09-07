import React, { Component, PropTypes } from 'react';

import PeopleAvatar from './PeopleAvatar';
import PeopleName from './PeopleName';
import TimeAgo from './TimeAgo';

class PeopleAvatarName extends Component {
  render() {
  	const { image, name, sub } = this.props;
    return (
      <div style={styles.base}>
        <PeopleAvatar name={name} image={image} />
        <div style={{marginLeft:8}}>
          <div>
            <PeopleName>{name}</PeopleName>
          </div>
          <div>
            <TimeAgo>{sub}</TimeAgo>
          </div>
        </div>
      </div>
    );
  }
}

var styles = {
  base: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  }
}

export default PeopleAvatarName;