import React from 'react';

import { Link } from 'react-router-dom';
import Cancel from './../Cancel';
import { loginUser } from './../components'; 


function somethingWentWrong(error) {
	return (
		<div className="alert alert-danger error-message" role="alert">
		  <strong>Woops:</strong> {error}
		</div>
	);
}

class CreateAccountForm extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			username: "",
			password: "",
			confirmPassword: "",
			error: ""
		}

		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);		
	}

	handleInputChange(event){
		const target = event.target;
		const value = target.value;
		const name = target.name;

		this.setState({
			[name]: value
		});
		console.log(this.state)
	}

	handleSubmit(event){
		event.preventDefault();

		const url = "http://localhost:9001/register"

		const data = {
			username: this.state.username,
			password: this.state.password,
			confirmPassword: this.state.confirmPassword
		}

		const myHeaders = new Headers();
		myHeaders.append('Content-Type', 'application/json');

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
        		if(json.error){
        			this.setState({ error: somethingWentWrong(json.error) });
        			return;
        		}
        		loginUser(this.state);
        	}))
        .catch((e) => {
        		console.log(e);
        		this.setState({error: e});
        });
	}

	render(){

		return(
			<form onSubmit={this.handleSubmit}>
				<h1 className="left">Create account: </h1>{this.state.error}
			  <div className="form-group">
			    <input type="text" name="username" value={this.state.username} onChange={this.handleInputChange} className="form-control" placeholder="Email" />
			  </div>
			  <div className="form-group">
			    <input type="password" name="password" value={this.state.password} onChange={this.handleInputChange} className="form-control" placeholder="Password" />
			  </div>
			  <div className="form-group">
			    <input type="password" name="confirmPassword" value={this.state.confirmPassword} onChange={this.handleInputChange} className="form-control" placeholder="Password again" />
			  </div>			  
			  <div className="offset-sm-2 col-sm-10 sign-in left">
		      <button type="submit" className="btn btn-primary">Create account</button> <Cancel className="left" to="" />
		    </div>
			</form>
		)
	}
}

export default CreateAccountForm;