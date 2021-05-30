import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col } from 'react-bootstrap';
import './AgentsCard.css';


const AgentsCard = ({agentData}) => {
    const {img,name,position}=agentData;
    return (
        <Col className='m-auto pt-4' xs={10} sm={6} md={3}>
            <div className='agentCard p-3 shadow'>
                <div className='agentCardImg'>
                    <img src={img} />
                    <div className='d-flex align-items-center justify-content-center agentCardIcon'>
                        <FontAwesomeIcon className='p-1 m-1' icon={faFacebook} />
                        <FontAwesomeIcon className='p-1 m-1' icon={faTwitter} />
                        <FontAwesomeIcon className='p-1 m-1' icon={faLinkedin} />
                        <FontAwesomeIcon className='p-1 m-1' icon={faInstagram} />
                    </div>
                </div>
                <h4>{name}</h4>
                <div className='d-flex align-items-center justify-content-between'>
                    <span className='text-muted'>{position}</span>
                    <div style={{color:'#FDBD4C'}}>
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                    </div>
                </div>
            </div>
        </Col>
    );
};

export default AgentsCard;