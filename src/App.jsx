import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ApiTest from "./TestHookConnections/ApiTest";
import ES6_AsyncServerTest from "./TestHookConnections/ES6_AsyncServerTest";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ApiTest />
      <ES6_AsyncServerTest />
    </>
  );
}

export default App;
