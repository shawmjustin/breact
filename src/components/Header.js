import React, { Component } from 'react';
import Logout from './Logout';
import AddBeer from './AddBeer';

class Header extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		return(
			<nav className="navbar navbar-inverse bg-inverse">
				<form className="form-inline">
				<Logout /><AddBeer />
				</form>
			</nav>
		);
	}
}

export default Header;