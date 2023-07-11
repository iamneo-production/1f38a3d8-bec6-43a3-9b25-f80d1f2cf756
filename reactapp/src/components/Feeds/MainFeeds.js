import React ,{useState,useEffect} from 'react'
import Post from "./Post";
import Story from "./Story";
import TopNavBar from "./TopNavBar";
import NavBar from "../NavBar/NavBar";
import StoryTop from "./StoryTop";
import FriendRequest from './FriendRequest';
import CreatePost from '../Posts/CreatePost';
import Posts from '../Posts/Posts';
import "./Scroll.css";
import Suggestions from '../Profile/Suggestions';
import { useNavigate } from 'react-router-dom';


const MainFeeds = () => {

  const navigate = useNavigate();

  // Hooks -> lifecycle of a component different stages different hooks 
  //  useEffect -> intialized at the starting stage of a component life cycle


  useEffect(() => {
    if(localStorage.getItem("user") === null){
      navigate("/login");
    }
  },[]);


    const [postData, setPostData] = useState([
      {
        id:1 , 
        name:"bhavana",
        active:"20", 
        postImage:"https://upload.wikimedia.org/wikipedia/commons/2/24/Timisoara_-_Catholic_Dome_in_Union_Square.jpg",
        profile:"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        description:"I'm grateful to do this project",
        likes:400
      },
      {
        id:2 , 
        name:"geethika",
        active:"40", 
        postImage:"https://upload.wikimedia.org/wikipedia/commons/2/24/Timisoara_-_Catholic_Dome_in_Union_Square.jpg",
        profile:"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        description:"Hi hello",
        likes:5
      },
      {
        id:3 , 
        name:"Nishitha",
        active:"5", 
        postImage:"https://upload.wikimedia.org/wikipedia/commons/2/24/Timisoara_-_Catholic_Dome_in_Union_Square.jpg",
        profile:"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        description:"Im too good",
        likes:12
      },
        
    ])


  return (
    <div className='overflow-x-auto h-screen bg-gray-100 lg:flex lg:justify-between md:flex md:justify-between '>
       
         <div className=" w-full  lg:w-8/12 lg:flex lg:justify-end md:w-8/12 md:flex md:justify-end mt-5  lg:mr-10  md:mr-10">
          <div className='lg:w-8/12 md:w-8/12 w-full '>
            <StoryTop/>
            <div className='mt-4 flex justify-end '>
              <div className=" sm:w-full w-full">
                  <CreatePost/>
                  <Suggestions/>
                  {
                    postData ? 
                      postData.map((post,index)=>{ // loop through each element -> post
                        return(
                          <Posts post={post} />
                        )
                      })
                      :
                      "No Post Added"

                  }
              </div>
            </div>
          </div>
        </div>
        <div className="w-4/12 flex jusitfy-start pt-5">
          <div className='bg-white shadow-4xl rounded-[18px] w-10/12 h-[440px] '>
            <FriendRequest/>

          </div>
        </div> 
        
    </div>
  )
}

export default MainFeeds