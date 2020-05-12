/* import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const DairyList = (props) => {

    const products = [{
        milk: ["While Milk", "Lowfat Milk", "Soy Milk", "Almond Milk"],
        cheese: ["Cream Cheese", "Brie", "Gouda", "Cheddar"]
    }];

    const dairyList = products.map((product, index) => {

        return (
            <div key={index} >
                <Form onSubmit={props.submitHandler}>
                    <ListGroup horizontal className="my-3">
                        <ListGroup.Item> Milk: </ListGroup.Item>
                        {product.milk.map((element, id) => {
                            return <ListGroup.Item key={id}>{element} <Form.Control size="sm" type="number" min="0" max="5" placeholder="Select quantity" onChange={props.changeQuantityHandler} name="milk" /></ListGroup.Item>
                        })}
                    </ListGroup>
                    <ListGroup horizontal className="my-3">
                        <ListGroup.Item>Cheese:</ListGroup.Item>
                        {product.cheese.map((element, id) => {
                            return <ListGroup.Item key={id}>{element}  <Form.Control size="sm" type="number" min="0" max="5" placeholder="Select quantity" onChange={props.changeQuantityHandler} name="cheese" /></ListGroup.Item>
                        })}
                    </ListGroup>
                    <Button type="submit">Submit</Button>
                </Form>
            </div>
        )
    });

    return (
        <div>
            {dairyList}
        </div>
    );
};


export default DairyList; */