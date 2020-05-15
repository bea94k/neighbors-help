import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

/* import { Link } from "react-router-dom"; */

const PostCard = ({ username, firstname, address, phone, order, link }) => {
    const mappedOrder = order.map((productSet) => {
        return (
            <p>{productSet.name}: {productSet.quantity}</p>
        )
    })

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Header as="h4">{username}</Card.Header>
            <ListGroup variant="flush">
                <ListGroup.Item><p>{address}</p></ListGroup.Item>
                <ListGroup.Item><p>Order:</p>{mappedOrder}</ListGroup.Item>
            </ListGroup>
            {/*  <Link to={link}>Read more</Link> */}
        </Card>
    );
};

export default PostCard;
