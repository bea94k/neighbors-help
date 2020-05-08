import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import { Link } from "react-router-dom";

const PostCard = ({ username, firstname, address, phone, order, link }) => {
    console.log(order);
    let i;
    let extractedOrder = [];
    for (i = 0; i < order.length; i++) {
        let productSet = `${order[i].name} - ${order[i].quantity}; `;
        extractedOrder.push(productSet);
    }

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Header as="h4">{firstname}</Card.Header>
            <ListGroup variant="flush">
                <ListGroup.Item><p>{username}</p></ListGroup.Item>
                <ListGroup.Item><p>{address}</p></ListGroup.Item>
                <ListGroup.Item><p>{phone}</p></ListGroup.Item>
                <ListGroup.Item><p>{extractedOrder}</p></ListGroup.Item>
            </ListGroup>
            {/*  <Link to={link}>Read more</Link> */}
        </Card>
    );
};

export default PostCard;
