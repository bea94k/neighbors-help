// homepgae for helper
// display list of orders from database

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./HomeHelper.css"
import OrderCard from './Components/OrderCard';
import CardColumns from 'react-bootstrap/CardColumns';

// TO DO: when orders db empty, make the message say it's empty, not hang on "loading..."

const HomeHelper = () => {
    const [order, setOrder] = useState([]);
    const [message, setMessage] = useState();

    useEffect(() => {
        setMessage(<h4>Loading...</h4>);
        axios.get('http://localhost:3001/orders')
            .then((response) => {
                const ordersFromDB = response.data.slice(0, 15);
                setOrder(ordersFromDB);
                console.log(ordersFromDB);
            })
            .catch((err) => {
                setMessage(`Something went wrong. ${err}`)
            })
    }, []);


    const OrderList = order.length > 0 ? order.map((o) => {
        // if the orders list is not empty, map and display the orders from DB
        console.log(o);
        return (
            <OrderCard 
                key={o.id}
                username={o.username.name}
                firstname={o.firstname}
                address={o.address.place}
                phone={o.phone}
                order={o.order}
            />

        )
        // if the orders db empty, display a "no orders found" message
    }) : <h4>{message}</h4>


    return (
        <div>
            <h2>Who do you want to help today?</h2>
            <CardColumns className="cards">
                {OrderList}
            </CardColumns>
        </div>
    );

};

export default HomeHelper;
