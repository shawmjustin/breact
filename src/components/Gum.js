import React from 'react';

class Gum extends React.Component {
	constructor(props){
		super(props);
	}

	componentDidMount(){
		console.log(this.props)
	}

	render(){
		return(
			<p>Gum</p>
		)
	}
}

export default Gum;