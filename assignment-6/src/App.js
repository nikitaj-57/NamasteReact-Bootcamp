import { useEffect, useState } from 'react';
import './styles.css';
import { CardComponent, TitleComponent, SearchBar } from './Components';

const CardContainer = ({ userData }) => {
  return (
    <div className='container'>
      <div className='row'>
        {
          userData.map((singleUser) => {
            // console.log(singleUser);
            return <CardComponent singleUser={singleUser} key={singleUser.id}/>
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
  "soumyagangamwar",
  "Bhallora"
]

const BodyComponent = () => {
  // UserData will store the data fetched using Github API
  const [ userData, setUserData ] = useState([]);

  const fetchUserDetails = async() => {
    let response = await Promise.all(
      usernames.map(async(name) => {
        const userInfo = await fetch(`https://api.github.com/users/${name}`);
        const data = await userInfo.json();
        return data;
        // console.log(data);
      })
    )
    setUserData(response);
    // console.log(response);
  }

  useEffect(() => {
    fetchUserDetails();
  },[])
  
  return (
    <div>
      <nav class="navbar navbar-dark bg-dark py-0" >
        <div class="container-fluid">
            <TitleComponent/>
            <SearchBar userData={userData} setUserData={setUserData}/>
        </div>
      </nav>
      <CardContainer userData={userData}/>
    </div>
  )
}

const AppLayout = () => {
  return (
    <BodyComponent />
  )
}

function App() {
  return (
    <AppLayout />
  );
}

export default App;
