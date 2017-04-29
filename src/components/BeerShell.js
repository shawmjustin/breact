import React/*, { Component }*/ from "react";
import BeerDetails from './BeerDetails';

export default class BeerShell extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            deleted: false
        }
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount(){
    }

    handleClick = () => {
        const id = this.props.id;
        const url = `http://localhost:9001/list/${id}`;

        console.log(url);
        
        fetch(url, {
          method: 'delete'
        }).then(response =>
            response.json().then(json => {
              this.setState(prevState => ({
                deleted: !prevState.deleted
              }));
            })
        );
    }
 
    render() {
        const deleted = this.state.deleted;
        return (
            <div>
              {deleted ? (
                <span></span>
              ) : (
                <BeerDetails key={this.props.id} list_id={this.props.id} user_id={this.props.user_id} beer_id={this.props.beer_id} />
              )}
            </div>
        );
    }
}