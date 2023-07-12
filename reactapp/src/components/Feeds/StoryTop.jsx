import React, { useState } from 'react'
import { RxPlus } from "react-icons/rx";
import story from "../../assets/story.jpg";
import StoryModal from './StoryModal/StoryModal';

const StoryTop = () => {

    
  const [showModal, setShowModal] = useState(false);

    const [storyData, setStoryData] = useState([
        {
            isSeen: false,
            storyImage: story,
            profileImage: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
            userName: "bhavana_____",
        },
        {
            isSeen: false,
            storyImage: "https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?cs=srgb&dl=pexels-jacob-colvin-1761279.jpg&fm=jpg",
            profileImage: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
            userName: "nishitha__",
        },
        {
            isSeen: false,
            storyImage: story,
            profileImage: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
            userName: "bhavs___",
        },
        {
            isSeen: true,
            storyImage: "https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?cs=srgb&dl=pexels-jacob-colvin-1761279.jpg&fm=jpg",
            profileImage: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
            userName: "shahrukh__",
        },
    ])

    return (
        <div className='flex w-full h-[200px]  items-center justify-center'>
            <div className="overflow-x-auto mt-2 h-[198px] flex whitespace-nowrap w-11/12  space-x-3 scrollbar-hidden">
                <div className="flex  w-[135px] rounded-lg bg-gray-800">
                    <div className="h-[181px] w-[131px] flex flex-col">
                        <div className=" h-24 w-full">

                        </div>
                        <div className=" h-32 w-full flex flex-col items-center text-white">
                            <div onClick={() => {setShowModal(true)}} className="rounded-full   bg-white w-16 h-16 text-center flex justify-center  items-center text-2xl text-gray-900 font-bold" >
                                <RxPlus />
                            </div>
                            <button type='button' className='font-semibold mt-2' onClick={() => {setShowModal(true)}}>Add Story</button>
                        </div>
                    </div>
                </div>

                {
                    storyData ?
                        storyData.map((value, index) => {
                            return (
                                <a href='#' className="flex  w-[135px] rounded-lg bg-gray-800">
                                    <div className="h-[181px] w-[131px] flex flex-col relative ">
                                        <img className="z-0 rounded-lg h-[181px] " src={value.storyImage} alt="" />

                                        <div className="z-20 absolute bottom-[-20px] h-32 w-full flex flex-col items-center text-white">
                                            <div className="rounded-full bg-white w-16 border-4 border-yellow-600 h-16 text-center flex justify-center  items-center text-2xl text-gray-900 font-bold" >
                                                <img className='rounded-full' src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />
                                            </div>
                                            <p className='font-semibold mt-2'>{value.userName}</p>
                                        </div>
                                    </div>
                                </a>
                            )
                        })
                        :

                        ""
                }
                
            </div>

                <StoryModal showModal={showModal} setShowModal={setShowModal}/> 

            
        </div>
    )
}

export default StoryTop