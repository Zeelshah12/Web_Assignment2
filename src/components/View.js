import React, { Component } from 'react';
import {Card,CardDeck, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import logo from './logo.png';
import image1 from './image1.jpg';
import image3 from './image3.jpg';
import image4 from './image4.jpg';
import image2 from './image2.jpg';
import image5 from './image5.jpg';
import image6 from './image6.jpg';
 
export default class View extends Component {
    render() {
        return (
        <div>
        <CardDeck>
        <Card>
            <Card.Img variant="top" src={logo} />
            <Card.Body>
            <Card.Title>Example Property 1</Card.Title>
            <Card.Text>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Morbi eu suscipit tortor. Curabitur euismod porta lacus non auctor. 
                Integer quis nibh nec lectus maximus ultrices.
            </Card.Text>
             <Card.Link href="/Products">View Property Details</Card.Link>
            </Card.Body>
       </Card>
       
       <Card>
            <Card.Img variant="top" src={image4} />
            <Card.Body>
            <Card.Title>Example Property 2</Card.Title>
            <Card.Text>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Morbi eu suscipit tortor. Curabitur euismod porta lacus non auctor. 
                Integer quis nibh nec lectus maximus ultrices.
            </Card.Text>
             <Card.Link href="/Products">View Property Details</Card.Link>
            </Card.Body>
       </Card>
       <Card>
            <Card.Img variant="top" src={image3} />
            <Card.Body>
            <Card.Title>Example Property 3</Card.Title>
            <Card.Text>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Morbi eu suscipit tortor. Curabitur euismod porta lacus non auctor. 
                Integer quis nibh nec lectus maximus ultrices.
            </Card.Text>
             <Card.Link href="/Products">View Property Details</Card.Link>
            </Card.Body>
       </Card>
  </CardDeck>
  
    <br />
  <CardDeck>
        <Card>
            <Card.Img variant="top" src={image1} />
            <Card.Body>
            <Card.Title>Example Property 4</Card.Title>
            <Card.Text>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Morbi eu suscipit tortor. Curabitur euismod porta lacus non auctor. 
                Integer quis nibh nec lectus maximus ultrices.
            </Card.Text>
             <Card.Link href="/Products">View Property Details</Card.Link>
            </Card.Body>
       </Card>
       <Card>
            <Card.Img variant="top" src={image5} />
            <Card.Body>
            <Card.Title>Example Property 5</Card.Title>
            <Card.Text>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Morbi eu suscipit tortor. Curabitur euismod porta lacus non auctor. 
                Integer quis nibh nec lectus maximus ultrices.
            </Card.Text>
             <Card.Link href="/Products">View Property Details</Card.Link>
            </Card.Body>
       </Card>
       <Card>
            <Card.Img variant="top" src={logo} />
            <Card.Body>
            <Card.Title>Example Property 6</Card.Title>
            <Card.Text>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Morbi eu suscipit tortor. Curabitur euismod porta lacus non auctor. 
                Integer quis nibh nec lectus maximus ultrices.
            </Card.Text>
             <Card.Link href="/Products">View Property Details</Card.Link>
            </Card.Body>
       </Card>
  </CardDeck>


</div>
);
    }
}
