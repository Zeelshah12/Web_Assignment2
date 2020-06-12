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
        <Navbar>
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
             <div className="container">
                  <Link className="navbar-brand" to={"/"}>BuyBAY</Link>
              <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                  <ul className="navbar-nav ml-auto">
                     <li className="nav-item">
                  <Form inline>
                     <FormControl type="text" placeholder="Search Here" className="mr-sm-2" />
                      <Button variant="outline-info">Search</Button>
                   </Form>
                      </li>
                      <li className="nav-item">
                          <Link className="nav-link" to={"/sign-in"}>Login</Link>
                        </li>
                      <li className="nav-item">
                       <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
                      </li>
                      <li className="nav-item">
                         <Link className="nav-link" to={"/roommate"}>Find Your Roommate</Link>
                       </li>
                      <li className="nav-item">
                        <Link className="nav-link" to={"/viewproperties"}>View Properties</Link>
                       </li>
                       <li className="nav-item">
                        <Link className="nav-link" to={"/blog"}>Blog</Link>
                       </li>
                    </ul>
            </div>
            </div>
           </nav>
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
