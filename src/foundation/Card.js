import React from 'react';

function Card(props) {
    return <div className='rounded-md bg-white m-2 hover:cursor-pointer hover:border-gray-300 border-2'>
        <h1 className='text-gray-600'>Node {props.data}</h1>
    </div>;
}

export default Card;
