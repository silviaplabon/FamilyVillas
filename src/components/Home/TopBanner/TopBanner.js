import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import './TopBanner.css';

const TopBanner = () => {
    return (
        <div>
            <Row className='m-0'>
                <Col>
                    <div className='container text-center mt-5 pt-5'>
                        <div className='p-5'>
                            <h1 className='bannerTitle pt-2 pb-2'>Find Your Future <br />Dream Home</h1>
                            <p className='pt-3 pb-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus<br /> malesuada neque sed pellentesque ullamcorper.<br />Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <Button className='bannerBtn mt-2' variant='none'>Get Started</Button>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default TopBanner;