import Flowbuilder from "./reactflow/Flowbuilder";
import Navbar from "./screen/Navbar";
import NodeList from "./screen/NodeList";
import { useState } from "react"

function App() {
  const [activeNode, setactiveNode] = useState([]);

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
