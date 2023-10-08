// UseMockDataTest.jsx
import { useEffect } from "react";
import useMockData from "../CustomHooks/useMockData";

export const UseMockDataTest = () => {
  const {
    // * fetch product data with useMockData (M_)
    loading: M_productLoading,
    error: M_productError,
    apiData: M_productData,
    moduleCalled: M_productModuleCalled,
  } = useMockData();

  useEffect(() => {        // * Server/ Router API diagnostics
    // console.clear();
    console.log(
      "%c*+*+*+*+*+*+ API useEffect diagnostics *+*+*+*+*+*+",
      "color: #35e859"
    );
    console.log("Product Data", M_productModuleCalled, M_productData);
    console.log(
      "%c*+*+*+*+*+*+ /API useEffect diagnostics/ *+*+*+*+*+*+",
      "color: #35e859"
    );
  }, [
    M_productModuleCalled, M_productData,
  ]);

  return (
    <>
      <h3>UseMockDataTest</h3>
      {/* {M_productLoading ? (
        <p>Loading Mock Data...</p>
      ) : M_productError ? (
        `${M_productError}`
      ) : (
        <div>
          {M_productData && console.log(M_productData, M_productModuleCalled)}
        </div>
      )} */}
    </>
  );
};
