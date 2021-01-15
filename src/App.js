import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import {Navbar,Nav}from 'react-bootstrap'

import Home from "./Home"
import Restaurantlist from "./Restaurantlist"

import RestaurantUpdate from "./RestaurantUpdate"
import RestaurantCreate from "./RestaurantCreate"
import RestaurantDetail from "./RestaurantDetail"
import RestaurantSearch from "./RestaurantSearch"
import Login from './Login'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faEdit,faList,faHome,faSearch, faPlus,faUtensils,faUser} from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div className="App">
      <Router>
        
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home"><FontAwesomeIcon icon={faUtensils} />Alok Restaurant Application  <span role="img" aria-label="emoji">
              ❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️
              </span></Navbar.Brand>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home"><Link to="/"><FontAwesomeIcon icon={faHome} /> Home</Link></Nav.Link>
              <Nav.Link href="#link">< Link to="/list"><FontAwesomeIcon icon={faList} /> List</Link></Nav.Link>
              <Nav.Link href="#link"><Link to="/search"><FontAwesomeIcon icon={faSearch} />Search</Link></Nav.Link>
              <Nav.Link href="#link"><Link to="/login"><FontAwesomeIcon icon={faUser} />Login</Link></Nav.Link>
              <Nav.Link href="#link"><Link to="create"><FontAwesomeIcon icon={faPlus} />Create</Link></Nav.Link>

            </Nav>

          </Navbar.Collapse>
        </Navbar>

        {/* <ul>
          <li><Link to="/">Home</Link></li>
          <li>< Link to="/list">List</Link> </li>
          <li><Link to="create">Create</Link></li>
          <li><Link to="/update">Update</Link></li>
          <li><Link to="/details">Details</Link></li>
          <li><Link to="/search">Search</Link></li>

        </ul> */}


        <Route path="/list">
          <h1>listing from app for LISTING</h1>
          <Restaurantlist />
        </Route>


        <Route path="/create">
          <h1>crette here from</h1>
          <RestaurantCreate />
        </Route>

        <Route path="/details">
          <h1>detail from</h1>
          <RestaurantDetail />
        </Route>
        <Route path="/search">
          <h1>search from</h1>
          <RestaurantSearch />
        </Route>

        <Route path="/update/:id"
        render={props=>(
          <RestaurantUpdate{...props} />
          
        )
        }>
         {/* for login */}
         
         
        </Route>
        <Route path="/login"
        
        render={props=>(
          <Login{...props} />
          
        )
        }>
         
         
        </Route>

        <Route exact path="/">
          <h1>home from </h1>
          <Home />
        </Route>

      </Router>
    </div>
  );
}

export default App;
