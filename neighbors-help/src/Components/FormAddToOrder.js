import React, { useState, useEffect } from "react";
import axios from 'axios';
import './FormAddToOrder.css';
import Button from 'react-bootstrap/Button';

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
            <p className="categoryCard" key={cat.id}
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
            <div key={prod.id} className="product">
                <h2>{prod.name}</h2>
                <label htmlFor="">Select quantity</label>
                <input type="number" name={prod.name} id={prod.id} onChange={(event) => addItemHandler(event, prod.catId)} min="0" max="5" />
                <Button variant="outline-success" onClick={addToOrderHandler}>PreOrder</Button>
            </div>
        );
    });

    const orderList = order.map((o) => {
        return (
            <p key={o.prodId} className="preOrder">
                x {o.name}: {o.quantity}</p>
        );
    });

    const postOrderHandler = () => {
        axios.post('http://localhost:3001/orders', { order }).then(response => {
            console.log(response.data);
            setOrder([]);
        });
    };

    return (
        <div>
            <div className="category">
                <h1>Choose a category</h1>
                <div>{categoryList}</div>
                <div>{productList}</div>
            </div>
            <div>
                {orderList == 0 ? (<p>Please select products</p>) : (
                    <div>
                        <h2>Your preorder</h2>
                        <p>{orderList}</p>
                    </div>
                )}
            </div>
            <Button variant="outline-success" onClick={postOrderHandler}>Place your order</Button>
        </div>
    );
}

export default FormCategories;