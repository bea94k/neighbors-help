import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';

class Quantity extends Component {

    state = {
        quantity: null,
    }

    handleChangeQuantity(e) {
        this.setState({
            quantity: e.target.value,
        })
    }

    render() {

        return (
            <Form>
                <Form.Group controlId="exampleForm.SelectCustomSizeSm">
                    <Form.Label htmlFor="quantity"></Form.Label>
                    <Form.Control as="select" size="sm" id="quantity" onChange={this.handleChangeQuantity.bind(this)} value={this.state.quantity}>
                        <option value="quantyty" >Select Quantity</option>
                        <option value="1" >1</option>
                        <option value="2" >2</option>
                        <option value="3" >3</option>
                        <option value="4" >4</option>
                        <option value="5" >5</option>
                    </Form.Control>
                </Form.Group>
            </Form>
        );
    }
}

export default Quantity;
