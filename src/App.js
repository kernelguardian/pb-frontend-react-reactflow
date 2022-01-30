import Flowbuilder from "./reactflow/Flowbuilder";
import Navbar from "./screen/Navbar";
import NodeList from "./screen/NodeList";
import { useState } from "react"

function App() {
  const [activeNode, setactiveNode] = useState([{
    id: '100',
    type: 'input', // input node
    data: { label: 'Input Node' },
    position: { x: 250, y: 25 },
  }]);

  return (
    <div>
      <Navbar ></Navbar>
      <div className="flex flex-row">
        <NodeList activeNode={activeNode} setactiveNode={setactiveNode}></NodeList>
        <Flowbuilder activeNode={activeNode} setactiveNode={setactiveNode}></Flowbuilder>
      </div>

    </div>

  );
}

export default App;
