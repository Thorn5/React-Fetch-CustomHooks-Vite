// UseFetchTestApiUrl.jsx
import { useEffect } from "react";
import useFetch from "../CustomHooks/useFetch";

export const UseFetchTestApiUrl = () => {
  // const urlComment = "API list of APIs:";
  // const baseUrl = "https://api.publicapis.org"; //
  // const requestEndpoint = "/entries";
  // const url = `${baseUrl}${requestEndpoint}`;

  const urlComment = "Cat API:";
  const baseUrl = "https://cat-fact.herokuapp.com"; //
  const requestEndpoint = "/facts";
  const url = `${baseUrl}${requestEndpoint}`;

  const {
    // * API fetch with useFetch (F_)
    loading: F_loading,
    error: F_error,
    apiData: F_apiData,
    moduleCalled: F_moduleCalled,
  } = useFetch(url);

  useEffect(() => {        // * URL API diagnostics
    // console.clear();
    console.log(
      "%c*+*+*+*+*+*+ API useEffect diagnostics *+*+*+*+*+*+",
      "color: #35e859"
    );
    console.log(urlComment, F_moduleCalled, F_apiData);
    console.log(
      "%c*+*+*+*+*+*+ /API useEffect diagnostics/ *+*+*+*+*+*+",
      "color: #35e859"
    );
  }, [
    F_apiData, F_moduleCalled,
  ]);

  return (
    <>
      <h3>UseFetchTestApiUrl</h3>
      {/* {F_loading ? (
        <p>Loading APIs...</p>
      ) : F_error ? (
        `${F_error}`
      ) : (
        <div>
          {F_apiData && <p>UseFetch Test ApiUrl Success...</p> &&
            console.log(urlComment, F_apiData, F_moduleCalled)}
        </div>
      )} */}
    </>
  );
};
