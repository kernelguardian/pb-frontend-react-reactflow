import Flowbuilder from "./reactflow/Flowbuilder";
import Input from "./foundation/Input";
import Button from "./foundation/Button";
import Text from "./foundation/Text";
import Navbar from "./screen/Navbar";


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <h1>Flowbuilder</h1>
      <Flowbuilder></Flowbuilder>

    </div>

  );
}

export default App;
