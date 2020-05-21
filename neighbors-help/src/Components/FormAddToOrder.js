import React, { useState, useEffect } from "react";
import axios from 'axios';
import './FormAddToOrder.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const FormCategories = () => {

    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [selected, setSelected] = useState([]);
    const [order, setOrder] = useState([]);
    const [username, setUsername] = useState();
    const [address, setAddress] = useState();

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

    // item quantity selection handler
    const addItemHandler = (e, prodid) => {
        setSelected({
            name: e.target.name,
            quantity: e.target.value,
            prodId: e.target.id,
            catId: prodid,
        })
    }

    // username + address input handler
    const inputUsernameHandler = (e) => {
        setUsername({
            name: e.target.value,
        })
    }
    const inputAddressHandler = (e) => {
        setAddress({
            place: e.target.value,
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

    const removePreOrderHandler = (id) => {
        const oldList = [...order];
        oldList.splice(id, 1); // removing 1 element at id
        setOrder(oldList);
    }

    const orderList = order.map((o, index) => {
        return (
            <div className="selectedItem">
                <p key={o.prodId} className="preOrder" onClick={() => removePreOrderHandler(index)}>
                    x {o.name}: {o.quantity}
                </p>
            </div>
        );
    });


    const postOrderHandler = () => {
        axios.post('http://localhost:3001/orders', { order, username, address })
            .then(response => {
                console.log(response.data);
                setOrder([]);
            });
    };


    return (
        <div className="order">
            <div>
                <h3>Your account: </h3>
                <label htmlFor="">
                    Username: <input type="text" className="username" onChange={(event) => inputUsernameHandler(event)} />
                </label>
                <br />
                <label htmlFor="">
                    Delivery address:<input type="text" className="address" onChange={(event) => inputAddressHandler(event)} />
                </label>
            </div>
            <div className="category">
                <h3>Choose a category</h3>
                <div>{categoryList}</div>
                <div>{productList}</div>
               
            </div>
            <div>
                {orderList == 0 ? (<p style={{ textDecoration: "underline", color: "red" }}>Please select products</p>) : (
                    <div>
                        <h2>Your preorder</h2>
                        <p>{orderList}</p>
                    </div>
                )}
            </div>
            <Button variant="outline-success" onClick={postOrderHandler}>Place your order</Button>
            
        </div >
    );
}

export default FormCategories;