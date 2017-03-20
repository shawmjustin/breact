import React, { Component } from "react";
import BeerCard from './BeerCard';
import { getCookie } from './components';
// import DeleteBeer from './DeleteBeer';


export default class CardsComponent extends React.Component {
    constructor() {
        super();
        this.state = { items: [] };
    }
    
    componentDidMount() {
        const token = getCookie('token');
        const uid = getCookie('uid')
        const headers = new Headers({
            'Authorization': "JWT " + token,
            'Content-Type' : 'application/json',
            'Accept': 'application/json'
        });
        
        fetch(`http://localhost:9001/list/${uid}`, {
            headers: headers
        }) 
        .then((res) => res.json())
        .then((data) => {
           this.setState({ items: data })
       });
    }
    
    render() {        
        return(
           <div>
           <div className="row">              		
           { this.state.items.map(item => { 
             return (
             <div key={item._id} className="col-sm-6 beer-card">
             <BeerCard
             id={item.beer_id}  
             name={item.name} 
             brewery={item.brewery} 
             style={item.style} 
             ibu={item.ibu} 
             abv={item.abv} 
             color={item.color} 
             details={item.details} />
             </div>
             );
         }) }             
         </div>             
         </div>   
         );
     }
 }



