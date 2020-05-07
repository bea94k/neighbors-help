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
    }

    handleChange(e) {
        this.setState({
            category: e.target.value,
        })
    }

    addProductHandler() {
        return (<p>Product</p>);
    }


    render() {
        return (
            <Form>
                <Form.Group controlId="exampleForm.SelectCustomSizeSm">
                    <Form.Label htmlFor="product">Choose a category:</Form.Label>
                    <Form.Control as="select" size="sm" id="product" onChange={this.handleChange.bind(this)} value={this.state.category}>
                        <option value="select" id="category">Select a category</option>
                        <option value="vegetable" id="vegetable">Vegetable</option>
                        <option value="meat" id="meat" >Meat</option>
                        <option value="dairy" id="dairy" >Dairy Products</option>
                        <option value="bakery" id="bakery" >Bread</option>
                    </Form.Control>

                </Form.Group>
                <Form.Group controlId="exampleForm.SelectCustomSizeSm">
                    <h2>{this.state.category == 'vegetable' ? <VegetableList /> : ''}</h2>
                    <h2>{this.state.category == 'meat' ? <MeatList /> : ''}</h2>
                    <h2>{this.state.category == 'dairy' ? <DairyList /> : ''}</h2>
                    <h2>{this.state.category == 'bakery' ? <BakeryList /> : ''}</h2>
                    <button type="submit" onClick={this.addProductHandler.bind(this)}>Add Products</button>
                </Form.Group>
            </Form>

        );
    }
}

export default FormAddToOrder;
