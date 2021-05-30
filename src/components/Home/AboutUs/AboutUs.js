import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCartArrowDown, faPeopleCarry, faUsers } from '@fortawesome/free-solid-svg-icons';
import CountUp from 'react-countup';
import './AboutUs.css'
const AboutUs = () => {
    return (

        <section className="container card my-5 border-0">
            <div className="row g-5">
                <div className="col-lg-4 col-md-12">
                    <img className="w-100" src="https://i.ibb.co/tK9MMCp/image.png" alt="..." />
                </div>
                <div className="col-lg-8 col-sm-12">
                    <div className="card-body d-flex flex-column">
                        <div>
                            <h4 className="text-secondary fw-bolder btmMargin">ABOUT US</h4>
                            <h3 className="fw-bolder btmMargin">We Help Find Your Properties</h3>
                            <p className="text-secondary btmMargin">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum suscipit quis aliquam assumenda possimus ea ipsum rerum et laudantium exercitationem voluptatem incidunt est cumque dolor commodi culpa delectus eaque ut sequi placeat, atque tempora omnis neque quod. Sequi earum odio eius quisquam voluptate architecto non dolores, corrupti hic vero repudiandae.</p>
                            <button className="btn btn-lg btn-danger">Explore More <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button>
                        </div>

                        <hr />
                        <div className="d-flex justify-content-between btmMargin">
                            <div className="">
                                <h6 className="title">Clients Satisfied</h6>
                                <FontAwesomeIcon icon={faPeopleCarry} className="iconUsed" ></FontAwesomeIcon>
                                <span className="numberCount"> <CountUp end={123} /></span>
                            </div>
                            <div className="">
                                <h6 className="title">Home Available</h6>
                                <FontAwesomeIcon icon={faCartArrowDown} className="iconUsed" ></FontAwesomeIcon>
                                <span className="numberCount"> <CountUp end={53} /></span>
                            </div>
                            <div className="">
                                <h6 className="title">Agents Available</h6>
                                <FontAwesomeIcon icon={faUsers} className="iconUsed"></FontAwesomeIcon>
                                <span className="numberCount"> <CountUp end={10} /></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;