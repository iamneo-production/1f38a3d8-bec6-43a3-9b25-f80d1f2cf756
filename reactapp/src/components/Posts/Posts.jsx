import React, { useState, useEffect } from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { VscBookmark } from 'react-icons/vsc';
import CommentsSection from '../Comments/CommentSection';
import Share from './Share';
import axios from 'axios';
import DropdownMenu from './Dropdownmenu';

const Posts = ({ post ,username}) => {
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);
  const photoUrl = `https://8080-dbfccefdafacfddcdafbacfedaceeaeaadbdbabf.project.examly.io/api/posts/${post.id}/photo`;

  useEffect(() => {
    // Fetch the total likes for the post
    axios.get(`https://8080-dbfccefdafacfddcdafbacfedaceeaeaadbdbabf.project.examly.io/api/posts/${post.id}`)
      .then(response => {
        setLikes(response.data.likes.length);
        setLiked(response.data.likedByCurrentUser);
      })
      .catch(error => {
        console.error('Error fetching post likes:', error);
      });
  }, [post.id]);

  const handleLike = () => {
    if (liked) {
      axios.post(`https://8080-dbfccefdafacfddcdafbacfedaceeaeaadbdbabf.project.examly.io/api/posts/${post.id}/unlike?username=${username}`)
        .then(response => {
          setLiked(false);
          setLikes(prevLikes => prevLikes - 1);
        })
        .catch(error => {
          console.error('Error unliking post:', error);
        });
    } else {
      axios.post(`https://8080-dbfccefdafacfddcdafbacfedaceeaeaadbdbabf.project.examly.io/api/posts/${post.id}/like?username=${username}`)
        .then(response => {
          setLiked(true);
          setLikes(prevLikes => prevLikes + 1);
        })
        .catch(error => {
          console.error('Error liking post:', error);
        });
    }
  };
  

  return (
    <div className='w-full bg-white my-2 rounded-lg'>
      <div className='rounded-t-lg h-20 pt-6 px-5 w-full bg-white flex justify-between items-center'>
        <div className='flex space-x-4 items-center'>
          <img className="object-cover w-14 h-14 rounded-full" src={post.user.profilePhotoPath} alt="" />
          <div>
            <p className='text-lg font-semibold'>{post.user.username}</p>
            <p className='text-md text-gray-500'>{post.createdAt}</p>
          </div>
        </div>
        <DropdownMenu />
      </div>

      <div className='h-[60px] bg-white w-full p-5'>
        <p>{post.content} <span className='text-skyblue-700 font-semibold'>...see more </span></p>
      </div>

      {post.photoPath && (
        <div className='h-[450px] w-full px-6 py-4'>
          <img className="w-full h-full square-full rounded-xl" src={photoUrl} alt="" />
        </div>
      )}

      <div className='flex justify-between mx-4 py-4'>
        <div className="flex space-x-4">
          {liked ? (
            <AiFillHeart className='text-pink-800' size={30} onClick={handleLike} />
          ) : (
            <AiOutlineHeart size={30} onClick={handleLike} />
          )}
          <span className='px'>{likes} likes</span>
          <CommentsSection />
          <Share />
        </div>
        <VscBookmark size={30} />
      </div>
    </div>
  );
};

export default Posts;
