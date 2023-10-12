// useAsyncAwait.js
import { useState, useEffect } from "react";

const useAsyncAwait = (url) => {
  if (typeof url !== "string" || url.length === 0) {
    throw new Error("Invalid URL");
  }
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  const [apiData, setApiData] = useState([]);
  const moduleCalled = "fetched using useAsyncAwait";

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const data = await response.json();
      setApiData(data);
    } catch (error) {
      setError(error.message);
      console.log({ error });
    } finally {
      setLoading(false);
    }
    
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { loading, error, apiData, moduleCalled };
};

export default useAsyncAwait;

For Parent Module:
// url_builder:
// const baseUrl = "https://whatever";
// const requestEndpoint = "/end/point/"
// const apiKey = "12345";
// const requestParams = `?api_key=${apiKey}`;
// const url = `${baseUrl}${requestEndpoint}${requestParams}`;

// single_connection:
// const { loading, error, apiData, moduleCalled } = useAsyncAwait(url);

// multiple_connections:
// const { loading: productLoading, error: productError, apiData: productData, moduleCalled: productModuleCalled, } = useAsyncAwait(productUrl);
// const { loading: customerLoading, error: customerError, apiData: customerData, moduleCalled: customerModuleCalled, } = useAsyncAwait(customerUrl);

// test_return:
// return (<>{loading ? (<p>Loading...</p>) : error ? (`${error}`) : (<div>{apiData && console.log(apiData, moduleCalled)}</div>)}</>);
