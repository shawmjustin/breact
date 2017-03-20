import React, { Component } from 'react';
import Header from './Header';

class SignedIn extends React.Component {
	/*constructor(props){
		super(props);
	}*/

	render(){
		const token = this.props.token;
		const uid = this.props.uid;
		return (
			<div>
				<Header />
			</div>
		);
	}
}

export default SignedIn;