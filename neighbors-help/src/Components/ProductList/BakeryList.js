import React from 'react';
import Quantity from '../Quantity';
import ListGroup from 'react-bootstrap/ListGroup';

const BakeryList = () => {

    const products = [{
        bread: { b_1: "Rye", b_2: "Sourdough", b_3: "Cibatta", b_4: "Whole-White" },
        bakery: { ba_1: "Bagles", ba_2: "Muffin", ba_3: "Cinnamon Roll", ba_4: "Pie" }
    }];

    const bakeryList = products.map((product, index) => {
        return (
            <div key={index}>
                <ListGroup horizontal className="my-3">
                    <ListGroup.Item>Bread: </ListGroup.Item>
                    <ListGroup.Item>{product.bread.b_1} <Quantity /></ListGroup.Item>
                    <ListGroup.Item>{product.bread.b_2} <Quantity /></ListGroup.Item>
                    <ListGroup.Item>{product.bread.b_3} <Quantity /></ListGroup.Item>
                    <ListGroup.Item>{product.bread.b_4} <Quantity /></ListGroup.Item>
                </ListGroup>
                <ListGroup horizontal className="my-3">
                    <ListGroup.Item>Bakery: </ListGroup.Item>
                    <ListGroup.Item>{product.bakery.ba_1} <Quantity /></ListGroup.Item>
                    <ListGroup.Item>{product.bakery.ba_2} <Quantity /></ListGroup.Item>
                    <ListGroup.Item>{product.bakery.ba_3} <Quantity /></ListGroup.Item>
                    <ListGroup.Item>{product.bakery.ba_4} <Quantity /></ListGroup.Item>
                </ListGroup>
            </div>
        )
    });

    return (
        <div>
            {bakeryList}
        </div>
    );
};


export default BakeryList;