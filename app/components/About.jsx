var React = require('react');


//Refactored below
// var About = React.createClass({
// 	render: function () {
// 		return (
//    			<h3>About component</h3>
// 		);
// 	}
// });

var About = (props) => {
	return (
			<div>
   				<h3>About</h3>
   				<p>Welcome to the About page.</p>
   			</div>
		)
};

module.exports = About;