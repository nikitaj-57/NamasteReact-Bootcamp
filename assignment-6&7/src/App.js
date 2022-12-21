import { useContext, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import './styles.css';
import { CardComponent, TitleComponent, SearchBar } from './Components';
import usernames from './utils/usernames';
import ThemeContext from './Context/ThemeContext';

const CardContainer = ({ userData }) => {
  return (
    <div className='container'>
      <div className='row'>
        {
          userData.map((singleUser) => {
            return <CardComponent singleUser={singleUser} key={singleUser.login}/>
          })
        }
      </div>
    </div>
  )
}

// const usernames = [
//   "akshaymarch7", 
//   "ap221882", 
//   "nikitaj-57", 
//   "Pujarini", 
//   "aditifarkya",
//   "gavandivya",
//   "nitishnivedan",
//   "Bhallora"
// ]

const BodyComponent = () => {
  // UserData will store the data fetched using Github API
  const [ userData, setUserData ] = useState([]);
  const [ filteredData, setFilteredData ] = useState([]);

  const { theme, setTheme } = useContext(ThemeContext);

  const fetchUserDetails = async() => {
    let response = await Promise.all(
      usernames.map(async(name) => {
        const userInfo = await fetch(`https://api.github.com/users/${name}`)
        const data = await userInfo.json();
        return data;
      })
    )
    setUserData(response);
    
  }

  useEffect(() => {
    fetchUserDetails();
  },[])
  
  return (
    <div style={{ "backgroundColor" : theme === "light" ? "#778899" : "#1e2126"}}>
      <SearchBar userData={userData} setFilteredData={setFilteredData}/>
      <CardContainer userData={filteredData.length ? filteredData : userData}/>
    </div>
  )
}

const AppLayout = () => {
  const [ theme, setTheme ] = useState("light");
  return (
    <ThemeContext.Provider value={{ theme: theme, setTheme: setTheme }}>
      <TitleComponent/>
      <Outlet />
    </ThemeContext.Provider>
    
  )
}

function App() {
  return (
    <AppLayout />
  );
}

export  {App, BodyComponent};
