import Button from "../foundation/Button";
import Input from "../foundation/Input";
import Text from "../foundation/Text";
import Card from "../foundation/Card";


function NodeList() {

    const nodes = [1, 2, 3, 4, 5]

    return <div className='bg-gradient-to-b from-pasty to-pasty w-64 h-screen rounded-md shadow-lg'>
        {nodes.map((node) => {
            return <Card data={node}></Card>
        })}
    </div >;
}

export default NodeList;
