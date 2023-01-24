import { useState } from "react";
import "./App.css";
import Children from "./components/Children";
import CountContext from "./context";


function App() {
  const [count, setCount] = useState(0);

  return (
    <CountContext.Provider value={{ count, setCount: (newCount: number) => setCount(newCount)}}>
      <div className="App">
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            Soma 1
          </button>
          <Children/>
        </div>
      </div>
    </CountContext.Provider>
  );
}

export default App;