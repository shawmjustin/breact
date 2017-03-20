import React, { Component } from 'react';
import { getCookie, eraseCookie } from './components';

class Logout extends React.Component {
	constructor(props){
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e){
		const cookieToken = 'token';
		const cookieUid = 'uid';
		e.preventDefault();
		
		if(getCookie(cookieToken)){
			eraseCookie(cookieToken, "", -1);
			eraseCookie(cookieUid, "", -1);
			window.location.reload();	
		}
	}

	render(){
		return (
			<a className="btn btn-danger" onClick={this.handleClick} href="#" role="button">logout</a>
		);
	}
}

export default Logout;