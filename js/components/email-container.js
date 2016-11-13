var React = require('react');

var EMAILS = require('../emails');

var email = require('./email');

var EmailContainer = function(props) {
    var mailbox = EMAILS[props.params.mailbox];
    return <Email from={mailbox.From} to={mailbox.to} title={mailbox.title} content={mailbox.content} />;
};

module.exports = EmailContainer;
