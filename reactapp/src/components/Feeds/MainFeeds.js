import React ,{useState,useEffect, useMemo} from 'react'
import StoryTop from "./StoryTop";
import FriendRequest from './FriendRequest';
import CreatePost from '../Posts/CreatePost';
import Posts from '../Posts/Posts';
import "./Scroll.css";
import Suggestions from '../Profile/Suggestions';
import { connect } from 'react-redux';
import {fetch_posts} from '../../actions/auth';



const MainFeeds = ({isPostsAvail,postsData,fetch_posts}) => {

    useEffect(() => {
      fetch_posts();
    }, [])
    
    const [data, setdata] = useState([
      {
        id:1 , 
        user:{username:"bhavana"},
        createdAt:"20", 
        photoPath:"https://upload.wikimedia.org/wikipedia/commons/2/24/Timisoara_-_Catholic_Dome_in_Union_Square.jpg",
        profile:"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        content:"I'm grateful to do this project",
        Title:"Test",
        likes:400
      },
    ])

    

    const dummy = useMemo(()=>{
      setdata(postsData);
      console.log(postsData);
    },[isPostsAvail,postsData])

    


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
                    data.length>1 ? 
                    data?.map((post,index)=>{ 
                        return(
                          <Posts key={index} post={post} />
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

const mapStateToProps = state => ({
	isPostsAvail: state.auth.isPostsAvail,
	postsData: state.auth.postsData,
});


export default connect(mapStateToProps,{fetch_posts})(MainFeeds)