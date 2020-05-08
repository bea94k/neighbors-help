import React from 'react';
import Quantity from '../Quantity';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const MeatList = (props) => {

    const products = [{
        chicken: ["Breast", "Legs", "Wing"],
        beef: ["Rib-Steak", "Sirloin", "Shank"],
        pork: ["Ham", "Belly", "Spine"]
    }];
    //console.log(products);

    const meatList = products.map((product, index) => {

        return (
            <div key={index}>
                <Form>
                    <ListGroup horizontal className="my-3">
                        <ListGroup.Item> Chicken: </ListGroup.Item>
                        {product.chicken.map(element => {
                            return <ListGroup.Item>{element} <Form.Control size="sm" type="number" min="0" max="5" placeholder="Select quantity" onChange={props.changeQuantityHandler} name="chicken" /></ListGroup.Item>
                        })}
                    </ListGroup>
                    <ListGroup horizontal className="my-3">
                        <ListGroup.Item>Beef:</ListGroup.Item>
                        {product.beef.map(element => {
                            return <ListGroup.Item>{element}  <Form.Control size="sm" type="number" min="0" max="5" placeholder="Select quantity" onChange={props.changeQuantityHandler} name="beef" /></ListGroup.Item>
                        })}
                    </ListGroup>
                    <ListGroup horizontal className="my-3">
                        <ListGroup.Item>Pork:</ListGroup.Item>
                        {product.pork.map(element => {
                            return <ListGroup.Item>{element}  <Form.Control size="sm" type="number" min="1" max="5" placeholder="Select quantity" onChange={props.changeQuantityHandler} name="pork" /></ListGroup.Item>
                        })}
                    </ListGroup>
                    <Button type="submit">Submit</Button>
                </Form>
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