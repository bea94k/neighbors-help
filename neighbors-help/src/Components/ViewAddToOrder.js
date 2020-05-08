// preview of chosen porducts while placing order
import React from 'react';


const ViewAddToOrder = (props) => {

    return (
        <div>
            <h1>Result</h1>
            {/* <p>Item:<span>{props.productName}</span> </p> */}
            <p>Quantity:<span>{props.quantity}</span></p>
        </div>
    );
}

export default ViewAddToOrder;
