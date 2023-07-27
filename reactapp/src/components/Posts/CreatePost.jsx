import React ,{useState}from 'react'
import {BiEditAlt} from 'react-icons/bi'
import {TbPhotoUp} from 'react-icons/tb'
import { connect } from 'react-redux';
import {createPost} from '../../actions/auth';


const CreatePost = ({createPost}) => {

  const [imagefile, setimagefile] = useState();

  const [formData, setFormData] = useState({
    description:"",
    title:""
  })

  const {description,title} = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value});
}

  const addPost = () =>{
    const data  = new FormData();
    const post = JSON.stringify({
      "user": {
        "username": localStorage.getItem("user")
    },
      "title":title,
      'content':description
    })
    data.append('post',post);
    data.append('file',imagefile);

    createPost(data);

    setFormData({
      description:"",
    title:""
    })

  }

  return (
    <div className='bg-white h-[280px] w-full my-5 rounded-xl'>
        <div className='h-20 px-5 w-full flex pt-2 space-x-4 items-center' >
            <div><BiEditAlt className='bg-gray-200 rounded-full px-2 text-blue-700 font-bold text-xl' size={40}/></div>
            <p className='font-bold text-gray-500'>Create Post</p>
        </div>
        <div className='h-[150px] w-full bg-white p-3'>
            <input type="text" name='title' value={title} onChange={(e) => onChange(e)}  />
            <textarea name='description' onChange={(e) => onChange(e)} className='w-full h-full rounded-lg border-2 p-2'placeholder="What's on your mind?">{description}</textarea>
        </div>
        <div className='bg-white h- w-full px-4 flex justify-between space-x-2'>   
        <div className='flex'>
            <TbPhotoUp className='text-pink-500' size={30}/>
            <input type="file" name="image"  onChange={(evt) => setimagefile(evt.target.files[0])}/>
            <p className='font-semibold text-gray-600'>Photo/Video</p>
        </div>
            <button type='button' onClick={addPost} className='font-semibold p-2 bg-blue-700 rounded-lg hover:bg-blue-500 text-white '>submit</button>
        </div>
    </div>
  )
}

export default connect(null,{createPost})(CreatePost);