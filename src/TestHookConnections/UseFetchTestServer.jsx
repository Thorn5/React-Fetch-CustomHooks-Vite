// UseFetchTestServer.jsx
// import { useEffect } from "react";
import useFetch from "../CustomHooks/useFetch";

export const UseFetchTestServer = () => {
  const productUrlComment = "useFetch Product Server: ";
  const productUrl =
    "https://express-async-server-es6-mongodb.onrender.com/api/products";
  const customerUrlComment = "useFetch Customer Server: ";
  const customerUrl =
    "https://express-async-server-es6-mongodb.onrender.com/api/customers";

  const {
    // * fetch product data with useFetch (F_)
    loading: F_productLoading,
    error: F_productError,
    apiData: F_productData,
    moduleCalled: F_productModuleCalled,
  } = useFetch(productUrl);

  const {
    // * fetch customer data useFetch (F_)
    loading: F_customerLoading,
    error: F_customerError,
    apiData: F_customerData,
    moduleCalled: F_cusomerModuleCalled,
  } = useFetch(customerUrl);

  // useEffect(() => {        // * Server/ Router API diagnostics
  //   // console.clear();
  //   console.log(
  //     "%c*+*+*+*+*+*+ API useEffect diagnostics *+*+*+*+*+*+",
  //     "color: #35e859"
  //   );
  //   console.log("Server Product", F_productModuleCalled, F_productData);
  //   console.log("Server Customer", F_cusomerModuleCalled, F_customerData);
  //   console.log(
  //     "%c*+*+*+*+*+*+ /API useEffect diagnostics/ *+*+*+*+*+*+",
  //     "color: #35e859"
  //   );
  // }, [
  //   F_productModuleCalled, F_productData, F_customerData,
  // ]);

  return (
    <>
      {F_productLoading ? (
        <p>Loading Products...</p>
      ) : F_productError ? (
        `${F_productError}`
      ) : (
        <div>
          {F_productData && (
            <p>UseFetch Test Server ProductsData Success...</p>
          ) &&
            console.log(
              productUrlComment,
              F_productData,
              F_productModuleCalled
            )}
        </div>
      )}
      {F_customerLoading ? (
        <p>Loading Customers...</p>
      ) : F_customerError ? (
        `${F_customerError}`
      ) : (
        <div>
          {F_customerData && (
            <p>UseFetch Test Server CustomerData Success...</p>
          ) &&
            console.log(
              customerUrlComment,
              F_customerData,
              F_cusomerModuleCalled
            )}
        </div>
      )}
    </>
  );
};
