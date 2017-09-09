import React from 'react';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import '../styles/css/home.css';

const styles = {
	card: {
		margin: '1.5rem 1rem'
	},
	header: {
		fontWeight: '600'
	}
}

const Home = () => (
	<div className='home-container'>
		<div className="banner"></div>

		<div className='main-content'>
			<Card style={styles.card}>
				<CardHeader
					title="What is Happy Days?"
					style={styles.header}
					actAsExpander={true}
					showExpandableButton={true}
				/>
				<CardText expandable={true}>
					Happy Days is an app that was inspired by the Sch&ouml;ne Tage Box (Happy Days Box), where one writes down a positive memory from each day, hides it away, and then reviews all of the happy moments after a set period of time (usually a calendar year) to remind themselves of how many wonderful moments they've had! Happy Days has extended that to include media (photos, sound recordings, or videos).
				</CardText>
			</Card>

			<Card style={styles.card}>
				<CardHeader
					title="How does it work?"
					style={styles.header}
					actAsExpander={true}
					showExpandableButton={true}
				/>
				<CardText expandable={true}>
					When you log on to the app, you will have the option to add a happy memory for your current day. This can be in the form of written text or media. You can add as many memories for the current day as you like, but you cannot add a memory for a previous (or future) date. And there is no peeking at previous days until the end of the year!
				</CardText>
			</Card>

			<Card style={styles.card}>
				<CardHeader
					title="What if I'm having a bad day?"
					style={styles.header}
					actAsExpander={true}
					showExpandableButton={true}
				/>
				<CardText expandable={true}>
					The point of the exercise is to encourage you to actively notice the small wonders in your day, without comparing one day to another. That being said, we all sometimes need a little reminder of the happy moments we've had to help us through the tougher times. When you are having one of these days, there is the option to see a random selection of happy moments you've added from your dashboard.
				</CardText>
			</Card>

			<Card style={styles.card}>
				<CardHeader
					title="How is this service free?"
					style={styles.header}
					actAsExpander={true}
					showExpandableButton={true}
				/>
				<CardText expandable={true}>
					We do not share your information, in any way, with anyone. We will cover the cost of running the app for as long as is feasibly possible, simply because we want to help build a better (and happier!) world.
				</CardText>
			</Card>

			<div className='button-container'>
				<Link to="/login">
					<RaisedButton label="Let's get started!" primary={true} />
				</Link>
			</div>
		</div>

	</div>
);

export default Home;
