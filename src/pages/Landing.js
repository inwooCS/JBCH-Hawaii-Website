
import React from 'react';
import honoluluImage from '../images/honolulu.jpeg';
import { Button, Image, Container} from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

class Landing extends React.Component {
    render() {
        return (
            <div>
                <Carousel>
                    <Carousel.Item>
                        <Image src={honoluluImage} alt="Honolulu" fluid style={{ width: '100%', maxHeight: '500px', objectFit: 'cover' }} />
                        <Carousel.Caption style={{ margin: '120px',textAlign: 'center', color: 'white'}}>
                            <h1 style={{fontSize: '50px' }}>About Us</h1>
                            <p style={{fontSize: '36px' }}>Explore our church</p>
                            <Button variant="primary" size="lg">Read more</Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image src={honoluluImage} alt="Honolulu" fluid style={{ width: '100%', maxHeight: '500px', objectFit: 'cover' }} />
                        <Carousel.Caption style={{ margin: '120px',textAlign: 'center', color: 'white'}}>
                            <h1 style={{fontSize: '50px' }}>Sermon catch-up</h1>
                            <p style={{fontSize: '36px' }}>Listen at home</p>
                            <Button variant="primary" size="lg">Sermon series</Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <div>
                    <Container>
                        <h1 >twest</h1>
                    </Container>
                    {/* #abc9fb */}
                    <h1> hello world</h1>
                </div>
            </div>
        );
    }
}

export default Landing;