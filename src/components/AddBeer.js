import React, { Component } from 'react';

class AddBeer extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		return(
			<button type="button" className="btn btn-link right">Add beer</button>
		);
	}
}

export default AddBeer;