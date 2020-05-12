import React, { useState, useEffect } from "react";
import axios from 'axios';

const FormCategories = () => {

    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [selected, setSelected] = useState([]);
    const [order, setOrder] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/categories')
            .then(response => {
                setCategories(response.data);
            });
    }, []);

    const categoryList = categories.map(cat => {
        return (
            <p key={cat.id}
                onClick={() => showProductHandler(cat.id)}>
                {cat.name}
            </p>
        );
    });

    const showProductHandler = (id) => {
        setProducts([]);
        axios.get('http://localhost:3001/products/?catId=' + id)
            .then(response => {
                setProducts(response.data);
            });
    };

    const addItemHandler = (e, prodid) => {
        setSelected({
            name: e.target.name,
            quantity: e.target.value,
            prodId: e.target.id,
            catId: prodid,
        })
    }

    const addToOrderHandler = () => {
        setOrder((order) => [...order, selected]);
    }

    const productList = products.map(prod => {
        return (
            <div key={prod.id}>
                <h2>{prod.name}</h2>
                <label htmlFor="">Select quantity</label>
                <input type="number" name={prod.name} id={prod.id} onChange={(event) => addItemHandler(event, prod.catId)} min="0" max="5" />
                <button onClick={addToOrderHandler}>PreOrder</button>
            </div>
        );
    });

    const orderList = order.map((o) => {
        return (
            <p key={o.prodId} >
                {o.name}: {o.quantity}</p>
        );
    });

    return (
        <div>
            <div>
                <h1>Choose a category</h1>
                <p>{categoryList}</p>
                <p>{productList}</p>
            </div>
            <div>
                <h2>Your preorder</h2>
                <p>{orderList}</p>
            </div>
        </div>
    );
}

export default FormCategories;




/* import React, { Component } from 'react';
import VegetableList from './ProductList/VegetableList';
import MeatList from './ProductList/MeatList';
import DairyList from './ProductList/DairyList';
import BakeryList from './ProductList/BakeryList';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';


class FormAddToOrder extends Component {
    state = {
        category: 'Selection',
        quantity: '',
        newItemInput: '',
        buyItems: [],
        object: {}
    }

    handleChange(e) {
        this.setState({
            category: e.target.value,
        })
    }

    submitHandler = (e) => {
        e.preventDefault();
        console.log('You selected ' + this.state.quantity);

        const newItemInput = this.state.newItemInput;
        const newQuantity = this.state.quantity;
        const obj = { 'item': newItemInput, 'inputType': newQuantity };
        this.setState({
            buyItems: [...this.state.buyItems, obj]
        });

    }

    changeQuantityHandler = (e) => {
        this.setState({
            quantity: e.target.value,
        });
    }

    render() {
        return (
            <div>
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
                </Form>
                <div>
                    <h2>{this.state.category == 'vegetable' ? <VegetableList changeQuantityHandler={this.changeQuantityHandler} quantity={this.state.quantity} submitHandler={this.submitHandler} /> : ''}</h2>
                    <h2>{this.state.category == 'meat' ? <MeatList changeQuantityHandler={this.changeQuantityHandler} quantity={this.state.quantity} submitHandler={this.submitHandler} /> : ''}</h2>
                    <h2>{this.state.category == 'dairy' ? <DairyList changeQuantityHandler={this.changeQuantityHandler} quantity={this.state.quantity} submitHandler={this.submitHandler} /> : ''}</h2>
                    <h2>{this.state.category == 'bakery' ? <BakeryList changeQuantityHandler={this.changeQuantityHandler} quantity={this.state.quantity} submitHandler={this.submitHandler} /> : ''}</h2>
                </div>
            </div>
        );
    }
}

export default FormAddToOrder;
 */





