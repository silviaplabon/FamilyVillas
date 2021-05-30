import React from 'react';

const BookView = (props) => {
    const { price, location, size, name } = props.booking;
    
    return (
        <tbody>
            <tr>
                <td>{name}</td>
                <td>{price}</td>
                <td>{size}</td>
                <td>{location}</td>
                
            </tr>
        </tbody>
    );
};

export default BookView;