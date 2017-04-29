import React/*, { Component }*/ from 'react';
import { setCookie } from './components';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import CreateAccountButton from './Login/CreateAccountButton';
import CreateAccountForm from './Login/CreateAccountForm';
import Cancel from './Cancel';
import Gum from './Gum';
import LoginForm from './LoginForm';


class Login extends React.Component {
	constructor(props){
		super(props);
	}	

	render(){
		return(
			<Router>
			<div className="container">
				<Route exact path="/" component={LoginForm} />
				<Route path="/gum" component={Gum} />
				<Route path="/createaccount" component={CreateAccountForm} />
			</div>
			</Router>
		);
	}
}

export default Login;