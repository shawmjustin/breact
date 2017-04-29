import React from 'react';
import { Link } from "react-router-dom";

import RouterExample from './../RouterExample';
import CreateAccountForm from './CreateAccountForm';

class CreateAccountButton extends React.Component {
	constructor(props){
		super(props);
	}


	render(){
		return(
			<Link href="" 
			to={this.props.to}
			className="btn btn-secondary active"
			role="button"
			aria-pressed="true"
			>Create an account..</Link>
		)
	}
}

export default CreateAccountButton;