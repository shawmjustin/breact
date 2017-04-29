import React/*, { Component }*/ from 'react';
import Login from './Login';
// import SignedIn from './SignedIn';
import RouterExample from './RouterExample';

class Splash extends React.Component {
	/*constructor(props){
		super(props);
	}*/

	componentDidMount(){
		console.log(this.props.token)
		console.log(this.props.uid)
	}

	render(){
		const token = this.props.token;
		const uid = this.props.uid;
		return(
			<div>
			{token !== "" ? (
			<RouterExample uid={uid} token={token} />				
			): (
			<Login />
			)}
			</div>
		);
	}
}

export default Splash;