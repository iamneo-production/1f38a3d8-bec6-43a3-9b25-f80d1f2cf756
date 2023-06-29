import React, { useState } from 'react';
import { FaRegSun } from 'react-icons/fa';
import { MdOutlineNotifications } from 'react-icons/md'
import { TbMessageChatbot } from 'react-icons/tb'
import { GoHome } from 'react-icons/go'
import SearchBar from './SearchBar';
import { redirect } from "react-router-dom";

const NavBar = ({ showNav, setShowNav }) => {


    //  useState("false") -> GetVariable, SetFunction("false")

    // const [showNav, setShowNav] = useState(false);
    const [showProfile, setShowProfile] = useState(false);

    // const [email, setEmail] = useState("test@gmail.com");
    var email = "test@gmail.com"


    if(localStorage.getItem("user") !== null){
        let user = localStorage.getItem("user")
        email = user.split(" ")[0];
        // setEmail(user.split(" ")[0]);
    }

    const logout = () =>{
        localStorage.removeItem("user")
        window.location = "/login";
        // navigate("/login")
        // redirect("/login")
    }

    //  showNav == True ? "kjdandsajdd" :  "nakjd"

    return (
        <nav class=" h-20 shadow-sm flex align-items-center  absolute top-0 sticky z-50 border-gray-200 bg-gray-700">
            <div class="max-w-screen-xl flex flex-wrap items-center w-full justify-between mx-5">
                <div class="flex items-center gap-2 px-2">
                    {/* <img src="./Images/settingsicon.png" class="h-8 mr-3" alt="Settings" /> */}
                    {/* <FaRegSun color='white' fontSize="30" /> */}
                    <a href='/'>
                        <span class="self-center text-2xl font-semibold italic whitespace-nowrap text-white">konnect</span>
                    </a>                
                </div>
                <button onClick={() => setShowNav(!showNav)} type="button" class="inline-flex items-center p-2 ml-3 text-sm  rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 text-gray-400 " aria-controls="navbar-default" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                </button>
                <div class={showNav === true ? "w-full md:block md:w-auto" : "hidden w-full md:block md:w-auto"} id="navbar-default">

                    <ul class="items-center font-medium flex flex-col align-items-center p-4 md:p-0 mt-4 border border-gray-700 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0  bg-gray-800 md:bg-gray-700 ">
                        <div className='w-[500px] mx-20'>
                            <SearchBar />
                        </div>
                        <li>
                            <a href="/" class="block flex space-x-2 items-center py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" aria-current="page">
                                <GoHome size="30" />
                                <span className='text-white lg:hidden md:hidden inline-block text-lg'>Home</span>
                            </a>
                        </li>
                        <li>
                            <a href="/messages" class="block flex space-x-2 items-center py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                <TbMessageChatbot size={30} />
                                <span className='text-white lg:hidden md:hidden inline-block text-lg'>Messaging</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="block flex space-x-2 items-center py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                <MdOutlineNotifications size={30} />
                                <span className='text-white lg:hidden md:hidden inline-block text-lg'>Notifications</span>
                            </a>
                        </li>
                        <li>
                            <a href="/settings" class="block flex space-x-2 items-center py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                <FaRegSun color='white' size="30" />

                                <span className='text-white lg:hidden md:hidden inline-block text-lg'>Settings</span>
                            </a>

                        </li>

                        <li>
                            <a href="#" onClick={() => setShowProfile(!showProfile)}  class="block flex space-x-2 items-center py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                <img class="object-cover w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />

                                <span className='text-white lg:hidden md:hidden inline-block text-lg'>Bhavana</span>
                            </a>

                        </li>


                        <div id="dropdownAvatar" class={showProfile ? "z-10 absolute right-8 top-14  bg-white divide-y divide-gray-100 rounded-lg shadow w-44" :"z-10  bg-white divide-y divide-gray-100 rounded-lg shadow w-44 hidden" }>
                            <div class="px-4 py-3 text-sm text-gray-900">
                                <div className='mb-2'>Bonnie Green</div>
                                
                                <hr/>
                                <div class="font-medium truncate pt-2">{email}</div>
                            </div>
                            <ul class="py-2 text-sm text-gray-700 " aria-labelledby="dropdownUserAvatarButton">
                                
                                <li>
                                    <a href="#" class="block px-4 py-2 hover:bg-gray-100">Profile</a>
                                </li>
                            </ul>
                            <div class="py-2">
                                <a onClick={logout} href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign out</a>
                            </div>
                        </div>

                    </ul>
                </div>
            </div>
        </nav>


    )
}

export default NavBar

