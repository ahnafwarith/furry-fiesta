import React from 'react';
import './Cosmetic.css'

const Cosmetic = (props) => {
    const { name, age, id } = props.cosmetic;
    /* Let, age be price */
    /* Adding an event handler */


    const addToCart = (id) => {
        localStorage.setItem(id, name);
    }

    const addParamToCart = () => addToCart(id);

    return (
        <div className='product'>
            {/* As every element needs to have a unique id */}
            <h1>ID: {name}</h1>
            <p>Age being: {age}</p>
            <p>id number: {id}</p>
            <button onClick={() => addToCart(id)}>Add to cart</button>
            <button onClick={addParamToCart}>Purchase</button>
        </div>
    );
};

export default Cosmetic;