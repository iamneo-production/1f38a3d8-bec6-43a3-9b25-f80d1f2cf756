import React,{useState} from 'react'
import {AiOutlineHeart,AiFillHeart} from 'react-icons/ai'
import {BiDotsHorizontalRounded,BiShareAlt} from 'react-icons/bi';
import {FaRegCommentDots} from 'react-icons/fa';

const Posts = ({post}) => {
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
  ])
  const [liked, setliked] = useState(false);

  const Like = () =>{

    if(liked === true){
      post.likes = post.likes-1;
    }else{
      post.likes = post.likes+1;
    }
    setliked(!liked);
  }
  
  return (
    <div className=' w-full bg-white my-2 rounded-lg'>
        <div className='rounded-t-lg h-20 pt-6 px-5 w-full bg-white flex justify-between items-center'>
          <div className='flex space-x-4 items-center'>
            <img className="object-cover w-14 h-14 rounded-full" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />
            <div >
                <p className='text-lg font-semibold'>{post.user.username}</p>
                <p className='text-md text-gray-500'>{post.createdAt}</p>
            </div>
          </div> 
          <BiDotsHorizontalRounded size={30} />
        </div>

        <div className='h-[60px] bg-white w-full p-5'>
            <p>{post.title}</p>
            <p>{post.content} <span className='text-skyblue-700 font-semibold'>...see more </span></p>
        </div>

        <div className='h-[450px] w-full  px-6 py-4  '>
                <img className=" w-full h-full square-full rounded-xl" src={ `${process.env.REACT_APP_API_URL}/`+post.photoPath} alt="" />
        </div>
        <div className=' flex justify-between mx-4 py-4'>
            <div className="flex space-x-4">
              {
                liked ?
                  <AiFillHeart className='text-pink-800' size={30} onClick={() => Like()} />
                :

                <AiOutlineHeart size={30} onClick={() => Like()} />
              }  <span className='px'>{post.likes} likes</span>
              
              <FaRegCommentDots size={30} />
              
            </div>
            <BiShareAlt size={30}/>
        </div>
        {/* <CommentsSection/> */}

    </div>
  )
}

export default Posts