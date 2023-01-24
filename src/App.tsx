import { useState } from "react";
import "./App.css";
import Children from "./components/Children";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Soma 1
        </button>
        <Children count={count} setCount={setCount} />
      </div>
    </div>
  );
}

export default App;
