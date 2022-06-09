import "./App.css";
import List from "./List";
import data from "./data";

function App() {
  return (
    <div className="container">
      <h2>just a test</h2>
      <List data={data}></List>
    </div>
  );
}

export default App;
