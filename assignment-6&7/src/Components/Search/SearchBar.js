import { useState } from "react";
import "./style.css";
// import stateCityData from "../../utils/state-city.json";
// import GetCitiesList from "./GetCitiesList";

const SearchBar = ({ userData, setFilteredData }) => {
  function searchUser(searchText) {
    const filteredSearchedData = userData.filter((user) => {
      return user.name
        .toLocaleLowerCase()
        .includes(searchText.toLocaleLowerCase());
    });
    return filteredSearchedData;
  }

  const [searchText, setSearchText] = useState("");
  // const [stateName, setStateName] = useState("Uttarakhand");
  // const [cityName, setCityName] = useState("");
  // console.log(stateName);

  // const cityList = GetCitiesList(stateName);
  // console.log(cityList);

  return (
    <div className="search-container">
      <form
        className="form-container"
        onSubmit={(e) => {
          e.preventDefault();
          const filteredData = searchUser(searchText);
          // setFilteredData(filteredData);
          setFilteredData(filteredData);
          console.log(filteredData);
        }}
      >
        <input
          className=""
          id="username"
          placeholder="search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button className="btn btn-outline-light">Submit</button>
      </form>
    </div>
  );
};

export default SearchBar;
