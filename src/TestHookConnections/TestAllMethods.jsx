// TestAllMethods.jsx
import React from 'react'
import { useEffect } from "react";
import useAsyncAwait from '../CustomHooks/useAsyncAwait'; 
import useFetch from '../CustomHooks/useFetch';
import useMockData from '../CustomHooks/useMockData';

export const TestAllMethods = () => {
    // const urlComment = "API list of APIs:";
    // const baseUrl = "https://api.publicapis.org"; //
    // const requestEndpoint = "/entries";
    // const url = `${baseUrl}${requestEndpoint}`;

    const urlComment = "Cat API:";
    const baseUrl = "https://cat-fact.herokuapp.com"; //
    const requestEndpoint = "/facts";
    const url = `${baseUrl}${requestEndpoint}`;

    const productUrlComment = "Async Product Server:";
    const productUrl = "https://express-async-server-es6-mongodb.onrender.com/api/products";
    const customerUrlComment = "Async Customer Server:";
    const customerUrl = "https://express-async-server-es6-mongodb.onrender.com/api/customers";

    const {
        // * API fetch with useAsyncAwait (AA_)
        loading: AA_loading,
        error: AA_error,
        apiData: AA_apiData,
        moduleCalled: AA_moduleCalled,
    } = useAsyncAwait(url);

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

    const {
        // * API fetch with useFetch (F_)
        loading: F_loading,
        error: F_error,
        apiData: F_apiData,
        moduleCalled: F_moduleCalled,
    } = useFetch(url);

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

    const mockComment = "Mock Product Data... ";
    const {
        // * fetch product data with useMockData (M_)
        loading: M_productLoading,
        error: M_productError,
        apiData: M_productData,
        moduleCalled: M_productModuleCalled,
    } = useMockData();

    useEffect(() => {
        console.clear();
        console.log(
            "%c*+*+*+*+*+*+ API useEffect diagnostics *+*+*+*+*+*+",
            "color: #35e859"
        );
        console.log(urlComment, AA_moduleCalled, AA_apiData);
        console.log("Product Data", AA_productModuleCalled, AA_productData);
        console.log("Customer Data", AA_cusomerModuleCalled, AA_customerData);
        console.log(urlComment, F_moduleCalled, F_apiData);
        console.log("Product Data", F_productModuleCalled, F_productData);
        console.log("Customer Data", F_cusomerModuleCalled, F_customerData);
        console.log("Product Data", M_productModuleCalled, M_productData);
        console.log(
            "%c*+*+*+*+*+*+ /API useEffect diagnostics/ *+*+*+*+*+*+",
            "color: #35e859"
        );
    }, [
        AA_apiData, AA_moduleCalled,
        AA_productData, AA_productModuleCalled,
        AA_customerData, AA_cusomerModuleCalled,
        F_apiData, F_moduleCalled,
        F_productData, F_productModuleCalled,
        F_customerData, F_cusomerModuleCalled,
        M_productModuleCalled, M_productData,
    ]);

    return (
        <h3>TestAllMethods</h3>
    )
}


