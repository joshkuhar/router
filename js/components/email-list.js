var React = require('react');

var Email = require('./email');

function EmailList(props) {
	var emails = Object.keys(props.emails).map(function(emailId, index){
		var email = props.emails[emailId];
		return(
			<li key={index}>
				<Email from={email.from} to={email.to} title={email.title} content={email.content} />
			</li>
			)
		});
	return (
			<div>
				<ul> {emails} </ul>
			</div>
		);
};

module.exports = EmailList;
