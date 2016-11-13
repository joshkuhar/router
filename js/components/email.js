var React = require('react');

function Email(props) {
	return(
		<div>

			<ul>
				 <li>
				 From: {props.from}
				 </li>
				 <li>To: {props.to}</li>
				 <li>Title: {props.title}</li>
				 <li>Content: {props.content}</li>
			</ul>
			<p></p>
		</div>
		);
};

module.exports = Email;

