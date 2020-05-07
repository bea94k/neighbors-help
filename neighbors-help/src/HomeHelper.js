// homepgae for helper
// display list of orders from database

import React, { useState, useEffect } from 'react';
import axios from 'axios';

import OrderCard from './Components/OrderCard';

const HomeHelper = () => {
    const [order, setOrder] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3005/orders')
            .then((response) => {
                const ordersFromDB = response.data.slice(0, 15);
                setOrder(ordersFromDB);
                console.log(ordersFromDB);
            })
    }, []);


    const OrderList = order.map((o) => {
        return (
            <OrderCard
                key={o.id}
                username={o.username}
                firstname={o.firstname}
                address={o.address}
                phone={o.phone}
                order={o.order}
            />
        )
    })


    return (
        <div>
            HOME HELPER
            {OrderList}
        </div>
    );
}

export default HomeHelper;
