import React from 'react';
import Quantity from '../Quantity';
import ListGroup from 'react-bootstrap/ListGroup';

const DairyList = () => {

    const products = [{
        milk: { m_1: "While Milk", m_2: "Lowfat Milk", m_3: "Soy Milk", m_4: "Almond Milk" },
        cheese: { c_1: "Cream Cheese", c_2: "Brie", c_3: "Gouda", c_4: "Cheddar" }
    }];

    const dairyList = products.map((product, index) => {
        return (
            <div key={index}>
                <ListGroup horizontal className="my-3">
                    <ListGroup.Item> Milk: </ListGroup.Item>
                    <ListGroup.Item>{product.milk.m_1} <Quantity /></ListGroup.Item>
                    <ListGroup.Item>{product.milk.m_2} <Quantity /></ListGroup.Item>
                    <ListGroup.Item>{product.milk.m_3} <Quantity /></ListGroup.Item>
                    <ListGroup.Item>{product.milk.m_4} <Quantity /></ListGroup.Item>
                </ListGroup>
                <ListGroup horizontal className="my-3">
                    <ListGroup.Item>Cheese:</ListGroup.Item>
                    <ListGroup.Item>{product.cheese.c_1} <Quantity /></ListGroup.Item>
                    <ListGroup.Item>{product.cheese.c_2} <Quantity /></ListGroup.Item>
                    <ListGroup.Item>{product.cheese.c_3} <Quantity /></ListGroup.Item>
                    <ListGroup.Item>{product.cheese.c_4} <Quantity /></ListGroup.Item>
                </ListGroup>
            </div>
        )
    });

    return (
        <div>
            {dairyList}
        </div>
    );
};


export default DairyList;