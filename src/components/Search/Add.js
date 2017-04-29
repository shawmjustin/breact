import React from 'react';

class Add extends React.Component {
	constructor(props){
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e){
		e.preventDefault();
		alert(this.props.id)
	}

	render(){
		return (
			<a href="" onClick={this.handleClick}>Add</a>
		)
	}
}

export default Add;