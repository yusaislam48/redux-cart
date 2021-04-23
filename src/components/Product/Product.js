import React from 'react';

const Product = ({product, addToCart}) => {
    const {name, id} = product;

    return (
        <div>
            <h5>{name}</h5>
            <button onClick={()=>addToCart(id, name)}>Add to cart!</button>
        </div>
    );
};

export default Product;