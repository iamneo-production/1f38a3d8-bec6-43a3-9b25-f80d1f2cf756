import React, { useState,useEffect } from 'react';
import { BiEditAlt } from 'react-icons/bi';
import { TbPhotoUp } from 'react-icons/tb';
import axios from 'axios';

const CreatePost = ({ setPostData}) => {
  const [content, setContent] = useState("");
  const [file, setFile] = useState(null);
  const [username,setUsername]=useState("");

  useEffect(() => {
    const storedUsername = localStorage.getItem('user');
    if (storedUsername) {
      setUsername(storedUsername);
    }
    console.log(username);
  }, []);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const addPost = () => {
    const formData = new FormData();
    if (file) {
      formData.append("file", file);
    }

    const post = {
      user: { username : username },
      title: "New Post", 
      content: content,
    };
    formData.append("post", JSON.stringify(post));
    axios.post('https://8080-cffdafcacefddcdafbacfedaceeaeaadbdbabf.project.examly.io/api/posts', formData) 
      .then(response => {
        
        setPostData(prevData => [...prevData, response.data]);
        setContent("");
        const fileInput = document.getElementById("file-input");
        if (fileInput) {
          fileInput.value = null;
        }
      })
    .catch(error => {
        console.error('Error creating post:', error);
        if (error.response) {
          console.error('Response data:', error.response.data);
        }
      });
  };

  return (
    <div className='bg-white h-[280px] w-full my-5 rounded-xl'>
      <div className='h-20 px-5 w-full flex pt-2 space-x-4 items-center'>
        <div><BiEditAlt className='bg-gray-200 rounded-full px-2 text-blue-700 font-bold text-xl' size={40} /></div>
        <p className='font-bold text-gray-500'>Create Post</p>
      </div>
      <div className='h-[150px] w-full bg-white p-3'>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className='w-full h-full rounded-lg border-2 p-2'
          placeholder="What's on your mind?"
        ></textarea>
      </div>
      <div className='bg-white h- w-full px-4 flex justify-between space-x-2'>
        <div className='flex'>
          <TbPhotoUp className='text-pink-500' size={30} />
          <input
            id="file-input"
            type="file"
            onChange={handleFileChange}
          />
          <p className='font-semibold text-gray-600'>Photo/Video</p>
        </div>
        <button
          type='button'
          onClick={addPost}
          className='font-semibold p-2 bg-blue-700 rounded-lg hover:bg-blue-500 text-white '
        >
          submit
        </button>
      </div>
    </div>
  );
};

export default CreatePost;