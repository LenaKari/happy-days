import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import '../../styles/css/home.css';

const Home = () => (
	<div className='home-container'>
		<div className="banner"></div>

		<h3>What is Happy Days?</h3>
		<p>Happy Days is an app that was inspired by the Sch&ouml;ne Tage Box (Happy Days Box), where one writes down a positive memory from each day, hides it away, and then reviews all of the happy moments after a set period of time (usually a calendar year) to remind themselves of how many wonderful moments they've had! Happy Days has extended that to include media (photos, sound recordings, or videos).</p>

		<h3>How does it work?</h3>
		<p>When you log on to the app, you will have the option to add a happy memory for your current day. This can be in the form of written text or media. You can add as many memories for the current day as you like, but you cannot add a memory for a previous (or future) date.</p>
		<p>There is no peeking at previous days until the end of the year!</p>

		<h3>I can't view memories I've already added?! What if I'm having a bad day?</h3>
		<p>The point of the exercise is to encourage you to actively notice the small wonders in your day, without comparing one day to another. That being said, we all sometimes need a little reminder of the happy moments we've had to help us through the tougher times. When you are having one of these days, there is the option to see a random selection of happy moments you've added from your dashboard.</p>

		<h3>I'm suspicious. How is this service free?</h3>
		<p>We do not share your information, in any way, with anyone. We will cover the cost of running the app for as long as is feasibly possible, simply because we want to help build a better (and happier!) world.</p>

		<RaisedButton label="Let's get started!" primary={true} />

	</div>
);

export default Home;
