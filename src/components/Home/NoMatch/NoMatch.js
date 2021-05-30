import React from 'react';
import { Link } from 'react-router-dom';

const NoMatch = () => {
    return (
        <section>
            <h4 className="text-center">No Such Routes Found</h4>
            <Link to="/home">Home</Link>
        </section>
    );
};

export default NoMatch;