import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router} from "react-router-dom";
import { Navbar, Nav, Form, NavDropdown,FormControl, Button} from 'react-bootstrap';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link, Switch, Route } from 'react-router-dom';
import Products from "./components/Products";
import Register from "./components/Register";
import Home from "./components/Home";
import View from './components/View';
import Blog from './components/Blog';
  

  export default class App extends React.Component {
    render() {    
      return (
        <div>
        <Router>
         <Navbar collapseOnSelect expand="lg">
          <Navbar.Brand href="/">BuyBAY</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/viewproperties">View Properties</Nav.Link>
              <Nav.Link href="/roommate">Find Your Roommate</Nav.Link>
              <Nav.Link href="/blog">Blog</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="/sign-up">Sign up</Nav.Link>
              <Nav.Link href="/sign-in">Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
           <Switch>
                 <Route exact path='/' component={Home}/>
                <Route path='/sign-up' component={Register}/>
                <Route  path='/sign-in' component={Products}/>
                <Route  path='/viewproperties' component={View}/>
                <Route path='/Products' component={Products}/>
                 <Route path='/roommate' component={Products}/>
                 <Route path='/blog' component={Blog}/>
            </Switch>
          </Router>
      
       </div>
        
      );
    }
  }
