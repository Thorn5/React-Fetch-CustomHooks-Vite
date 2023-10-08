// UseAsyncAwaitTestApiUrl.jsx
import { useEffect } from "react";
import useAsyncAwait from "../CustomHooks/useAsyncAwait";

export const UseAsyncAwaitTestApiUrl = () => {
    // const urlComment = "API list of APIs:";
    // const baseUrl = "https://api.publicapis.org"; //
    // const requestEndpoint = "/entries";
    // const url = `${baseUrl}${requestEndpoint}`;

    const urlComment = "Cat API:";
    const baseUrl = "https://cat-fact.herokuapp.com"; //
    const requestEndpoint = "/facts";
    const url = `${baseUrl}${requestEndpoint}`;

  const {
    // * API fetch with useAsyncAwait (AA_)
    loading: AA_loading,
    error: AA_error,
    apiData: AA_apiData,
    moduleCalled: AA_moduleCalled,
  } = useAsyncAwait(url);

  useEffect(() => {        // * URL API diagnostics
    // console.clear();
    console.log(
      "%c*+*+*+*+*+*+ API useEffect diagnostics *+*+*+*+*+*+",
      "color: #35e859"
    );
    console.log("URL_API", urlComment, AA_moduleCalled, AA_apiData);
    console.log(
      "%c*+*+*+*+*+*+ /API useEffect diagnostics/ *+*+*+*+*+*+",
      "color: #35e859"
    );
  }, [
    AA_apiData, AA_moduleCalled,
  ]);

  return (
    <>
      <h3>UseAsyncAwaitTestApiUrl</h3>
      {/* {AA_loading ? (
        <p>Loading APIs...</p>
      ) : AA_error ? (
        `${AA_error}`
      ) : (
        <div>
          {AA_apiData && console.log(urlComment, AA_apiData, AA_moduleCalled)}
        </div>
      )} */}
    </>
  );
};
