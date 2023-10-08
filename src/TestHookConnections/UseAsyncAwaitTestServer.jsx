// UseAsyncAwaitTestServer.jsx
import { useEffect } from "react";
import useAsyncAwait from "../CustomHooks/useAsyncAwait";

export const UseAsyncAwaitTestServer = () => {
  const productUrlComment = "Async Product Server:";
  const productUrl = "https://express-async-server-es6-mongodb.onrender.com/api/products";
  const customerUrlComment = "Async Customer Server:";
  const customerUrl = "https://express-async-server-es6-mongodb.onrender.com/api/customers";

  const {
    // * fetch product data with useAsyncAwait (AA_)
    loading: AA_productLoading,
    error: AA_productError,
    apiData: AA_productData,
    moduleCalled: AA_productModuleCalled,
  } = useAsyncAwait(productUrl);

  const {
    // * fetch customer data useAsyncAwait (AA_)
    loading: AA_customerLoading,
    error: AA_customerError,
    apiData: AA_customerData,
    moduleCalled: AA_cusomerModuleCalled,
  } = useAsyncAwait(customerUrl);

  useEffect(() => {        // * Server/ Router API diagnostics
    // console.clear();
    console.log(
      "%c*+*+*+*+*+*+ API useEffect diagnostics *+*+*+*+*+*+",
      "color: #35e859"
    );
    console.log("Product Router", AA_productModuleCalled, AA_productData);
    console.log("Customer Router", AA_cusomerModuleCalled, AA_customerData);
    console.log(
      "%c*+*+*+*+*+*+ /API useEffect diagnostics/ *+*+*+*+*+*+",
      "color: #35e859"
    );
  }, [
    AA_productModuleCalled, AA_cusomerModuleCalled, AA_productData, AA_customerData,
  ]);

  return (
    <>
      <h3>UseAsyncAwaitTestServer</h3>
      {/* {AA_productLoading ? (
        <p>Loading Products...</p>
      ) : AA_productError ? (
        `${AA_productError}`
      ) : (
        <div>
          {AA_productData &&
            console.log(
              productUrlComment,
              AA_productData,
              AA_productModuleCalled
            )}
        </div>
      )}
      {AA_customerLoading ? (
        <p>Loading Customers...</p>
      ) : AA_customerError ? (
        `${AA_customerError}`
      ) : (
        <div>
          {AA_customerData &&
            console.log(
              customerUrlComment,
              AA_customerData,
              AA_cusomerModuleCalled
            )}
        </div>
      )} */}
    </>
  );
};
