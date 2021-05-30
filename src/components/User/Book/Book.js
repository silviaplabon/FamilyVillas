import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import ProcessPayment from '../ProcessPayment/ProcessPayment';
import { UserContext } from '../../../App';
import UserSideBar from '../UserSideBar/UserSideBar'
import BookView from './BookView';
import { useSelector } from 'react-redux';
const Book = () => {
    const bookings = useSelector((state) => {

        return state.apartments.bookingList
    });


    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    let history = useHistory();


    const placeOrder = () => {
        const orderDetails = {
            ...loggedInUser,
            apartment: bookings,
            orderTime: new Date().toDateString('dd/MM/yyyy')
        };
        console.log(orderDetails)
        fetch('https://safe-reaches-28400.herokuapp.com/bookApartment', {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(orderDetails)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {

                    alert("Your order placed successfully");
                    history.push("/")
                }
            })
    }

    return (
        <section>

            <div className="row w-100">
                <div className="col-md-3">
                    <UserSideBar></UserSideBar>
                </div>
                <div className="col-md-8 mt-5 py-5">
                    <table class="table table-striped table-hover table-responsive-sm">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Price</th>
                                <th scope="col">Size</th>
                                <th scope="col">Location</th>

                            </tr>
                        </thead>
                        {
                            bookings.map(booking => <BookView booking={booking}></BookView>)
                        }
                    </table>
                    {
                       bookings && <button onClick={placeOrder} className="text-center btn-lg btn-warning">Place Order</button>
                    }
                </div>
            </div>
        </section>
    );
};

export default Book;