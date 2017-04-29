import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import AddBeer from './AddBeer';
/*import BeerCard from './BeerCard';*/
import ItemGetter from './ItemGetter';
import BeerForm from './BeerForm';
import Logout from './Logout';
import Search from './Search/Search';

class RouterExample extends React.Component {
  /*constructor(props){
    super(props);
  }*/

  render(){
    return (
        <Router>
          <div>
          <nav className="navbar navbar-inverse bg-inverse">
            <form className="form-inline">
              {/*<li><Link to="/">Home</Link></li>*/}
              <Logout uid={this.props.uid} />
              <Link to="/AddBeer"><AddBeer /></Link>
              <Link className="white" to="/search">Search</Link>
            </form>
          </nav>

            <Route exact path="/" component={ItemGetter} />
            <Route path="/addbeer" component={BeerForm} />
            <Route path="/search" component={Search} />
          </div>
        </Router>
    );
  }
}

export default RouterExample;