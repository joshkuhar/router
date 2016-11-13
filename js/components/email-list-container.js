var React = require('react');
var EmailList = require('./email-list');
var Emails = require('../emails');

var EmailListContainer = function(props) {
	var mailbox = Emails[props.params.mailbox];
	console.log(mailbox);
	return (
		<div>
			<EmailList emails={ mailbox } />
		</div>
		);
};

module.exports = EmailListContainer;