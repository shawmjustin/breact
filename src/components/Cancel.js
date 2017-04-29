import React from 'react';
import { Link } from 'react-router-dom';

class Cancel extends React.Component {
	constructor(props){
		super(props)
	}

	render(){
		return(
			<Link 
			to={this.props.to}
			onClick={this.handleCreateAccount}
			className="btn btn-secondary active"
			role="button"
			aria-pressed="true">Cancel</Link>	
		)
	}
}

export default Cancel;