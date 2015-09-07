import React, { Component, PropTypes } from 'react';
import mui, {Card} from 'material-ui';

import ProjectCardText from './ProjectCardText';
import ProjectCardTitle from './ProjectCardTitle';
import ProjectCardFooter from './ProjectCardFooter';
import ProjectCardHeader from './ProjectCardHeader';

class ProjectCard extends Component {
	render() {
		const { updaterName } = this.props;
		return (
			<div style={styles.base}>
				<Card>
					<ProjectCardHeader updaterName={updaterName} updaterImage={'images/people/s61455.jpg'} lastUpdatedAgo={'2 days ago'} />
					<ProjectCardTitle title="Pangkor" subtitle="King of POP" />
					<ProjectCardText>
						Yes, each react component has state. State is something internal to the component. Only the component it self can read and write into its own state and as the name implies, the state of the component is used to store state (captain obvious here). Not interesting. Let’s move next.
					</ProjectCardText>
					<ProjectCardFooter rag={'green'} toGo={'5 months to go'} bookMark={true} people={'Ali / Larter'} />
				</Card>
			</div>
		);
	}
}

var styles = {
	base: {
		maxWidth:580, 
		margin:'0 auto'
	}
};

export default ProjectCard;
