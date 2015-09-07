import React, { Component, PropTypes } from 'react';
import mui, {Avatar, CardText, FontIcon} from 'material-ui';

class ProjectCardFooter extends Component {
  render() {
    const { rag, toGo, bookMark, people } = this.props;
    return (
			<CardText>
				<div style={styles.footerOut}>
					<div style={styles.footerIn}>
						<Avatar size={28} backgroundColor='#57ad68' style={styles.rag} />
						<span style={styles.toGo}>{toGo}</span>
						<FontIcon className="material-icons" style={styles.bookMark}>turned_in</FontIcon>
					</div>
					<div>
						<div style={styles.people}>{people}</div>
					</div>
				</div>
			</CardText>
    );
  }
}

var styles = {
	base: {
		paddingBottom: 0
	},
	footerOut: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	footerIn: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
	},
	rag: {
		marginRight: 8
	},
	toGo: {
		fontFamily: 'medium-content-sans-serif-font', 
		fontSize: 14, 
		color: '#8f8f8f',
		WebkitFontSmoothing: 'antialiased',
	},
	people: {
		fontFamily: 'medium-content-sans-serif-font', 
		fontSize: 12, 
		color: '#8f8f8f',
		WebkitFontSmoothing: 'antialiased',
	},
	bookMark: {
		fontSize: 22,
		color: '#d9d9d9', 
		marginLeft: 8
	}
}

export default ProjectCardFooter;