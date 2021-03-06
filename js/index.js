var React = require('react');
var ReactDOM = require('react-dom');
var router = require('react-router');
var App = require('./components/app');
var Router = router.Router;
var Route = router.Route;
var hashHistory = router.hashHistory;

var IndexRoute = router.IndexRoute;


var ContactListContainer = require('./components/contact-list-container');
var ContactContainer = require('./components/contact-container');

var routes = (
    <Router history={hashHistory}>
        <Route path="/contacts" component={App}>
            <IndexRoute component={ContactListContainer} />
            <Route path=":contactId" component={ContactContainer} />
        </Route>
    </Router>
);

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(routes, document.getElementById('app'));
});