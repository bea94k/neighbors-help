import React from 'react';
import Quantity from '../Quantity';
import ListGroup from 'react-bootstrap/ListGroup';

const MeatList = () => {

    const products = [{
        chicken: { c_1: "Breast", c_2: "Legs", c_3: "Wing" },
        beef: { b_1: "Rib-Steak", b_2: "Sirloin", b_3: "Shank" },
        pork: { p_1: "Ham", p_2: "Belly", p_3: "Spine" }
    }];
    //console.log(products);

    const meatList = products.map((product, index) => {

        return (
            <div key={index}>
                <ListGroup horizontal className="my-3">
                    <ListGroup.Item>Chicken: </ListGroup.Item>
                    <ListGroup.Item>{product.chicken.c_1} <Quantity /></ListGroup.Item>
                    <ListGroup.Item>{product.chicken.c_2} <Quantity /></ListGroup.Item>
                    <ListGroup.Item>{product.chicken.c_3} <Quantity /></ListGroup.Item>
                </ListGroup>
                <ListGroup horizontal className="my-3">
                    <ListGroup.Item>Beef: </ListGroup.Item>
                    <ListGroup.Item>{product.beef.b_1} <Quantity /></ListGroup.Item>
                    <ListGroup.Item>{product.beef.b_2} <Quantity /></ListGroup.Item>
                    <ListGroup.Item>{product.beef.b_3} <Quantity /></ListGroup.Item>
                </ListGroup>
                <ListGroup horizontal>
                    <ListGroup.Item>Pork:</ListGroup.Item>
                    <ListGroup.Item>{product.pork.p_1} <Quantity /></ListGroup.Item>
                    <ListGroup.Item>{product.pork.p_2} <Quantity /></ListGroup.Item>
                    <ListGroup.Item>{product.pork.p_3} <Quantity /></ListGroup.Item>
                </ListGroup>
            </div>
        )
    });

    return (
        <div>
            {meatList}
        </div>
    );
};


export default MeatList;