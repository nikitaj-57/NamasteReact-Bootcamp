import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Header'

// const name = 'Nikita'
// const element = <h1>Hello + {name}</h1>;

// const element = (
//   <h1 className="greeting">
//     Hello, world
//   </h1>
// )


// 1. Without using JSX

// const headingWithoutJSX = React.createElement('div', {className: "container"}, [
//   React.createElement('h1', {id: 'heading1'}, 'Welcome to NamasteReact Bootcamp'),
//   React.createElement('h2', {id: 'heading2'}, 'Season 1'),
//   React.createElement('h3', {id: 'heading3'}, 'Zero to Hero in React')
// ])


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(headingWithoutJSX)

// 2. USing JSX

// const headingWithJSX = (
//   <div className='container'>
//     <h1 id='heading1'>Welcome to NamasteReact Bootcamp</h1>
//     <h2 id='heading2'>Season 1</h2>
//     <h3 id='heading3'>Zero to Hero in React</h3>
//   </div>
// );

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(headingWithJSX)

// 3. using Functional Component

// Note - Naming of functional component should always start with upper case. 
          // Otherwise it doesn't get displayed
// Rendering in </>

const TitleComponent = () => <h4>Displaying Title Component</h4>

const HeadingComponent = () => (
  <div className='container'>
    <h1 id='heading1'>Welcome to NamasteReact Bootcamp</h1>
    <h2 id='heading2'>Season 1</h2>
    <h3 id='heading3'>Zero to Hero in React</h3>

    {/* Not displaying anything */}
    TitleComponent
    <TitleComponent />
    <TitleComponent></TitleComponent>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Header />
    <HeadingComponent/>
  </>
);


