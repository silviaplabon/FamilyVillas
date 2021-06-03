import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faBed, faBath, faBuilding } from '@fortawesome/free-solid-svg-icons'
import './FeaturePropertiesDetail.css'
import { useHistory } from 'react-router';

const FeaturedPropertiesDetail = (props) => {
    const history = useHistory();
    const { name, image, location, bed, size, price, bathroom, _id } = props.property;
    const handleDetailsApartment = (_id) => {
        history.push(`/apartment/feature/${_id}`)
    }

    return (
        <div className="col mt-5" >
            <div className="card h-100 cardFeature shadow">
                <div className="imageFeaturedProperties" style={{ height: '55%' }}>
                    <img src={image} className="h-100 w-100" alt="..." />


                </div>

                <div className="card-body py-0 cardBodyFeaturedProperties" style={{ height: '35%' }}>
                    <h5 className="text-center mt-1 h5FeaturedProperties">{name}</h5>
                    <p className="  text-center  pFeaturedProperties"><FontAwesomeIcon icon={faMapMarkerAlt} /><span className="ms-2">{location}</span></p>
                    <div className="d-flex justify-content-center align-items-between attributeSectionFeature">
                        <div className="attributeFeaturedProperties d-flex " ><FontAwesomeIcon className="mt-1" icon={faBed} /><span className="ms-1">{bed}</span></div>
                        <div className="attributeFeaturedProperties  marginFeaturedProperties"><FontAwesomeIcon icon={faBath} /><span className="ms-1">{bathroom}</span></div>
                        <div className=" attributeFeaturedProperties marginFeaturedProperties marginSizeFeature"><FontAwesomeIcon icon={faBuilding} /><span className="ms-1">{size}</span></div>

                    </div>
                </div>
                <div className="priceFeaturedProperties mb-1" style={{ height: '12%' }}>
                    <hr className="m-auto w-75"></hr>
                    <div className="d-flex justify-content-between align-items-between mx-4 mt-1 mb-1">
                        <h6 className="text-center mt-0">${price}</h6>
                        <button className="OrderBtn1 btn-primary" onClick={() => handleDetailsApartment(_id)}>Feature</button>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default FeaturedPropertiesDetail;