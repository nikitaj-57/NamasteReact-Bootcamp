import { useState } from "react";
import './style.css';


const SearchBar = ({ userData, setUserData }) => {

    function searchUser(searchText) {
        const filteredData = userData.filter((user) => {
            return user.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
        })
        return filteredData;
    }

    const [ searchText, setSearchText ] = useState("");
    
    return (
      <div className="search-container">
        <form className="form-container" onSubmit={(e) => {
            e.preventDefault();
            const filteredData = searchUser(searchText);
            // setFilteredData(filteredData);
            setUserData(filteredData);
            console.log(filteredData); 
        }}>
          <input
            className=""
            id='username'
            placeholder='search'
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          
          <button className="btn btn-outline-light">Submit</button>
        </form>
      </div>
        
    )
}

export default SearchBar;