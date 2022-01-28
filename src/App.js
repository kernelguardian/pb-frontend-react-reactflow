import Flowbuilder from "./reactflow/Flowbuilder";
import Navbar from "./screen/Navbar";
import NodeList from "./screen/NodeList";

function App() {
  return (
    <div>
      <Navbar ></Navbar>
      <div className="flex flex-row">
        <NodeList></NodeList>
        <Flowbuilder></Flowbuilder>
      </div>

    </div>

  );
}

export default App;
