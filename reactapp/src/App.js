import './App.css';


import React, { useState } from 'react'
import MainFeeds from './components/Feeds/MainFeeds';
import MainPage from './Settings/SideBar/MainPage';
import Login from './components/Auth/Login';
import NavBar from './components/NavBar/NavBar';
import NotificationList from './components/Notification/NotificationList';


import "./App.css";
// import "./Scroll.css";

import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements
  
} from "react-router-dom";
import Register from './components/Auth/Register';
// import Messages from './components/Messages/Messages';




const router = createBrowserRouter(
  


  [
    {
          path: "/settings",
          element: <MainPage />,
        },
        {
          path: "/",
          element: <MainFeeds/>,
          
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path:"/notification",
          element: <NotificationList/>,
        }
        // {
        //   path: "/messages",
        //   element: <Messages />,
        // },  
      ]



);

const App = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    
  
    <div id='root'>
      
      <NavBar showNav={showNav} setShowNav={setShowNav}/>
      <div onClick = {() => setShowNav(false)}>
        <RouterProvider router={router} />
        </div>
        {/* <MainPage /> */}
    
    </div>
    
  )
  
}

export default App