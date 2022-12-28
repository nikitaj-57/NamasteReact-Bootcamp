// CiyList will take a state name and provide us an array of cities in that particular state
// Then in order to display those cities, we need to map them inside select options tag
import { useEffect, useState } from 'react';
import stateCityData from '../../utils/state-city.json';

const GetCitiesList = (state) => {
    const [ city, setCity ] = useState([]);

    useEffect(() => {
        fetchCities();

        async function fetchCities() {
            const cityList = stateCityData[state];
            setCity(cityList);
        }
    }, [state])
    return city;
}

export default GetCitiesList;