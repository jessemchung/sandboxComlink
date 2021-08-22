import React from "react";
import ReactDOM from "react-dom";
import * as Comlink from "comlink";

import "./styles.css";

const MyClass = Comlink.wrap(new Worker("../public/worker.js"));

const logger = async () => {
  const instance = await new MyClass();
  const ret = await instance.logSomething();
  console.log("logger", ret);
};
logger();

function App() {
  return (
    <div className="App">
      <button onClick={logger}>log</button>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
