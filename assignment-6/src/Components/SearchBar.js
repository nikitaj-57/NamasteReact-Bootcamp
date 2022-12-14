import { useState } from "react";

const SearchBar = ({ userData, setUserData }) => {

    function searchUser(searchText) {
        // console.log(searchText);
        // console.log(userData[0].name);
        const filteredData = userData.filter((user) => {
            // console.log(user);
            return user.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
        })
        // console.log(filteredData);
        return filteredData;
    }

    const [ searchText, setSearchText ] = useState("");
    
    return (
        <form className="d-flex" onSubmit={(e) => {
            e.preventDefault();
            const filteredData = searchUser(searchText);
            // setFilteredData(filteredData);
            setUserData(filteredData);
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
          <button className="btn btn-outline-light">Submit</button>
        </form>
    )
}

export default SearchBar;