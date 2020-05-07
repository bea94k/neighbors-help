import React from "react";

import { Link } from "react-router-dom";

const PostCard = ({ username, firstname, address, phone, order, link }) => {
    console.log(order);
    let i;
    let extractedOrder = [];
    for (i = 0; i < order.length; i++) {
        let productSet = `${order[i].name} - ${order[i].quantity}; `;
        extractedOrder.push(productSet);
    }

    return (
        <div>
            <h2>{firstname}</h2>
            <p>{username}</p>
            <p>{address}</p>
            <p>{phone}</p>
            <p>{extractedOrder}</p>
            {/*  <Link to={link}>Read more</Link> */}
        </div>
    );
};

export default PostCard;
