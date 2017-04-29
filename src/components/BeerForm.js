import React/*, { Component }*/ from 'react';
import { getCookie } from './components';

import Cancel from './Cancel';
import RouterExample from './RouterExample';

function somethingWentWrong(error) {
	return (
		<div className="alert alert-danger error-message" role="alert">
		  <strong>Woops:</strong> {error}
		</div>
	);
}

class BeerForm extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			name: "",
			brewery: "",
			style: "",
			abv: "",
			ibu: "",
			color: "",
			details: ""
		}

		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount(){
		this.setState({creator_id: getCookie('uid')});
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

		const data = {
			name: this.state.name,
			brewery: this.state.brewery,
			style: this.state.style,
			abv: this.state.abv,
			ibu: this.state.ibu,
			color: this.state.color,
			details: this.state.details,
			creator_id: this.state.creator_id
		}

		const myHeaders = new Headers();
		myHeaders.append('Content-Type', 'application/json');

		const url = "http://localhost:9001/beer";

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
        		console.log(json)
        		if(json.error){
        			this.setState({ error: somethingWentWrong(json.error) });
        			return;
        		}
        		window.location = "http://localhost:3000";
        	}))
        .catch((e) => {
        		console.log(e);
        		this.setState({error: e});
        });
	}

	render(){
		return(
			<form className="beer-form">
				{this.state.error}
				<div className="form-group beer-form-input">
			    <input type="email" className="form-control" value={this.state.name} onChange={this.handleInputChange} placeholder="Beer name" name="name" type="text" />
			  </div>
			  <div className="form-group beer-form-input">
			    <input type="email" className="form-control" value={this.state.brewery} onChange={this.handleInputChange} placeholder="Brewery" name="brewery" type="text" />
			  </div>
			  <div className="form-group beer-form-input">
			    <input type="email" className="form-control" value={this.state.style} onChange={this.handleInputChange} placeholder="Style" name="style" type="text" />
			  </div>
			  <div className="form-group beer-form-input">
			    <input type="email" className="form-control" value={this.state.abv} onChange={this.handleInputChange} placeholder="Abv" name="abv" type="text" />
			  </div>
			  <div className="form-group beer-form-input">
			    <input type="email" className="form-control" value={this.state.ibu} onChange={this.handleInputChange} placeholder="Ibu" name="ibu" type="text" />
			  </div>
			  <div className="form-group beer-form-input">
			    <input type="email" className="form-control" value={this.state.color} onChange={this.handleInputChange} placeholder="Color" name="color" type="text" />
			  </div>
				<div className="form-group beer-form-input">
				  <textarea className="form-control" value={this.state.details} onChange={this.handleInputChange} rows="5" placeholder="Details" name="details" type="text"></textarea>
				</div>
				<button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
				<Cancel to="" />
			</form>
		);
	}
}

export default BeerForm;