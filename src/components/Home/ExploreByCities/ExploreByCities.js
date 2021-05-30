import React from 'react';
import './ExploreByCities.css'
const ExploreByCities = () => {
    return (
        <section className="container my-5">
            <h5 className="fw-bolder text-center text-secondary mb-4">FIND YOUR PROPERTIES</h5>
            <h2 className="fw-bolder text-center text-primary mb-5">Explore The Cities</h2>
            <div className="row">
                <div className="col-sm-12 col-lg-6 imageContainer mb-3">
                    <img className="img-fluid twoImage" src="https://i.ibb.co/wrh4qQ7/image.png" alt="" />
                    <div className="buttonContainer text-center">
                        <h3 className="fw-bolder">CHITTAGONG</h3>
                        <button className="btn btn-lg btn-warning">10 Properties</button>
                    </div>
                </div>
                <div className="col-sm-12 col-lg-6 imageContainer mb-3">
                    <img className="img-fluid twoImage" src="https://i.ibb.co/PTvSp05/image.png" alt="" />
                    <div className="buttonContainer text-center">
                        <h3 className="fw-bolder">DHAKA</h3>
                        <button className="btn btn-lg btn-warning">10 Properties</button>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12 col-lg-4 imageContainer mb-3">
                    <img className="img-fluid threeImage" src="https://i.ibb.co/W3ymb5D/jonathan-roger-LY1ey-QMFeyo-unsplash.jpg" alt="" />
                    <div className="buttonContainer text-center">
                        <h3 className="fw-bolder">KHULNA</h3>
                        <button className="btn btn-lg btn-warning">10 Properties</button>
                    </div>
                </div>
                <div className="col-sm-12 col-lg-4 imageContainer mb-3">
                    <img className="img-fluid threeImage" src="https://i.ibb.co/z5FcVg7/image.png" alt="" />
                    <div className="buttonContainer text-center">
                        <h3 className="fw-bolder">SYLHET</h3>
                        <button className="btn btn-lg btn-warning">10 Properties</button>
                    </div>
                </div>
                <div className="col-sm-12 col-lg-4 imageContainer mb-3">
                    <img className="img-fluid threeImage" src="https://i.ibb.co/wCDCcGJ/pedro-lastra-Nyvq2juw4-o-unsplash.jpg" alt="" />
                    <div className="buttonContainer text-center">
                        <h3 className="fw-bolder">RAJSHAHI</h3>
                        <button className="btn btn-lg btn-warning">10 Properties</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExploreByCities;