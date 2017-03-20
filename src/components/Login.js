import React, { Component } from 'react';
import { setCookie } from './components';

class Login extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			username: "",
			password: "",
			error: ""
		}

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount() {
        /*fetch(`http://localhost:9001/secret`,
        	{
        		method: 'get'
        	}) 
          .then((res) => res.json())
          .then((data) => {
            	console.log(data);
          });*/
  }

	handleUsernameChange = (event) => {
    this.setState({ username: event.target.value });
  };

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

	handleSubmit(e){

		e.preventDefault();
		const data = {
			username: this.state.username,
			password: this.state.password
		}

		const myHeaders = new Headers();
		myHeaders.append('Content-Type', 'application/json');

		const url = "http://localhost:9001/login";
		const tokenName = "token";
		const uidName = "uid";
		const days = 364 / 2;

		fetch(url, {
          method: 'post',
          headers: myHeaders,
          //mode: 'cors',
          //cache: 'default',
          body: JSON.stringify(data)
        })
				.then((response) =>
        		response.json()
        	.then((json) => {
        		console.log(json);
        		const token = json.token;
        		const uid = json.uid;
        		setCookie(tokenName, token, days);
        		setCookie(uidName, uid, days);
        		window.location.reload();
        	}))
        .catch((e) => {
        		console.log(e);
        		this.state.error = e;
        });
	}

	render(){
		return(
			<div className="container">
				<h1 className="left">Login:</h1>
				<form onSubmit={this.handleSubmit}>
					<div className="form-group row">
		      <div className="col-sm-10">
		        <input type="text" value={this.state.username} onChange={this.handleUsernameChange} className="form-control" id="inputEmail3" placeholder="Email" />
		      </div>
		    </div>
		    <div className="form-group row">
		      <div className="col-sm-10">
		        <input type="password" value={this.state.password} onChange={this.handlePasswordChange} className="form-control" id="inputPassword3" placeholder="Password" />
		      </div>
		    </div>
		    <div className="form-group row">
		      <div className="offset-sm-2 col-sm-10">
		        <button type="submit" className="btn btn-primary">Sign in</button>
		      </div>
		    </div>
				</form>
			</div>
		);
	}
}

export default Login;