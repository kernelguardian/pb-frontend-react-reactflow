import Button from "../foundation/Button";
import Input from "../foundation/Input";
import Text from "../foundation/Text";
import Card from "../foundation/Card";


function NodeList() {

    const nodes = [
        {
            "node_id": "1a",
            "node_name": "Open Browser",
            "node_description": "Opens a browser instance"
        },
        {
            "node_id": "1b",
            "node_name": "Navigate to a new page",
            "node_description": "Change the current webpage"
        },
        {
            "node_id": "1c",
            "node_name": "Close Browser",
            "node_description": "Close an open browser instance"
        },
        {
            "node_id": "2a",
            "node_name": "Click",
            "node_description": "Click an element"
        },
        {
            "node_id": "2b",
            "node_name": "Type into",
            "node_description": "Type into an input field"
        },
        {
            "node_id": "2c",
            "node_name": "Find Element",
            "node_description": "Searches for an element"
        }
    ]

    return <div className='bg-gradient-to-b from-pasty to-pasty w-64 h-screen rounded-md shadow-lg'>
        {nodes.map((node) => {
            return <Card data={node}></Card>
        })}
    </div >;
}

export default NodeList;
