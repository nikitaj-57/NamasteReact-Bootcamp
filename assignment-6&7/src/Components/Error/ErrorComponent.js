import React from 'react'
import { useRouteError } from 'react-router-dom';
import './style.css';

const ErrorComponent = () => {
  const error = useRouteError();
  return (
    <div className='text-white'>
      <h1 className='header'>Oops!</h1>
      <p className='error'>Sorry, an unexpected error has occurred.</p>
      <p className='error'>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  )
}

export default ErrorComponent