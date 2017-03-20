import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import AddBeer from './AddBeer';
/*import BeerCard from './BeerCard';*/
import DataGetter from './DataGetter';
import BeerForm from './BeerForm';
import Logout from './Logout';

class RouterExample extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
        <Router>
          <div>
          <nav className="navbar navbar-inverse bg-inverse">
            <form className="form-inline">
              {/*<li><Link to="/">Home</Link></li>*/}
              <Logout />
              <Link to="/AddBeer"><AddBeer /></Link>
            </form>
          </nav>

            <Route exact path="/" component={DataGetter} />
            <Route path="/AddBeer" component={BeerForm} />
          </div>
        </Router>
    );
  }
}

export default RouterExample;