import "./App.css";
// import { DisplayTestResults } from "./Components/DisplayTestResults";
// import { useEffect } from "react";
import { TestAllMethods } from "./TestHookConnections/TestAllMethods";
import { UseAsyncAwaitTestApiUrl } from "./TestHookConnections/useAsyncAwaitTestApiUrl";
import { UseAsyncAwaitTestServer } from "./TestHookConnections/useAsyncAwaitTestServer";
import { UseFetchTestApiUrl } from "./TestHookConnections/useFetchTestApiUrl";
import { UseFetchTestServer } from "./TestHookConnections/useFetchTestServer";
import { UseMockDataTest } from "./TestHookConnections/useMockDataTest";
function App() {

  return (
    <>
      <div>
        <h1>CustomHook test</h1>
        <h2>Check Console for results of:</h2>
        <TestAllMethods />
      </div>
    </>
  );
}

export default App;
