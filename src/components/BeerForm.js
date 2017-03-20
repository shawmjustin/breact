import React, { Component } from 'react';

class BeerForm extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			name: "",
			brewery: "" 
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
		console.log(event)
	}

	handleSubmit(event){
		event.preventDefault();
		console.log(this.state);
	}

	render(){
		return(
			<form className="beer-form">
				<input className="beer-form-input" value={this.state.name} onChange={this.handleInputChange} placeholder="Beer name" name="name" type="text" />
				<input className="beer-form-input" value={this.state.brewery} onChange={this.handleInputChange} placeholder="Brewery" name="brewery" type="text" />
				<input type="submit" value="Submit" onClick={this.handleSubmit} />
			</form>
		);
	}
}

export default BeerForm;