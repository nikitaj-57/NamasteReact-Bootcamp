import data from '../data.js';
import { useState } from 'react';

const SearchBar = ({ setFilteredData }) => {
    function searchUser(searchText) {
      console.log(searchText);
      const filteredData = data.filter((user) => user.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()) || user.role.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()) )
      // console.log(filteredData[0].name);
      return filteredData;
    }
  
    const [ searchText, setSearchText ] = useState("");
  
    return (
        <form className="d-flex" onSubmit={(e) => {
            e.preventDefault();
            const filteredData = searchUser(searchText);
            // setFilteredData(filteredData);
            setFilteredData(filteredData);
            console.log(filteredData); 
        }}>
          <input
            className="form-control me-2 mx-1"
            id='username'
            placeholder='search'
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          {/* <h1 className="text-light bg-dark">{searchText}</h1> */}
          <button className="btn btn-outline-success">Submit</button>
        </form>
    )
}

export default SearchBar;