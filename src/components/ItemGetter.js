import React/*, { Component }*/ from "react";
import BeerShell from './BeerShell';
import { getCookie } from './components';
// import DeleteBeer from './DeleteBeer';


export default class ItemGetter extends React.Component {
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
           { this.state.items.map(item => { 
                return (
                <BeerShell key={item._id} id={item._id} beer_id={item.beer_id} user_id={item.user_id} />
                );
            }) }             
            </div>   
         );
     }
 }



