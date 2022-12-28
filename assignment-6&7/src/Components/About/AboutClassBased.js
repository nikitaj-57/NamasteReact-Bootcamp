/*
1. Implement routing and add a child : Profile Component.
2. Convert About us into class component.
3. Implement states and componentDidMount and ComponentDidUpdate in Profile page
4. Fetch your own data in Profile Component.
5. Check React Lifecycle method
*/

import './style.css';
// import { Outlet } from 'react-router-dom';
import React from 'react';
import ProfileComponent from '../Profile/ProfileComponent';

/*
const AboutUs = () => {
  return (
    <div className='about-container'>
        <h1 className='about-heading'>About The Team</h1>
        <h3 className='about-description'>We are a team of 10 members created as a part of Namaste React BootCamp 
            by Akshay Saini in the First Batch. As a team, we share ideas among each 
            other, build things together and help each other in need.</h3>
        <Outlet />
    </div>

  )
}

*/

class AboutUs extends React.Component {
    render() {
        return (
            <div className='about-container'>
                <h1 className='about-heading'>About The Team</h1>
                <h3 className='about-description'>We are a team of 10 members created as a part of Namaste React BootCamp 
                    by Akshay Saini in the First Batch. As a team, we share ideas among each 
                    other, build things together and help each other in need.</h3>
                <ProfileComponent />
            </div>
        )  
    }
}

export default AboutUs;