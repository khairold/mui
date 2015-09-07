import React, { Component, PropTypes } from 'react';
import mui, {Avatar, Card, CardTitle, CardText, FontIcon, RaisedButton} from 'material-ui';
import Radium from 'radium';

import PeopleName from './PeopleName';

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
      <div style={{width:580, margin:'0 auto'}}>
      	<Card>
					<CardText>
      			<div style={styles.base}>
							<Avatar>A</Avatar>
							<div style={{marginLeft:8}}>
								<div>
									<PeopleName>Rikke Jorgensen</PeopleName>
								</div>
								<div style={{fontFamily: 'medium-content-sans-serif-font', fontSize: 12, color: 'rgba(0, 0, 0, 0.4)'}}>
									3 days ago
								</div>
							</div>
						</div>
					</CardText>

					<CardTitle title="Pangkor" subtitle="King of POP" style={{paddingBottom: 0}} titleStyle={styles.title} subtitleStyle={styles.subTitle} >
					</CardTitle>
					<CardText style={styles.text} >
						Yes, each react component has state. State is something internal to the component. Only the component it self can read and write into its own state and as the name implies, the state of the component is used to store state (captain obvious here). Not interesting. Let’s move next.
      		</CardText>



					<CardText>

						<div style={styles.footerOut}>
							<div style={styles.footerIn}>
								<Avatar size='28' backgroundColor='#57ad68' style={{marginRight: 8}} />
								<span style={{fontFamily: 'medium-content-sans-serif-font', fontSize: 14, color: '#8f8f8f'}}>6 months to go</span>
								<FontIcon className="material-icons" style={{fontSize: 22, color: '#d9d9d9', marginLeft: 8}}>turned_in</FontIcon>
							</div>
							<div>
								<div style={{fontFamily: 'medium-content-sans-serif-font', fontSize: 12, color: '#8f8f8f'}}>Ali / Larter</div>
							</div>
						</div>
					</CardText>

      	</Card>
      </div>
    );
  }
}

MuiWrapper.childContextTypes = {
  muiTheme: React.PropTypes.object
};

var styles = {
  base: {
	  display: 'flex',
	  flexDirection: 'row',
	  alignItems: 'center'
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

  box: {
	  background: 'red',
	  color: 'blue',
	  fontSize: 60,
	  textAlign: 'center',
	  lineHeight: 200,
	  width: 200,
	  height: 200,
	  margin: 'auto'
	},
	text: {
		webkitFontSmoothing: 'antialiased',
		borderCollapse: 'separate',
		color: '#333333',
		display: 'block',
		fontFamily: 'medium-content-serif-font, Georgia, Cambria, Times, serif',
		fontSize: '18px',
		fontStyle: 'normal',
		fontWeight: 'normal',
		letterSpacing: 'normal',
		lineHeight: '26.1px',
		wordWrap: 'break-word',
		textShadow: 'rgba(0,0,0,.01) 0 0 1px'
	},
	title: {
		webkitFontSmoothing: 'antialiased',
		borderCollapse: 'separate',
		color: '#333333',
		display: 'block',
		fontFamily: "medium-content-sans-serif-font, 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Geneva, Verdana, sans-serif",
		fontSize: '22px',
		fontStyle: 'normal',
		fontWeight: 'bold',
		height: '28px',
		letterSpacing: 'normal',
		lineHeight: '28.6000003814697px',
		wordWrap: 'break-word'
	},
	subTitle: {
		webkitFontSmoothing: 'antialiased',
		borderCollapse: 'separate',
		color: '#8f8f8f',
		display: 'block',
		fontFamily: "medium-content-sans-serif-font, 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Geneva, Verdana, sans-serif",
		fontSize: '14px',
		fontStyle: 'normal',
		fontWeight: 'normal',
		height: '28px',
		letterSpacing: 'normal',
		wordWrap: 'break-word',
		marginLeft: 0 
	}
};



export default Radium(MuiWrapper);
