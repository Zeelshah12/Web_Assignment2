import React, { Component } from 'react';
import {Card,CardDeck, Button, Jumbotron,Image, Figure, Badge} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import logo from './logo.png';
import "./style.css";

 
export default class View extends Component {
    render() {
        return (
        <div className="wrapper">
         <Jumbotron className="mt-5">
         <div><h3> Post Title </h3> <br />
         <h4> Posted on 12 June 2020 </h4> <br/>
         <Button variant="primary">
            Ratings <Badge variant="light">5</Badge>
            <span className="sr-only">unread messages</span>
            </Button><br /><br/>
         <Figure>
                <Figure.Image width={171}  height={180} alt="171x180"src={logo} />
             <Figure.Caption>High in Demand </Figure.Caption>
        </Figure>
        </div>
         <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
         Morbi eu suscipit tortor. 
          Curabitur euismod porta lacus non auctor. 

            </p>
            <p>
             <a href="/Products"> <Button variant="primary">Learn more</Button> </a></p>
            </Jumbotron>
    </div>
);
    }
}