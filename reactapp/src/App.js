<<<<<<< HEAD
import './App.css';
import CommentsSection from './Components/Comments/CommentSection';

=======
import React, { useState } from 'react'
import MainFeeds from './components/Feeds/MainFeeds';
import MainPage from './Settings/SideBar/MainPage';
import Login from './components/Auth/Login';
import NavBar from './components/NavBar/NavBar';


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
        // {
        //   path: "/messages",
        //   element: <Messages />,
        // },  
      ]



);

const App = () => {
  const [showNav, setShowNav] = useState(false);
>>>>>>> b8422ba1637cb4bfc39458fe29bb3726c9ac931f

  return (
<<<<<<< HEAD
    <CommentsSection/>
  );
=======
    <div id='root'>
      
      <NavBar showNav={showNav} setShowNav={setShowNav}/>
      <div onClick = {() => setShowNav(false)}>
        <RouterProvider router={router} />
        </div>
        {/* <MainPage /> */}
        
    </div>
    
  )
  
>>>>>>> b8422ba1637cb4bfc39458fe29bb3726c9ac931f
}

export default App