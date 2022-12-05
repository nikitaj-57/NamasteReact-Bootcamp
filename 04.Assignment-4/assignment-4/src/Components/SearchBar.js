import { useState } from 'react';
import data from '../data1.js';

const SearchBar = () => {
    const searchText = "Nikita";
    return (
        <div className='search-container'>
            <form>
                <input
                     id='name'
                     placeholder='name'
                     value={searchText}
                >
                </input>
                <h1 style={{ color: "white"}}>{searchText}</h1>
                <button>Search</button>
            </form>
        </div>
    )
}

export default SearchBar;

// Note
// 1. Whenever we have to modify out state variable, we have to use the state function. 
// We cannot directly modify it. 