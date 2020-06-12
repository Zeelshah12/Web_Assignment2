import React, { Component } from 'react';
import {Alert} from 'react-bootstrap';

export default class Products extends Component {
    render() {
        return (
    
                <div className="wrapper">
                   <Alert variant="success" className="mt-5">
                    <Alert.Heading>Hey, nice to see you</Alert.Heading>
                    <p>
                        Yeah, you successfully read this important alert message. 
                        Development of this website is in progress.
                            
                    </p>
                    </Alert>
                </div>
        );
    }
}

