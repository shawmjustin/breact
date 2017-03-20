import createHistory from 'history/createBrowserHistory';

const history = createHistory();

//current location
const location = history.location;

//listen for location changes
const unlisten = history.listen((location, action) => {
	//location is an object like window.location
	console.log(action, location.pathname, location.state);
});

//use push, replace, and go to navigate around.
history.push('/home', {some: 'state'});

unlisten();