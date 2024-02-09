import { useState, useEffect } from "react"

export const useAsync = (asyncFunction, dependencies = []) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect (() => {
        const fetchData = async () => {
            try {
                const result = await asyncFunction();
                setData(result);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false); // Indicamos que la carga ha finalizado
            }
        };

        fetchData();

    }, dependencies);

    return {
        data,
        loading
    };
}