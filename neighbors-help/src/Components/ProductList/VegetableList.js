import React from 'react';
import Quantity from '../Quantity';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';

const VegetableList = () => {

    const products = [{
        vegetable: { v_1: "Tomato", v_2: "Onion", v_3: "Carrot", v_4: "Potato" },
        fruit: { f_1: "Strawberry", f_2: "Orange", f_3: "Peach", f_4: "Pear" }
    }];

    const vegetableList = products.map((product, index) => {
        return (
            <div key={index}>
                <ListGroup horizontal className="my-3">
                    <ListGroup.Item>Vegetable:</ListGroup.Item>
                    <ListGroup.Item>{product.vegetable.v_1} <Quantity /></ ListGroup.Item>
                    <ListGroup.Item>{product.vegetable.v_2} <Quantity /></ ListGroup.Item>
                    <ListGroup.Item>{product.vegetable.v_3} <Quantity /></ ListGroup.Item>
                    <ListGroup.Item>{product.vegetable.v_4} <Quantity /></ ListGroup.Item>
                </ListGroup>
                <ListGroup horizontal className="my-3">
                    <ListGroup.Item>Fruit:</ListGroup.Item>
                    <ListGroup.Item>{product.fruit.f_1} <Quantity /></ ListGroup.Item>
                    <ListGroup.Item>{product.fruit.f_2} <Quantity /></ ListGroup.Item>
                    <ListGroup.Item>{product.fruit.f_3} <Quantity /></ ListGroup.Item>
                    <ListGroup.Item>{product.fruit.f_4} <Quantity /></ ListGroup.Item>
                </ListGroup>
            </div>
        )
    });

    return (
        <div>
            {vegetableList}
        </div>
    );
};


export default VegetableList;