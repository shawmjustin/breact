import React, { Component } from "react";

export default class BeerCard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            deleted: false
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = () => {
        const id = this.props.id;
        const url = `http://localhost:3002/beers/${id}`;

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
                <p></p>
              ) : (
                <div key={this.props.id} className="card card-outline-primary">
                  <div className="card-block">
                    <h4 className="card-title">{this.props.name}</h4>
                    <h6 className="card-subtitle mb-2 text-muted">{this.props.brewery}</h6>
                    <p className="card-text">{this.props.details}</p>
                    <h6>Abv: {this.props.abv}  -  IBU: {this.props.ibu}  -  Color: {this.props.color}  -  Style: {this.props.style}</h6>
                    <a href="#" className="card-link edit">Edit</a>
                    <a href="#" className="card-link delete" onClick={(x) => this.handleClick(x)}>Delete</a>
                  </div>
                </div>
              )}
            </div>
        );
    }
}



