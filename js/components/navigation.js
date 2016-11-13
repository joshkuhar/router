var React = require('react');
var router = require('react-router');
var Link = router.Link;

function Navigation(props) {
	return (

		<div>
			<h3>
				<Link to={'/emails/' + 'inbox' }>
				Inbox
				</Link>
			</h3>
			<h3>
				<Link to={'/emails/' + 'spam' }>
				Spam
				</Link>
			</h3>
		</div>
		);
};

module.exports = Navigation;

