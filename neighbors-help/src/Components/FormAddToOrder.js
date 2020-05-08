import React, { Component } from 'react';
import VegetableList from './ProductList/VegetableList';
import MeatList from './ProductList/MeatList';
import DairyList from './ProductList/DairyList';
import BakeryList from './ProductList/BakeryList';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';


class FormAddToOrder extends Component {
    state = {
        category: 'Selection',
        quantity: 0,
    }

    handleChange(e) {
        this.setState({
            category: e.target.value,
        })
    }

    submitHandler = (e) => {
        e.preventDefault();
        console.log('You selected ' + this.state.quantity);
    }

    changeQuantityHandler = (e) => {
        this.setState({
            quantity: e.target.value,
        });
    }

    render() {
        return (
            <Form>
                <Form.Group>
                    <Form.Label htmlFor="product">Choose a category:</Form.Label>
                    <Form.Control as="select" size="sm" id="product" onChange={this.handleChange.bind(this)} value={this.state.category}>
                        <option value="select" id="category">Select a category</option>
                        <option value="vegetable" id="vegetable">Vegetable</option>
                        <option value="meat" id="meat" >Meat</option>
                        <option value="dairy" id="dairy" >Dairy Products</option>
                        <option value="bakery" id="bakery" >Bread</option>
                    </Form.Control>

                </Form.Group>
                <Form.Group >
                    <h2>{this.state.category == 'vegetable' ? <VegetableList changeQuantityHandler={this.changeQuantityHandler} quantity={this.state.quantity} submitHandler={this.submitHandler} /> : ''}</h2>
                    <h2>{this.state.category == 'meat' ? <MeatList changeQuantityHandler={this.changeQuantityHandler} quantity={this.state.quantity} submitHandler={this.submitHandler} /> : ''}</h2>
                    <h2>{this.state.category == 'dairy' ? <DairyList changeQuantityHandler={this.changeQuantityHandler} quantity={this.state.quantity} submitHandler={this.submitHandler} /> : ''}</h2>
                    <h2>{this.state.category == 'bakery' ? <BakeryList changeQuantityHandler={this.changeQuantityHandler} quantity={this.state.quantity} submitHandler={this.submitHandler} /> : ''}</h2>
                </Form.Group>
            </Form>

        );
    }
}

export default FormAddToOrder;
