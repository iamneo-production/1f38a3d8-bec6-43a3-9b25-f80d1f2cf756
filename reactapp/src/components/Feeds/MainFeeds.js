import React, { useState, useEffect } from 'react';
import StoryTop from "./StoryTop";
import FriendRequest from './FriendRequest';
import CreatePost from '../Posts/CreatePost';
import Posts from '../Posts/Posts';
import "./Scroll.css";
import Suggestions from '../Profile/Suggestions';
import axios from 'axios';

const MainFeeds = () => {
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    axios.get('https://8080-dbfccefdafacfddcdafbacfedaceeaeaadbdbabf.project.examly.io/api/posts')
      .then(response => {
        setPostData(response.data);
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
      });
  }, []);

  return (
    <div className='overflow-x-auto h-screen bg-gray-100 lg:flex lg:justify-between md:flex md:justify-between '>
      <div className="w-full  lg:w-8/12 lg:flex lg:justify-end md:w-8/12 md:flex md:justify-end mt-5 lg:mr-10 md:mr-10">
        <div className='lg:w-8/12 md:w-8/12 w-full '>
          <StoryTop />
          <div className='mt-4 flex justify-end '>
            <div className="sm:w-full w-full">
              <CreatePost setPostData={setPostData} />
              <Suggestions />
              {postData.length > 0 ? (
                postData.map((post) => (
                  <Posts key={post.id} post={post} />
                ))
              ) : (
                <p>No posts available.</p>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="w-4/12 flex justify-start pt-5">
        <div className='bg-white shadow-4xl rounded-[18px] w-10/12 h-[440px] '>
          <FriendRequest />
        </div>
      </div>
    </div>
  );
};

export default MainFeeds;