import React from 'react';
import { TbDiscountCheckFilled } from "react-icons/tb";
import CreatePost from '../Posts/CreatePost';
import Posts from '../Posts/Posts';

const Post = () => {
    return (
        <div className='mt-4 flex justify-end '>
            <div className=" sm:w-full w-full">
                <CreatePost/>
                <Posts/>
                <div className="bg-white border-b w-full">
                    <div className="flex justify-between mb-2">
                        <div className="flex items-center space-x-2">
                            <div className="flex justify-center items-center h-[43px] w-[43px] rounded-full bg-gradient-to-l from-pink-500 via-red-500 to-yellow-500">
                                <img className='h-[38px] w-[38px] rounded-full border-2 border-gradient-to-l from-pink-500 via-red-500 to-yellow-500' src="data:image/jpeg;base64,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" alt="" />
                            </div>
                            <div className="font-semibold">bhavzzz___</div>
                            <div className="text-blue-800 text-xl"><TbDiscountCheckFilled /></div>
                            <div className="text-gray-500 font-sans">10m</div>
                        </div>
                        <a href='#' className="flex items-center text-3xl pr-2">
                            <svg aria-label="More options" className="_ab6-" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)" height="24" role="img" viewBox="0 0 24 24" width="24"><circle cx="12" cy="12" r="1.5"></circle><circle cx="6" cy="12" r="1.5"></circle><circle cx="18" cy="12" r="1.5"></circle></svg>
                        </a>
                    </div>
                    <div className="">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/2/24/Timisoara_-_Catholic_Dome_in_Union_Square.jpg" alt="" />
                    </div>
                    <div className="">
                        <div className="flex justify-between">
                            <div className="flex justify-start items-center w-4/12">
                                <a href="#" className="px-1 pr-4 py-3 ">
                                    <svg aria-label="Notifications" className="_ab6-" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path></svg>
                                </a>
                                <a href="#" className='pr-4'>
                                    <svg aria-label="Comment" className="x1lliihq x1n2onr6" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Comment</title><path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg>
                                </a>
                                <a href="#">
                                    <svg aria-label="Share Post" className="x1lliihq x1n2onr6" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Share Post</title><line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></polygon></svg>
                                </a>
                            </div>
                            <div className="mt-3">
                                <a href="#">
                                    <svg aria-label="Save" className="x1lliihq x1n2onr6" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Save</title><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon></svg>
                                </a>
                            </div>
                        </div>

                        <div className="mt-3 flex justify-start ml-2">
                            <p className="font-semibold">2,355 likes</p>
                        </div>
                        <div className="mt-3 text-left ml-2 text-sm truncate">
                            <span className='font-semibold mr-1 text-md'>bhavzzz___ </span> this is an random post content tjans ;jkabdk blj habs dlhbds ljk jadsua  duav sv sadv iudv sv di 
                        </div>
                        <div className="ml-2 text-left text-gray-400">
                            <a href="#">more</a>
                        </div>
                        <div className="text-left ml-2 my-2">
                            <a href="#" className='text-gray-400'>
                                View all 20 comments
                            </a>
                            <br />
                            <input type="text" className='border-0 w-full pr-2 py-1' placeholder='Add a comment...' />
                        </div>

                    </div>
                </div>
                {/*  main post */}

                <div className="border-b w-full mt-5">
                    <div className="flex justify-between mb-2">
                        <div className="flex items-center space-x-2">
                            <div className="flex justify-center items-center h-[43px] w-[43px] rounded-full bg-gradient-to-l from-pink-500 via-red-500 to-yellow-500">
                                <img className='h-[38px] w-[38px] rounded-full border-2 border-gradient-to-l from-pink-500 via-red-500 to-yellow-500' src="data:image/jpeg;base64,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" alt="" />
                            </div>
                            <div className="font-semibold">bhavzzz___</div>
                            <div className="text-blue-800 text-xl"><TbDiscountCheckFilled /></div>
                            <div className="text-gray-500 font-sans">10m</div>
                        </div>
                        <a href='#' className="flex items-center text-3xl pr-2">
                            <svg aria-label="More options" className="_ab6-" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)" height="24" role="img" viewBox="0 0 24 24" width="24"><circle cx="12" cy="12" r="1.5"></circle><circle cx="6" cy="12" r="1.5"></circle><circle cx="18" cy="12" r="1.5"></circle></svg>
                        </a>
                    </div>
                    <div className="">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/2/24/Timisoara_-_Catholic_Dome_in_Union_Square.jpg" alt="" />
                    </div>
                    <div className="">
                        <div className="flex justify-between">
                            <div className="flex justify-start items-center w-4/12">
                                <a href="#" className="px-1 pr-4 py-3 ">
                                    <svg aria-label="Notifications" className="_ab6-" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path></svg>
                                </a>
                                <a href="#" className='pr-4'>
                                    <svg aria-label="Comment" className="x1lliihq x1n2onr6" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Comment</title><path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg>
                                </a>
                                <a href="#">
                                    <svg aria-label="Share Post" className="x1lliihq x1n2onr6" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Share Post</title><line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></polygon></svg>
                                </a>
                            </div>
                            <div className="mt-3">
                                <a href="#">
                                    <svg aria-label="Save" className="x1lliihq x1n2onr6" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Save</title><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon></svg>
                                </a>
                            </div>
                        </div>

                        <div className="mt-3 flex justify-start ml-2">
                            <p className="font-semibold">2,355 likes</p>
                        </div>
                        <div className="mt-3 text-left ml-2 text-sm truncate">
                            <span className='font-semibold mr-1 text-md'>bhavzzz___ </span> this is an random post content tjans ;jkabdk blj habs dlhbds ljk jadsua  duav sv sadv iudv sv di 
                        </div>
                        <div className="ml-2 text-left text-gray-400">
                            <a href="#">more</a>
                        </div>
                        <div className="text-left ml-2 my-2">
                            <a href="#" className='text-gray-400'>
                                View all 20 comments
                            </a>
                            <br />
                            <input type="text" className='border-0 w-full pr-2 py-1' placeholder='Add a comment...' />
                        </div>

                    </div>
                </div>
                {/*  main post */}

                <div className="border-b w-full mt-5">
                    <div className="flex justify-between mb-2">
                        <div className="flex items-center space-x-2">
                            <div className="flex justify-center items-center h-[43px] w-[43px] rounded-full bg-gradient-to-l from-pink-500 via-red-500 to-yellow-500">
                                <img className='h-[38px] w-[38px] rounded-full border-2 border-gradient-to-l from-pink-500 via-red-500 to-yellow-500' src="data:image/jpeg;base64,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" alt="" />
                            </div>
                            <div className="font-semibold">bhavzzz___</div>
                            <div className="text-blue-800 text-xl"><TbDiscountCheckFilled /></div>
                            <div className="text-gray-500 font-sans">10m</div>
                        </div>
                        <a href='#' className="flex items-center text-3xl pr-2">
                            <svg aria-label="More options" className="_ab6-" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)" height="24" role="img" viewBox="0 0 24 24" width="24"><circle cx="12" cy="12" r="1.5"></circle><circle cx="6" cy="12" r="1.5"></circle><circle cx="18" cy="12" r="1.5"></circle></svg>
                        </a>
                    </div>
                    <div className="">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/2/24/Timisoara_-_Catholic_Dome_in_Union_Square.jpg" alt="" />
                    </div>
                    <div className="">
                        <div className="flex justify-between">
                            <div className="flex justify-start items-center w-4/12">
                                <a href="#" className="px-1 pr-4 py-3 ">
                                    <svg aria-label="Notifications" className="_ab6-" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path></svg>
                                </a>
                                <a href="#" className='pr-4'>
                                    <svg aria-label="Comment" className="x1lliihq x1n2onr6" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Comment</title><path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg>
                                </a>
                                <a href="#">
                                    <svg aria-label="Share Post" className="x1lliihq x1n2onr6" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Share Post</title><line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></polygon></svg>
                                </a>
                            </div>
                            <div className="mt-3">
                                <a href="#">
                                    <svg aria-label="Save" className="x1lliihq x1n2onr6" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Save</title><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon></svg>
                                </a>
                            </div>
                        </div>

                        <div className="mt-3 flex justify-start ml-2">
                            <p className="font-semibold">2,355 likes</p>
                        </div>
                        <div className="mt-3 text-left ml-2 text-sm truncate">
                            <span className='font-semibold mr-1 text-md'>bhavzzz___ </span> this is an random post content tjans ;jkabdk blj habs dlhbds ljk jadsua  duav sv sadv iudv sv di 
                        </div>
                        <div className="ml-2 text-left text-gray-400">
                            <a href="#">more</a>
                        </div>
                        <div className="text-left ml-2 my-2">
                            <a href="#" className='text-gray-400'>
                                View all 20 comments
                            </a>
                            <br />
                            <input type="text" className='border-0 w-full pr-2 py-1' placeholder='Add a comment...' />
                        </div>

                    </div>
                </div>
                {/*  main post */}

                <div className="border-b w-full mt-5">
                    <div className="flex justify-between mb-2">
                        <div className="flex items-center space-x-2">
                            <div className="flex justify-center items-center h-[43px] w-[43px] rounded-full bg-gradient-to-l from-pink-500 via-red-500 to-yellow-500">
                                <img className='h-[38px] w-[38px] rounded-full border-2 border-gradient-to-l from-pink-500 via-red-500 to-yellow-500' src="data:image/jpeg;base64,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" alt="" />
                            </div>
                            <div className="font-semibold">bhavzzz___</div>
                            <div className="text-blue-800 text-xl"><TbDiscountCheckFilled /></div>
                            <div className="text-gray-500 font-sans">10m</div>
                        </div>
                        <a href='#' className="flex items-center text-3xl pr-2">
                            <svg aria-label="More options" className="_ab6-" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)" height="24" role="img" viewBox="0 0 24 24" width="24"><circle cx="12" cy="12" r="1.5"></circle><circle cx="6" cy="12" r="1.5"></circle><circle cx="18" cy="12" r="1.5"></circle></svg>
                        </a>
                    </div>
                    <div className="">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/2/24/Timisoara_-_Catholic_Dome_in_Union_Square.jpg" alt="" />
                    </div>
                    <div className="">
                        <div className="flex justify-between">
                            <div className="flex justify-start items-center w-4/12">
                                <a href="#" className="px-1 pr-4 py-3 ">
                                    <svg aria-label="Notifications" className="_ab6-" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path></svg>
                                </a>
                                <a href="#" className='pr-4'>
                                    <svg aria-label="Comment" className="x1lliihq x1n2onr6" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Comment</title><path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg>
                                </a>
                                <a href="#">
                                    <svg aria-label="Share Post" className="x1lliihq x1n2onr6" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Share Post</title><line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></polygon></svg>
                                </a>
                            </div>
                            <div className="mt-3">
                                <a href="#">
                                    <svg aria-label="Save" className="x1lliihq x1n2onr6" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Save</title><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon></svg>
                                </a>
                            </div>
                        </div>

                        <div className="mt-3 flex justify-start ml-2">
                            <p className="font-semibold">2,355 likes</p>
                        </div>
                        <div className="mt-3 text-left ml-2 text-sm truncate">
                            <span className='font-semibold mr-1 text-md'>bhavzzz___ </span> this is an random post content tjans ;jkabdk blj habs dlhbds ljk jadsua  duav sv sadv iudv sv di 
                        </div>
                        <div className="ml-2 text-left text-gray-400">
                            <a href="#">more</a>
                        </div>
                        <div className="text-left ml-2 my-2">
                            <a href="#" className='text-gray-400'>
                                View all 20 comments
                            </a>
                            <br />
                            <input type="text" className='border-0 w-full pr-2 py-1' placeholder='Add a comment...' />
                        </div>

                    </div>
                </div>
                {/*  main post */}
            </div>
        </div>
    )
}

export default Post