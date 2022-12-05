import data from './data.js';
import { CardComponent, TitleComponent, SearchBar } from './Components';
import '../src/Components/style.css';
import { useState } from 'react';

const CardContainer = ({ filteredData }) => {
  return (
    <section className='container'>
      <div className='row'>
        {filteredData.map((userInfo) => {
          // console.log(userInfo);
          return <CardComponent userInfo={userInfo} key={userInfo.id}/>
        })}
      </div>
    </section>
  )
}

const BodyContainer = () => {
  const [ filteredData, setFilteredData ] = useState(data);
  return (
    <>
      <nav class="navbar navbar-dark bg-dark py-0" >
        <div class="container-fluid">
          <TitleComponent />
          <SearchBar setFilteredData={setFilteredData}/>
        </div>
      </nav>
      <CardContainer filteredData={filteredData}/>
    </>
  )
}

const AppLayout = () => {
  return (
    <>
      <BodyContainer />
    </>
  )
}

const App = () => {
  return <AppLayout />
}

export default App;
