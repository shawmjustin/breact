import React from 'react';

import Cancel from './Cancel';
import Gum from './Gum'
import CreateAccountButton from './Login/CreateAccountButton';
import { setCookie, getCookie } from './components';


function somethingWentWrong() {
	return (
		<div className="alert alert-danger" role="alert">
		  <strong>Woops!</strong> Your email or password are incorrect!
		</div>
	);
}


class LoginForm extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			username: "",
			password: "",
			error: ""
		}

		this.handleSubmit = this.handleSubmit.bind(this);
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
        		if(json){
        			this.setState({error: null})
        			const token = json.token;
	        		const uid = json.uid;
	        		setCookie(tokenName, token, days);
	        		setCookie(uidName, uid, days);
	        		window.location.reload()
        		}if(!json){
	        		this.setState({error: somethingWentWrong()})
        		}
        	}))
        .catch((e) => {
        		console.log(e);
        		this.setState({error: e});
        });
	}

	render(){
		const createAccount = "CreateAccountForm";
		return(
			<div>
			<h1 className="left">Login:</h1> {this.state.error}
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
		      <div className="offset-sm-2 col-sm-10 sign-in">
		        <button type="submit" className="btn btn-primary">Sign in</button> <CreateAccountButton to="createaccount" />
		      </div>

		    </div>
				</form>
				</div>
				
		)
	}
}

export default LoginForm;