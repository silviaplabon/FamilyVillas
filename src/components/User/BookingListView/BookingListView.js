import React from 'react';

const BookingListView = (props) => {
    const { name,price,size,location } = props.booking;
    

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

export default BookingListView;