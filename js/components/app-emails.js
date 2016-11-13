var React = require('react');

var AppEmails = function(props) {
    return (
        <div>
            <h2>
                Emails
            </h2>
            <div>
                {props.children}
            </div>
        </div>
    );
};

module.exports = AppEmails;