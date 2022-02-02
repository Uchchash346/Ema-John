import React from 'react';
import './Product.css';

const Product = (props) => {
    const { name, img, price, stock, seller } = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className="product-name">{name}</h4>
                <p><small>by: {seller}</small></p>
                <p>Price: {price}</p>
                <p><small>Only {stock} left in stock - Order Soon</small></p>
                <button className="btn-regular">Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;