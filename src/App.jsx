import "./App.css";
import { UseAsyncAwaitTestApiUrl } from "./TestHookConnections/useAsyncAwaitTestApiUrl";
import { UseAsyncAwaitTestServer } from "./TestHookConnections/useAsyncAwaitTestServer";
import { UseFetchTestApiUrl } from "./TestHookConnections/useFetchTestApiUrl";
import { UseFetchTestServer } from "./TestHookConnections/useFetchTestServer";
import { UseMockDataTest } from "./TestHookConnections/useMockDataTest";

function App() {

  useEffect(() => {        // * URL API diagnostics
  console.clear();
  console.log("%c*+*+*+*+*+*+ API useEffect diagnostics *+*+*+*+*+*+","color: #35e859" );
  <UseAsyncAwaitTestApiUrl />
  <UseAsyncAwaitTestServer />
  <UseFetchTestApiUrl />
  <UseFetchTestServer />
  <UseMockDataTest /> 
  console.log("%c*+*+*+*+*+*+ /API useEffect diagnostics/ *+*+*+*+*+*+", "color: #35e859" );
  }, []);
  
  return (
    <>
      <div>
      <h2>CustomHook test</h2>
      <p>Check Console for results</p>
      {/* <UseAsyncAwaitTestApiUrl /> */}
      {/* <UseAsyncAwaitTestServer /> */}
      {/* <UseFetchTestApiUrl /> */}
      {/* <UseFetchTestServer /> */}
      {/* <UseMockDataTest /> */}
      </div>
    </>
  );
}

export default App;
