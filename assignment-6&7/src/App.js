import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import './styles.css';
import { CardComponent, TitleComponent, SearchBar } from './Components';

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

const usernames = [
  "akshaymarch7", 
  "ap221882", 
  "nikitaj-57", 
  "Pujarini", 
  "aditifarkya",
  "gavandivya",
  "nitishnivedan",
  "Bhallora"
]

const BodyComponent = () => {
  // UserData will store the data fetched using Github API
  const [ userData, setUserData ] = useState([]);

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
    <div>
      <SearchBar userData={userData} setUserData={setUserData}/>
      <CardContainer userData={userData}/>
    </div>
  )
}

const AppLayout = () => {
  return (
    <>
      <TitleComponent/>
      <Outlet />
    </>
    
  )
}

function App() {
  return (
    <AppLayout />
  );
}

export  {App, BodyComponent};
