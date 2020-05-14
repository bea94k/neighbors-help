// preview of chosen porducts while placing order
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


const ViewAddToOrder = () => {

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/orders')
            .then(response => {
                setOrders(response.data);
                console.log(orders);
            });
    }, []);

    const ordersList = orders.map(({ id, order }) => {
        return (
            <Card>
                <ListGroup variant="flush">
                    <p key={id}>Order ID: {id}</p>
                    {order.map(order => {
                        return (
                            <ListGroup.Item>
                                x {order.name}: {order.quantity}
                            </ListGroup.Item>
                        );
                    })}
                </ListGroup>
            </Card >
        );
    });

    return (
        <>
            <Card.Title>All Orders:</Card.Title>
            <p>{ordersList}</p>
        </>
    );
}

export default ViewAddToOrder;
