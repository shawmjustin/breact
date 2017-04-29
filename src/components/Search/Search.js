import React from 'react';
import Dropdown from './Dropdown';

class Search extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			query: "",
			beers: [],
			q: false
		}

		this.handleInputChange = this.handleInputChange.bind(this);
	}

	componentDidMount(){
		
	}

	handleInputChange(event){
		const target = event.target;
		const value = target.value;
		const name = target.name;

		this.setState({
			[name]: value
		});

		const myHeaders = new Headers();
		myHeaders.append('Content-Type', 'application/json');

		if(this.state.query !== ""){
			fetch("http://localhost:9001/beer/search", {
				method: 'post',
				headers: myHeaders,
				body: JSON.stringify(this.state)
			})
			.then((response) => 
				response.json()
				.then((json) => {
					this.setState({beers: json})
					console.log(this.state.beers)
				}))
			.catch((e) => {
				console.log(e);
				this.setState({ error: e })
			});
		}
	}

	render(){
		return(
			<form autoComplete="off">
			  <div className="form-group search">
			    <input type="text" className="form-control" value={this.state.query} onChange={this.handleInputChange} name="query" placeholder="SEARCH" autoComplete="off" /><input type="button" className="btn btn-info" value="test" />
			  </div>
			  <ul className="list-group">
				  { this.state.beers.map(beer => { 
	            return (
	            	<Dropdown key={beer._id} id={beer._id} name={beer.name} />
	            );
	        }) }
        </ul>				
			</form>
		);
	}
}

export default Search;