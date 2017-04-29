import React from 'react';
import Add from './Add';

class Dropdown extends React.Component {
	constructor(props){
		super(props)
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(event){
		console.log(this.props)
	}

	render(){
		return(
			<li className="list-group-item dropdown-li">
				<div className="list-item">{this.props.name}</div> 
				<div className="plus"><Add id={this.props.id} /></div>
			</li>
		);
	}
}

export default Dropdown;