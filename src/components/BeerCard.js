import React from 'react';
import Delete from './BeerCard/Delete';

class BeerCard extends React.Component {
	constructor(props){
		//list_id, beer_id, name, brewery, color, created, 
		//details, ibu, abv, style, compressed
		super(props);

		this.handleShowClick = this.handleShowClick.bind(this);
		this.handleHideClick = this.handleHideClick.bind(this);
		this.state = {
			showDetails: false,
			details: null
		}
	}

	handleShowClick(e){
		e.preventDefault();
		this.setState({ showDetails: true, details: this.props.details });
	}

	handleHideClick(e){
		e.preventDefault();
		this.setState({ showDetails: false, details: null });
	}

	render(){
		const showDetails = this.state.showDetails;
		let button = null;
		
		if(showDetails){
			button = <a href="" onClick={this.handleHideClick}>hide</a>;
		}else{
			button = <a href="" onClick={this.handleShowClick}>show</a>;
		}

		return(
			<div className="card left">
		    <h3 className="card-header">
		    <img src="beer.png" className="beer-image" width="42" height="42" />
		    <span>{this.props.name}</span>
		    </h3>
			  <div className="card-block">
			  	<h6 className="card-subtitle mb-2 text-muted">{this.props.brewery}</h6>
			    <p className="card-text">{this.state.details} {button}</p>
			    <a href="#" className="card-link">Edit</a><Delete list_id={this.props.list_id} />
			  </div>
			</div>
		);
	}
}

export default BeerCard;