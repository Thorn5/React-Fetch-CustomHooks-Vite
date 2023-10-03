// ApiTest.jsx

import useAsyncAwait from "./CustomHooks/useAsyncAwait"
import useFetch from "./CustomHooks/useFetch"
import useMockData from "./CustomHooks/useMockData"

function ApiTest () {

    const baseUrl = "https://api.publicapis.org";
    const requestEndpoint = "/entries"
    const apiKey = "";
    const requestParams = `?api_key=${apiKey}`;
    const url = `${baseUrl}${requestEndpoint}${requestParams}`;

    // const { loading, error, apiData, callModule } = useAsyncAwait(url);
    // const { loading, error, apiData, callModule } = useFetch(url);
    const { loading, error, apiData, moduleCalled } = useMockData();

    return (<>
        <div className="App"> {loading ? (<p>Loading...</p>) : error ? (`${error}`) : (<div>{apiData && console.log({ apiData, moduleCalled })}</div>)} </div>
    </>);
}

export default ApiTest;