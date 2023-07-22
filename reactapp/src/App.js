import React, { useState } from 'react'
import MainFeeds from './components/Feeds/MainFeeds';
import MainPage from './Settings/SideBar/MainPage';
import Login from './components/Auth/Login';
import NavBar from './components/NavBar/NavBar';
import store from './store';
import { Provider } from 'react-redux';

import "./App.css";
// import "./Scroll.css";

import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements
  
} from "react-router-dom";
import Register from './components/Auth/Register';
import RouteProtectionUser from './routeProtection/RouteProtectionUser';
<<<<<<< HEAD
<<<<<<< HEAD
import Messages from './components/Messages';
=======
// import Messages from './components/Messages/Messages';
>>>>>>> Project-Workspace-pratikmandge
=======
import Messages from './components/Messages';
>>>>>>> Project-Workspace-ukeerthi18




const router = createBrowserRouter(
  


  [
    {
          path: "/settings",
          element: <RouteProtectionUser><MainPage /></RouteProtectionUser>,
        },
        {
          path: "/",
          element: <RouteProtectionUser><MainFeeds/></RouteProtectionUser>,
          
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> Project-Workspace-ukeerthi18
         {
           path: "/messages",
           element: <Messages />,
         },  
         
<<<<<<< HEAD
=======
        // {
        //   path: "/messages",
        //   element: <Messages />,
        // },  
>>>>>>> Project-Workspace-pratikmandge
=======
>>>>>>> Project-Workspace-ukeerthi18
      ]



);

const App = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div id='root'>
      
      <Provider store={store}>
      <NavBar showNav={showNav} setShowNav={setShowNav}/>
      <div onClick = {() => setShowNav(false)}>
        <RouterProvider router={router} />
        </div>
        {/* <MainPage /> */}
        
      </Provider>
    </div>
    
  )
  
}

export default App