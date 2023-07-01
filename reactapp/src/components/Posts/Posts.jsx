import React,{useState} from 'react'
import {AiFillLike} from 'react-icons/ai'
import {AiOutlineHeart,AiFillHeart} from 'react-icons/ai'
import {BiDotsHorizontalRounded,BiShareAlt} from 'react-icons/bi';
import {FaRegCommentDots} from 'react-icons/fa'

const Posts = ({post}) => {

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
            <img class="object-cover w-14 h-14 rounded-full" src={post.profile} alt="" />
            <div >
                <p className='text-lg font-semibold'>{post.name}</p>
                <p className='text-md text-gray-500'>{post.active} min ago</p>
            </div>
          </div> 
          <BiDotsHorizontalRounded size={30} />
        </div>

        <div className='h-[60px] bg-white w-full p-5'>
            <p>{post.description} <a href='#' className='text-skyblue-700 font-semibold'>...see more </a></p>
        </div>

        <div className='h-[450px] w-full  px-6 py-4  '>
                <img class=" w-full h-full square-full rounded-xl" src={post.postImage} alt="" />
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

    </div>
  )
}

export default Posts