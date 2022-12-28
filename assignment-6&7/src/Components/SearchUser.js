import { useState, useEffect, useContext } from "react";
import ThemeContext from "../Context/ThemeContext";
import usernames from "../utils/usernames";
import SearchBar from "./Search/SearchBar";
import CardContainer from "./CardContainer";

const SearchUser = () => {
  // UserData will store the data fetched using Github API
  const [userData, setUserData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const { theme } = useContext(ThemeContext);

  const fetchUserDetails = async () => {
    let response = await Promise.all(
      usernames.map(async (name) => {
        const userInfo = await fetch(`https://api.github.com/users/${name}`);
        const data = await userInfo.json();
        return data;
      })
    );
    setUserData(response);
  };

  useEffect(() => {
    fetchUserDetails();
  }, []);

  return (
    <div style={{ backgroundColor: theme === "light" ? "#778899" : "#1e2126" }}>
      <SearchBar userData={userData} setFilteredData={setFilteredData} />
      <CardContainer userData={filteredData.length ? filteredData : userData} />
    </div>
  );
};

export default SearchUser;
