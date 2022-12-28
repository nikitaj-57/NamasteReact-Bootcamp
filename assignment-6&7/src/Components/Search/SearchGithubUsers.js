import { useState } from "react";
import fetchDataFromAPI from "../../utils/FetchData";
import stateCityData from '../../utils/state-city.json';
import GetCitiesList from "./GetCitiesList";
import CardContainer from "../CardContainer";

const SearchGitHubUsers = () => {
    const [ loading, setLoading ] = useState(false);
    const [ users, setUsers ] = useState([]);
    const [ state, setState ] = useState("Uttarakhand");
    const [ city, setCity ] = useState("");

    const cityList = GetCitiesList(state);

    async function fetchUserData() {
        const data = await fetchDataFromAPI(`https://api.github.com/search/users?q=location:${state}`)
        console.log(data.items);
        if(data.items.length > 0) {
            setLoading(false);
            setUsers(data.items.slice(0, 9))
        }
    }

    function onSubmitHandler(e) {
        e.preventDefault();
        fetchUserData();
        setLoading(true);
    }

    return (
        <>
            <form onSubmit={onSubmitHandler}>
            <select value={state} onChange={(e) => setState(e.target.value)}>
                {Object.keys(stateCityData).map((state) => <option value={state} key={state}>{state}</option>)}
            </select>

            <select value={city} onChange={(e) => setCity(e.target.value)}> 
                {cityList.map((city) => <option value={city} key={city}>{city}</option>)}
            </select>

            <button>Search</button>
            </form>
            {loading ? <div style={{ color: "white"}}>Loading...</div> : <CardContainer userData={users}/>}
        </>  
    )
}

export default SearchGitHubUsers;