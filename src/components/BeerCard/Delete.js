import React from 'react';
import { deleteBeer } from './../components';

class Delete extends React.Component {
	constructor(props){
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(event){
		event.preventDefault();
		const id = this.props.list_id;
		const url = `http://localhost:9001/list/${id}`;

		deleteBeer(url);
	}

	render(){
		return(
		<a 
		href=""
		className="card-link" 
		onClick={this.handleClick}
		>Delete</a>
		);
	}
}

export default Delete;