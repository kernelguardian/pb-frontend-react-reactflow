// import Button from "../foundation/Button";
// import Input from "../foundation/Input";
// import Text from "../foundation/Text";
import Card from "../foundation/Card";

let id = 0;

function NodeList({ activeNode, setactiveNode }) {

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

    const getId = () => `${id++}`;




    function addNode(e) {
        let node_detail = []
        nodes.map((node) => {
            if (node.node_id === e.currentTarget.id) {
                node_detail = [node.node_name, node.node_description, node.node_id]
            }
        })

        const newNode = {
            id: getId(),
            type: 'default', // input node
            data: { label: node_detail[0] + " " + id },
            position: { x: 250, y: 25 },
        }
        setactiveNode([...activeNode, newNode], ...activeNode)

    }

    return <div className='bg-gradient-to-b from-pasty to-pasty w-64 h-screen rounded-md shadow-lg'>
        {nodes.map((node) => {
            return <Card data={node} key={node.node_id} addNode={addNode}></Card>
        })}
    </div >;
}

export default NodeList;
