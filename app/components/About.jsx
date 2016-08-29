var React = require('react');

var About = (props) => {
	return (
		<div>
   			<h1 className="text-center">About</h1>
   			<p>This is a weather application built using React for a web developer course.</p>
   			<p> Here are some of the tools that were used:</p>
	   		<ul>
	   			<li><a href="https://facebook.github.io/react" target="blank">React</a> - This was the Javascript framework used.</li>
	   			<li><a href="http://openweathermap.org" target="blank">Open Weather Map</a> -  API used to get weather data by city.</li>
	   		</ul>
   		</div>
	)
};

module.exports = About;