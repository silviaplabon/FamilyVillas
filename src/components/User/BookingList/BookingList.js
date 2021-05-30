import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import BookingListView from '../BookingListView/BookingListView';
import UserSideBar from '../UserSideBar/UserSideBar'
const BookingList = () => {
    const [bookings, setBookings] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    // Retrieve bookings using mail address
    useEffect(() => {
        fetch('https://guarded-dawn-98055.herokuapp.com/bookings?email=' + loggedInUser?.email, {
            method: "GET",
            headers: {
                'Content-type': 'application/json',
                authorization: `Bearer ${sessionStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => setBookings(data))
    }, []);

    console.log(bookings)
    return (
        <section className="row w-100">
            <div className="col-md-3">
                <UserSideBar></UserSideBar>
            </div>
            <div className="col-md-8 mt-5 py-5">
                <h5 className="text-center my-5">Showing orders of: {loggedInUser.email}</h5>
                <table class="table table-striped table-hover table-responsive-sm">
                    <thead>
                        <tr>
                            <th scope="col">Apartment Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Size</th>
                            <th scope="col">Location</th>
                        </tr>
                    </thead>
                    {
                        bookings.map(booking => <BookingListView booking={booking}></BookingListView>)
                    }
                </table>
            </div>
            
        </section>
    );
};

export default BookingList;