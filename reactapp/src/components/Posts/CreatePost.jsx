import React ,{useState}from 'react'
import {BiEditAlt} from 'react-icons/bi'
import {TbPhotoUp} from 'react-icons/tb'
const CreatePost = ({postData,setPostData}) => {

  const [content, setcontent] = useState("");
  const postDetails = {
    id:1 , 
    name:"bhavana",
    active:"3", 
    postImage:"https://upload.wikimedia.org/wikipedia/commons/2/24/Timisoara_-_Catholic_Dome_in_Union_Square.jpg",
    profile:"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    description:"I'm grateful to do this project",
    likes:200,
  }

  const addPost = () =>{

    postDetails["description"] = content;

    setPostData(
      [...postData,postDetails]
    )

  }

  return (
    <div className='bg-white h-[280px] w-full my-5 rounded-xl'>
        <div className='h-20 px-5 w-full flex pt-2 space-x-4 items-center' >
            <div><BiEditAlt className='bg-gray-200 rounded-full px-2 text-blue-700 font-bold text-xl' size={40}/></div>
            <p className='font-bold text-gray-500'>Create Post</p>
        </div>
        <div className='h-[150px] w-full bg-white p-3'>
            <textarea onChange={(e) => setcontent(e.target.value)} className='w-full h-full rounded-lg border-2 p-2'placeholder="What's on your mind?"></textarea>
        </div>
        <div className='bg-white h- w-full px-4 flex justify-between space-x-2'>   
        <div className='flex'>
            <TbPhotoUp className='text-pink-500' size={30}/>
            <input type="file" />
            <p className='font-semibold text-gray-600'>Photo/Video</p>
        </div>
            <button type='button' onClick={addPost} className='font-semibold p-2 bg-blue-700 rounded-lg hover:bg-blue-500 text-white '>submit</button>
        </div>
    </div>
  )
}

export default CreatePost