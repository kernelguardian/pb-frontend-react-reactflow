import Button from "../foundation/Button";
import Input from "../foundation/Input";
import Text from "../foundation/Text";

function Card(props) {
    return <div className='rounded-md bg-white m-2 hover:cursor-pointer hover:border-gray-300 border-2 select-none'>
        <h1 className='text-black'>{props.data.node_name}</h1>
        <p className="text-gray-500">{props.data.node_description}</p>


    </div>;
}

export default Card;
