import React/*, { Component }*/ from 'react';
import { getCookie, eraseCookie } from './components';

class Logout extends React.Component {
	constructor(props){
		super(props);
		this.handleLogout = this.handleLogout.bind(this);
		this.state = {
			username: ""
		}
	}

	componentDidMount(){
		const url = `http://localhost:9001/user/${this.props.uid}`;
		const token = getCookie("token");
		const headers = new Headers({
        'Authorization': "JWT " + token,
        'Content-Type' : 'application/json',
        'Accept': 'application/json'
    });

		fetch(url, {
			method: "GET",
			headers: headers
		}).then((res) => res.json())
			.then((data) => {
				this.setState({ username: data});
				console.log(data)
			});
	}

	handleLogout(e){
		const cookieToken = 'token';
		const cookieUid = 'uid';
		e.preventDefault();
		
		if(getCookie(cookieToken)){
			eraseCookie(cookieToken, "", -1);
			eraseCookie(cookieUid, "", -1);
			window.location = "http://localhost:3000";	
		}
	}

	render(){
		return (
			<div className="dropdown">
		  <button className="btn btn-danger dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
		    {this.state.username}
		  </button>
		  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
		    <a className="dropdown-item" onClick={this.handleLogout} href="#">Logout</a>
		  </div>
		</div>
		);
	}
}

export default Logout;