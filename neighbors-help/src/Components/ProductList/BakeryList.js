/* import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const BakeryList = (props) => {

    const products = [{
        bread: ["Rye", "Sourdough", "Cibatta", "Whole-White"],
        bakery: ["Bagles", "Muffin", "Cinnamon Roll", "Pie"]
    }];

    const bakeryList = products.map((product, index) => {
        return (
            <div key={index}>
                <Form onSubmit={props.submitHandler}>
                    <ListGroup horizontal className="my-3">
                        <ListGroup.Item>Bread: </ListGroup.Item>
                        {product.bread.map((element, id) => {
                            return <ListGroup.Item key={id}>{element} <Form.Control size="sm" type="number" min="0" max="5" placeholder="Select quantity" onChange={props.changeQuantityHandler} name="newItemInput" /> </ListGroup.Item>
                        })}
                    </ListGroup>
                    <ListGroup horizontal className="my-3">
                        <ListGroup.Item>Bakery: </ListGroup.Item>
                        {product.bakery.map((element, id) => {
                            return <ListGroup.Item key={id}>{element} <Form.Control size="sm" type="number" min="0" max="5" placeholder="Select quantity" onChange={props.changeQuantityHandler} name="newItemInput" /> </ListGroup.Item>
                        })}
                    </ListGroup>
                    <Button type="submit">Submit</Button>
                </Form>
            </div >
        )
    });

    return (
        <div>
            {bakeryList}
        </div>
    );
};


export default BakeryList; */