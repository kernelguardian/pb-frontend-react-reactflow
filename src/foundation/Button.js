import React from 'react';

function Button(props) {
    return <div>
        <button className="m-2 px-6 h-7 text-white bg-gray-900 rounded-lg ">
            {props.text}
        </button>
    </div>;
}

export default Button;
