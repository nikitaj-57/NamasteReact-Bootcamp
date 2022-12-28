import { data } from "autoprefixer";
import { useEffect, useState } from "react";


const FetchData = async(url) => {
    const [ data, setData ] = useState([]);

    useEffect(() => {

        fetchDataFromAPI();

        async function fetchDataFromAPI() {
            const data = await fetch(url);
            const json = await data.json();
            setData(json);
        }
    }, [])
    return data;
}

export default FetchData;