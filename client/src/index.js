import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Signup from './views/Signup/Signup';
import Home from './views/Home/Home'
import Login from './views/Login/Login';
import PatientData from './views/PatientData/PatientData';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
const router = createBrowserRouter([
    {
        path:'/',
        element:<Home/>
    },
    {
        path:'/login',
        element:<Login/>
    },
    {
        path:'/signup',
        element:<Signup/>
    },
    {
        path:'/patient',
        element:<PatientData/>
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
 <RouterProvider router={router} />
);


