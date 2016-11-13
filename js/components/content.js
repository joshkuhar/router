var React = require('react');

function Content(props) {
	return(
		<div>
			<p>Content of email: {props.content}</p>
		</div>
		);
};

module.exports = Content;