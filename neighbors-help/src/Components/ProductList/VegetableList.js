import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const VegetableList = (props) => {

    const products = [{
        vegetable: ["Tomato", "Onion", "Carrot", "Potato"],
        fruit: ["Strawberry", "Apple", "Orange", "Pear"]
    }];

    const vegetableList = products.map((product, index) => {
        return (
            <div key={index}>
                <Form onSubmit={props.submitHandler}>
                    <ListGroup horizontal className="my-3" controlId="veg">
                        <ListGroup.Item><Form.Label controlId="veg" htmlFor="veg"> Vegetable: </Form.Label></ListGroup.Item>
                        {product.vegetable.map(element => {
                            return <ListGroup.Item>{element} <Form.Control controlId="veg" size="sm" type="number" min="0" max="5" placeholder="Select quantity" onChange={props.changeQuantityHandler} name="vegetable" /> </ListGroup.Item>
                        })}
                    </ListGroup>
                    <ListGroup horizontal className="my-3" controlId="fruit">
                        <ListGroup.Item><Form.Label controlId="fruit" htmlFor="fruit">Fruit: </Form.Label></ListGroup.Item>
                        {product.fruit.map(element => {
                            return <ListGroup.Item>{element}<Form.Control controlId="fruit" size="sm" type="number" min="0" max="5" placeholder="Select quantity" onChange={props.changeQuantityHandler} name="fruit" /> </ListGroup.Item>
                        })}
                    </ListGroup>
                    <Button type="submit">Submit</Button>
                </Form>
            </div >
        )
    });
    return (
        <div>
            {vegetableList}
        </div>
    );
};

export default VegetableList;