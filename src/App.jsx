import React from 'react';
import './App.css';
import { Count } from "./Count";

function App() {
  const [text, setText] = React.useState("");


  return (
      <div className="App">
        <input value={text} onChange={e => setText(e.target.value)} />

            <Count onOdd={() => setText('')} />
      </div>
  );
}
export default App;
