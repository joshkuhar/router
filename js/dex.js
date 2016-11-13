var React = require('react');
var ReactDOM = require('react-dom');
var router = require('react-router');
var Router = router.Router;
var Route = router.Route;
var hashHistory = router.hashHistory;

var IndexRoute = router.IndexRoute;

var Emails = require('./components/email-list-container');
var NavBar = require('./components/navigation');
var AppEmails = require('./components/app-emails');
var EmailContainer = require('./components/email-container');
var Content = require('./components/content');

var routes = (
    <Router history={hashHistory}>
    	<Route path="/emails" component={AppEmails} >
    		<IndexRoute component={NavBar} />
    		<Route path=":mailbox" component={Emails} />
    	</Route>
    </Router>
);


document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(routes, document.getElementById('app'));
});