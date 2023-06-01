import React,{useState} from 'react';
import { FaRegSun } from 'react-icons/fa';
import { MdOutlineNotifications } from 'react-icons/md'
import { TbMessageChatbot } from 'react-icons/tb'
import { GoHome } from 'react-icons/go'

const NavBar = ({showNav,setShowNav}) => {

    //  useState("false") -> GetVariable, SetFunction("false")

    //const [showNav, setShowNav] = useState(false);
        
    //  showNav == True ? "kjdandsajdd" :  "nakjd"

    return (
        <nav class=" h-24 shadow-sm flex align-items-center  absolute top-0 sticky z-50 border-gray-200 bg-gray-700">
            <div class="max-w-screen-xl flex flex-wrap items-center w-full justify-between mx-5">
                <div class="flex items-center gap-2 px-2">
                    {/* <img src="./Images/settingsicon.png" class="h-8 mr-3" alt="Settings" /> */}
                    {/* <FaRegSun color='white' fontSize="30" /> */}
                    <span class="self-center text-2xl font-semibold italic whitespace-nowrap text-white">konnect</span>
                </div>
                <button onClick={() => setShowNav(!showNav)}  type="button" class="inline-flex items-center p-2 ml-3 text-sm  rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 text-gray-400 " aria-controls="navbar-default" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                </button>
                <div class={ showNav === true ? "w-full md:block md:w-auto"  : "hidden w-full md:block md:w-auto"} id="navbar-default">
                    <ul class="font-medium flex flex-col align-items-center p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white bg-gray-800 md:bg-gray-700 border-gray-700">
                        <li>
                            <a  href="/" class="block flex space-x-2 items-center py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" aria-current="page">
                                <GoHome size="30"/>
                                <span className='text-white lg:hidden md:hidden inline-block text-lg'>Home</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="block flex space-x-2 items-center py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                <TbMessageChatbot size={30}/>
                                <span className='text-white lg:hidden md:hidden inline-block text-lg'>Messaging</span>
                                </a>
                        </li>
                        <li> 
                            <a href="#" class="block flex space-x-2 items-center py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                <MdOutlineNotifications size={30}/> 
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
                            <a href="#" class="block flex space-x-2 items-center py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                            <img class="object-cover w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />
                                        
                            <span className='text-white lg:hidden md:hidden inline-block text-lg'>Bhavana</span>
                            </a>
                            
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default NavBar