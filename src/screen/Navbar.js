import React from 'react';

function Navbar() {
    return <div className='flex flex-row pt-2 bg-gray-100 shadow-lg pb-3 rounded-md'>
        <button className=' font-bold text-4xl pl-2 text-indigo-700 hover:cursor-default'>Processbud</button>
        <button className='grow'></button>
        <button className='text-white rounded-md h-10 font-semibold text-xl px-2 mx-2 w-24 bg-black shadow-lg shadow-cyan-500/50'>Run</button>

        <button className='text-white rounded-md h-10 font-semibold text-xl px-2 mx-2 w-24 bg-red-600 shadow-md shadow-cyan-500/50'>Stop</button>
        <button className='text-white rounded-md h-10 font-semibold text-xl px-2 mx-2 w-24 bg-green-700	 shadow-md shadow-cyan-500/50'>Save</button>

    </div>;
}

export default Navbar;
