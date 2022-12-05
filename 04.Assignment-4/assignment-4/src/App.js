// import './App.css';

import CardComponent from './Components/CardComponent.js';
import TitleComponent from './Components/TitleComponent.js';
import SearchBar from './Components/SearchBar.js';

const AppLayout = () => {
  return(
    <>
      <TitleComponent />
      <SearchBar />
      <CardComponent />
    </>
  )
}

const App = () => {
  return <AppLayout />
}

export default App;
