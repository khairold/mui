import React, { Component, PropTypes } from 'react';
import { Avatar } from 'material-ui';

class ProjectRagStatus extends Component {
  render() {
  	const { rag } = this.props;
    let backgroundColor;
    switch(rag) {
      case 'green':
        backgroundColor = '#57ad68';
        break;
      case 'red':
        backgroundColor = '#f44336';
        break;
      case 'amber':
        backgroundColor = '#ffc107';
        break;
      default:
        backgroundColor = '#aaaaaa';
    }

    return (
      <Avatar size={28} backgroundColor={backgroundColor} />
    );
  }
}

export default ProjectRagStatus;