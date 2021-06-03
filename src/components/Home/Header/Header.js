import React from 'react';
import NavBar from '../NavBar/NavBar';
import TopBanner from '../TopBanner/TopBanner';
import './Header.css';

const Header = () => {
    return (
        <div>
            <div className='headerBg '>
                <div className='childHeaderBg'>
                    <NavBar/>
                    <TopBanner/>
                </div>
            </div>
        </div>
    );
};

export default Header;