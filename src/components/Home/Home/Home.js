import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Agents from '../Agents/Agents';
import ExploreByCities from '../ExploreByCities/ExploreByCities';
import FeaturedProperties from '../FeaturedProperties/FeaturedProperties';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <>
         <Header></Header>
         <AboutUs></AboutUs>
         <FeaturedProperties></FeaturedProperties>
         <ExploreByCities></ExploreByCities>
         <Agents></Agents>
         <Testimonial></Testimonial>
         <Footer></Footer>
        </>
    );
};

export default Home;