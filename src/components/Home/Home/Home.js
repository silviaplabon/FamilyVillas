import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Agents from '../Agents/Agents';
import ExploreByCities from '../ExploreByCities/ExploreByCities';
import FeaturedProperties from '../FeaturedProperties/FeaturedProperties';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';


const Home = () => {
    return (
        <>
         <Header></Header>
         <AboutUs></AboutUs>
         <FeaturedProperties></FeaturedProperties>
         <ExploreByCities></ExploreByCities>
         <Agents></Agents>
         <Footer></Footer>
        </>
    );
};

export default Home;