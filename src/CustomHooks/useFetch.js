// useFetch.js
import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  const [apiData, setApiData] = useState(null);
  const moduleCalled = "fetched using useFetch";

  // console.log(url);
  // console.log(data);

  const fetchData = () => {
    if (typeof url !== "string" || url.length === 0) {
      throw new Error("Invalid URL");}
    setLoading(true)
    fetch(url)
      .then((response) => response.json())
      .then((data) => setApiData(data))
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  
  useEffect(() => {
        fetchData();
  }, []);

  return { loading, error, apiData, moduleCalled };
};

export default useFetch;

// For Parent Module:
// url_builder:
// const baseUrl = "https://whatever";
// const requestEndpoint = "/end/point/"
// const apiKey = "12345";
// const requestParams = `?api_key=${apiKey}`;
// const url = `${baseUrl}${requestEndpoint}${requestParams}`;

// single_connection:
// const { loading, error, apiData, moduleCalled } = useFetch(url);

// multiple_connections:
// const { loading: productLoading, error: productError, apiData: productData, moduleCalled: productModuleCalled, } = useFetch(productUrl);
// const { loading: customerLoading, error: customerError, apiData: customerData, moduleCalled: customerModuleCalled, } = useFetch(customerUrl);
