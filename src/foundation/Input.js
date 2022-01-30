import React from 'react';

function Input(props) {
    return <div>
        <input type="text" className='px-3 py-1 rounded-lg border-2 border-sky-500 w-32' placeholder={props.text}></input>
    </div>;
}

export default Input;
