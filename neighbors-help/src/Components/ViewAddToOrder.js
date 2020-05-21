// preview of chosen porducts while placing order
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './ViewAddToOrder.css'


const ViewAddToOrder = () => {

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/orders')
            .then(response => {
                setOrders(response.data);
                console.log(orders);

            });
    }, []);

    const ordersList = orders.map(({ id, order, username, address }) => {
        return (
            <Card className="ordercard">
                <ListGroup variant="flush">

                    <p key={id}>Order ID: {id}</p>
                    {order.map(o => {
                        return (
                            <ListGroup.Item>
                                x {o.name}: {o.quantity}
                                {o.username}
                                {o.address}
                            </ListGroup.Item>
                        );
                    })}
                </ListGroup>
            </Card >
        );
    });

    return (
        <div className="cardtitle">
            <Card.Title><h3>All Orders:</h3></Card.Title>
            <p>{ordersList}</p>
        </div>
    );
}

export default ViewAddToOrder;
