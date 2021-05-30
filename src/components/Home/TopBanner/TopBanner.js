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
                            
                            <Button className='bannerBtn mt-2' variant='none'>Get Started</Button>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default TopBanner;