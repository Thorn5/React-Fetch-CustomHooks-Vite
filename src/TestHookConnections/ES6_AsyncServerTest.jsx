// ES6_AsyncServerTest.jsx

import useAsyncAwait from "./CustomHooks/useAsyncAwait"
import useFetch from "./CustomHooks/useFetch"
import useMockData from "./CustomHooks/useMockData"

function ES6_AsyncServerTest () {
    const productUrl = "https://express-async-server-es6-mongodb.onrender.com/api/products";
    const customerUrl = "https://express-async-server-es6-mongodb.onrender.com/api/customers";
    
    useEffect(() => { // * API diagnostics
        console.log("%c*+*+*+*+*+*+ API useEffect diagnostics *+*+*+*+*+*+", "color: #35e859");
        console.log("Product", productModuleCalled, productData);
        console.log("Customer", productModuleCalled, customerData);
        console.log("%c*+*+*+*+*+*+ /API useEffect diagnostics/ *+*+*+*+*+*+", "color: #35e859");
      }, [ productModuleCalled, productData, customerData]);
    
    // const { // * fetch product data with useAsyncAwait
    //     loading: productLoading,
    //     error: productError,
    //     apiData: productData,
    //     moduleCalled: productModuleCalled,
    // } = useAsyncAwait(productUrl);
    
    // const { // * fetch customer data useAsyncAwait
    //     loading: customerLoading,
    //     error: customerError,
    //     apiData: customerData,
    //     moduleCalled: cusomerModuleCalled,
    // } = useAsyncAwait(customerUrl);
    
    // const { // * fetch product data with useFetch
    //     loading: productLoading,
    //     error: productError,
    //     apiData: productData,
    //     moduleCalled: productModuleCalled,
    // } = useFetch(productUrl);
    
    // const { // * fetch customer data useFetch
    //     loading: customerLoading,
    //     error: customerError,
    //     apiData: customerData,
    //     moduleCalled: cusomerModuleCalled,
    // } = useFetch(customerUrl);
    
    const { // * fetch product data with useMockData
        loading: productLoading,
        error: productError,
        apiData: productData,
        moduleCalled: productModuleCalled,
    } = useMockData();
    
    const { // * fetch customer data useMockData
        loading: customerLoading,
        error: customerError,
        apiData: customerData,
        moduleCalled: cusomerModuleCalled,
    } = useMockData();
    
    };
    
    export default ES6_AsyncServerTest;