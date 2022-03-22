import React from 'react';
import Cosmetic from './Cosmetic';

const Cosmetics = () => {
    /* const first = 55;
    const second = 44;
    const total = add(first, second)
    const multiple = multiply(first, second) */
    const cosmetics = [
        {
            "id": "6239931f6556a5a78f721b4d",
            "index": 0,
            "guid": "b34dfb23-211b-404b-bc11-66f36cc7d343",
            "isActive": false,
            "balance": "$3,552.27",
            "picture": "http://placehold.it/32x32",
            "age": 31,
            "eyeColor": "brown",
            "name": "Lou Nicholson"
        },
        {
            "id": "6239931f290aa878dc5d0d36",
            "index": 1,
            "guid": "842dae4c-d3c3-4200-a545-680950df33ce",
            "isActive": true,
            "balance": "$3,928.72",
            "picture": "http://placehold.it/32x32",
            "age": 30,
            "eyeColor": "brown",
            "name": "Harriet Matthews"
        },
        {
            "id": "6239931fa4067e37b3402bcb",
            "index": 2,
            "guid": "06fc77af-d311-42d6-81d8-110eb45e3a5d",
            "isActive": true,
            "balance": "$3,851.33",
            "picture": "http://placehold.it/32x32",
            "age": 33,
            "eyeColor": "green",
            "name": "Waller Beard"
        },
        {
            "id": "6239931f77d807fa8264a65e",
            "index": 3,
            "guid": "9b3c3396-b9d3-4066-b964-388e66d6e99f",
            "isActive": true,
            "balance": "$2,182.44",
            "picture": "http://placehold.it/32x32",
            "age": 35,
            "eyeColor": "blue",
            "name": "Marquita Haley"
        },
        {
            "id": "6239931f2853a44222262bf5",
            "index": 4,
            "guid": "fa062c37-f66a-48f7-879f-720b6392092e",
            "isActive": false,
            "balance": "$1,229.72",
            "picture": "http://placehold.it/32x32",
            "age": 39,
            "eyeColor": "green",
            "name": "Francis Duncan"
        },
        {
            "id": "6239931f0b92fac0dad2824f",
            "index": 5,
            "guid": "d89e986a-a339-4bbb-910f-734b27e46438",
            "isActive": false,
            "balance": "$2,107.07",
            "picture": "http://placehold.it/32x32",
            "age": 27,
            "eyeColor": "brown",
            "name": "Joyner Norris"
        },
        {
            "id": "6239931f8e301263372e1d40",
            "index": 6,
            "guid": "c420177a-95a6-42ea-90ec-3d110bfcbfbe",
            "isActive": false,
            "balance": "$3,342.59",
            "picture": "http://placehold.it/32x32",
            "age": 40,
            "eyeColor": "brown",
            "name": "Lowery Maddox"
        }
    ]
    return (
        <div>
            <h1>This is cosmetics</h1>
            {
                cosmetics.map(cosmetic => <Cosmetic key={cosmetic.id} cosmetic={cosmetic}></Cosmetic>)
            }
            {/*          <h1>This is cosmetics</h1>
            <p>total: {total} </p>
            <p>multiplication: {multiple} </p> */}
        </div>
    );
};

export default Cosmetics;