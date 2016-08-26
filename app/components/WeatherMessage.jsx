var React = require('react');

// Refactored below
// var WeatherMessage = React.createClass({
// 	render: function () {
// 		var {location, temp} = this.props;
// 		return (
// 			<div>
// 			<h3>The weather in {location} is {temp} &#x2109;.</h3>
// 			</div>
// 		);
// 	}
// });

var WeatherMessage = ({location, temp}) => {
	return (
		<h3>The weather in {location} is {temp} &#x2109;.</h3>
	);	
}

module.exports = WeatherMessage;