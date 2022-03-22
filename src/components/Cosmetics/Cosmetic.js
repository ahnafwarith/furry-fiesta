import React from 'react';

const Cosmetic = (props) => {
    const { name, age } = props.cosmetic;
    return (
        <div>
            {/* As every element needs to have a unique id */}
            <h1>ID: {name}</h1>
            <p>Age being: {age}</p>
        </div>
    );
};

export default Cosmetic;