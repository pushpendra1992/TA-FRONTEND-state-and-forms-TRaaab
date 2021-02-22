import React from "react";
import { render } from "react-dom";
import App from "./component/App";

export default function App() {
  return <div>Hello World!</div>;
}

render(<App />, document.getElementById("root"));
