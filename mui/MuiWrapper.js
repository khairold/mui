import React, { Component, PropTypes } from 'react';
import mui, {Avatar, Card, CardTitle, CardText, FontIcon, RaisedButton} from 'material-ui';
import Radium from 'radium';

import ProjectCard from './ProjectCard';
import ProjectTitle from './ProjectTitle';
import ProjectSubTitle from './ProjectSubTitle';
import ProjectTitleSubTitle from './ProjectTitleSubTitle';
import PeopleName from './PeopleName';
import TimeAgo from './TimeAgo';
import PeopleAvatar from './PeopleAvatar';
import PeopleAvatarName from './PeopleAvatarName';
import ProjectRagStatus from './ProjectRagStatus';
import GreyedText from './GreyedText';

const ThemeManager = new mui.Styles.ThemeManager();

class MuiWrapper extends Component {
	getChildContext() { 
		return {
			muiTheme: ThemeManager.getCurrentTheme()
		};
	}
	render() {
		const { increment, incrementIfOdd, incrementAsync, decrement, counter } = this.props;
		return (
			<div>
				<ProjectTitle>Pangkor</ProjectTitle>
				<ProjectSubTitle>King of POP</ProjectSubTitle>
				<ProjectTitleSubTitle title={'Pangkor'} subtitle={'King of POP'} size={'small'} />
				<PeopleAvatar name={'Ali'} />
				<PeopleName>Paul Jones</PeopleName>
				<TimeAgo>4 days ago</TimeAgo>
				<PeopleAvatarName name={'Ali Larter'} image={'images/people/s61455.jpg'} sub={'6 minutes ago'} />
				<ProjectRagStatus rag={'amber'} />
				<GreyedText size={'medium'} brightness={'darker'} >5 months to go</GreyedText>
				<br />
				<GreyedText brightness={'darker'}>Ali / Larter</GreyedText>

				<ProjectCard updaterName={'Rikke Jorgensenaaa'} />
			</div>
		);
	}
}

MuiWrapper.childContextTypes = {
	muiTheme: React.PropTypes.object 
};

export default Radium(MuiWrapper);
