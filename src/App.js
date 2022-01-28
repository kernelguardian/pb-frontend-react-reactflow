import Flowbuilder from "./reactflow/Flowbuilder";
import Input from "./foundation/Input";
import Button from "./foundation/Button";
import Text from "./foundation/Text";
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
