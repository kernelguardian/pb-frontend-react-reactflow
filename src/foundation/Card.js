

function Card(props) {
    return <div className='rounded-md bg-white m-2 hover:cursor-pointer hover:border-gray-300 border-2 select-none' id={props.data.node_id} onClick={props.addNode}>
        <h1 className='text-black'>{props.data.node_name}</h1>
        <p className="text-gray-500">{props.data.node_description}</p>


    </div>;
}

export default Card;
