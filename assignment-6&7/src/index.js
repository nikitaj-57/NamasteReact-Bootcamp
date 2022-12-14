import React from 'react';
import ReactDOM from 'react-dom/client';
import {App, BodyComponent} from './App';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AboutUs, ErrorComponent, TeamMember } from './Components';

const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorComponent />,
        children: [
            {
                path: "/",
                element: <BodyComponent />
            },
            {
                path: "/member/:login",
                element: <TeamMember />
            }, 
            {
                path: "/about-us",
                element: <AboutUs />
            },
        ]
    }
    
    
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={AppRouter} />
);


