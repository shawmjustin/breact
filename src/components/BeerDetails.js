import React from 'react';
import BeerCard from './BeerCard';

class BeerDetails extends React.Component {
	constructor(props){
		super(props);
		this.state = { beer: [] };
	}

	componentDidMount(){
    const headers = new Headers({
        /*'Authorization': "JWT " + token,*/
        'Content-Type' : 'application/json',
        'Accept': 'application/json'
    });
    
    fetch(`http://localhost:9001/beer/${this.props.beer_id}`, {
        headers: headers
    }) 
    .then((res) => res.json())
    .then((data) => {
       this.setState({ beer: data });
   	});
	}

	render(){
		return(
			<BeerCard 
			key={this.props.list_id} 
			list_id={this.props.list_id} 
			beer_id={this.state.beer._id} 
			name={this.state.beer.name} 
			brewery={this.state.beer.brewery} 
			color={this.state.beer.color}
			created={this.state.beer.created}
			details={this.state.beer.details}
			ibu={this.state.beer.ibu}
			abv={this.state.beer.abv}
			style={this.state.beer.style}
			compressed={this.state.beer.name_compressed}
			/>
		);
	}
}

export default BeerDetails;