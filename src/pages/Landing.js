
import React, {Component} from 'react';
import honoluluImage from '../images/honolulu.jpeg';
import { Button, Alert, Breadcrumb, Card, Image, Container } from 'react-bootstrap';


class Landing extends React.Component {
    render() {
        return (
            <div>
            {/* The container is assigned fluid to fit the image to page, the class name removes the trailing white spaces. */}
            <div>
         
            <Image src={honoluluImage} alt="Honolulu" fluid style={{ width: '100%', height: 'auto' }}/> 
            <div className="text-light overlay-text-container position-absolute top-50 start-50 translate-middle">
                <h1>Welcome to Honolulu</h1>
                <p>Discover the beauty of Hawaii</p>
            </div>
            </div>
            
            <text className='fontSize: 30px'>Come and see.</text>
            <h3 style={{ fontSize: '2.0rem', marginTop: '-0.5rem' }}>John 1:46</h3>
            <div style={{ marginRight: '.5rem', marginTop: '1rem' }}>
            <Button className='rounded-pill' variant="primary" size="lg" style={{ marginRight: '.5rem', padding: '0.5rem 1rem' }}>
                <p>Plan a Visit</p>
            </Button>{' '}
            <Button  className='rounded-pill text-white border-white' variant="outline-secondary" size="lg" >
                <text size='md'>Watch Live</text>
            </Button>
            </div>
            </div>
        );
    }
}

export default Landing;