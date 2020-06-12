import React, { Component } from 'react';
//import { Carousel } from "react-responsive-carousel";
import { Navbar, Nav, Form, NavDropdown,FormControl, Button, Carousel} from 'react-bootstrap';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link, Switch, Route } from 'react-router-dom';
import logo from './logo.png';
import image1 from './image1.jpg';
import image3 from './image3.jpg';
import image4 from './image4.jpg';

export default class Home extends Component {
    render() {
        return (
        <div className="wrapper">
        <Carousel className="col-sm-8 mt-5" >
          <Carousel.Item>
           <img className="mt-20" src={logo}/>
          <Carousel.Caption>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
           </Carousel.Caption>
        </Carousel.Item>
          <Carousel.Item>
          <img className="d-block w-100" src={image4}/>

        <Carousel.Caption>
          
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
        </Carousel.Item>
       <Carousel.Item>
        <img  className="d-block w-100"  src={image3}/>
      
      <Carousel.Caption>
    
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
);
}
}
