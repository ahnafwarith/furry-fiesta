import React from 'react';
import { add, multiply } from '../../utilities/calculate';

const Cosmetics = () => {
    const first = 55;
    const second = 44;
    const total = add(first, second)
    const multiple = multiply(first, second)
    return (
        <div>
            <h1>This is cosmetics</h1>
            <p>total: {total} </p>
            <p>multiplication: {multiple} </p>
        </div>
    );
};

export default Cosmetics;