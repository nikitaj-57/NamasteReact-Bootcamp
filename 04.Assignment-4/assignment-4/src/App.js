// import './App.css';

import CardComponent from './Components/CardComponent.js';
import TitleComponent from './Components/TitleComponent.js'

const AppLayout = () => {
  return(
    <>
      <TitleComponent />
      <CardComponent />
    </>
  )
}

const App = () => {
  return <AppLayout />
}

export default App;
