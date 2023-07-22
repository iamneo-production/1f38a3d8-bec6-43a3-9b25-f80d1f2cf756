import React, { useState,useMemo } from 'react';
import { FaRegSun } from 'react-icons/fa';
import { MdOutlineNotifications } from 'react-icons/md'
import { TbMessageChatbot } from 'react-icons/tb'
import { GoHome } from 'react-icons/go'
import SearchBar from './SearchBar';
import { connect } from 'react-redux';

const NavBar = ({ showNav,isAuthenticated,token, setShowNav }) => {


    const [showProfile, setShowProfile] = useState(false);

    const userName = localStorage.getItem("user")
    

    const logout = () => {
        localStorage.removeItem("token")
        window.location = "/login";
    }

    const localtoken = useMemo(()=>{
        if(isAuthenticated){
            return token
        }
        else{
            return localStorage.getItem("token")
        }
    },[isAuthenticated,token])

    return (
        <nav className=" h-20 shadow-sm flex align-items-center  absolute top-0 sticky z-50 border-gray-200 bg-gray-700">
            <div className="max-w-screen-xl flex flex-wrap items-center w-full justify-between mx-5">
                <div className="flex items-center gap-2 px-2">
                   
                    <a href='/'>
                        <span className="self-center text-2xl font-semibold italic whitespace-nowrap text-white">konnect</span>
                    </a>
                </div>

                <button onClick={() => setShowNav(!showNav)} type="button" className="inline-flex items-center p-2 ml-3 text-sm  rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 text-gray-400 " aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"></path></svg>
                </button>

                <div className={showNav === true ? "w-full md:block md:w-auto" : "hidden w-full md:block md:w-auto"} id="navbar-default">

                    <ul className="items-center font-medium flex flex-col align-items-center p-4 md:p-0 mt-4 border border-gray-700 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0  bg-gray-800 md:bg-gray-700 ">
                        <div className='w-[500px] mx-20'>
                            {localtoken !== null && <SearchBar />}
                        </div>

                        {
                            localtoken !== null
                                ?
                                <>
                                    <li>
                                        <a href="/" className="block flex space-x-2 items-center py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0" aria-current="page">
                                            <GoHome size="30" />
                                            <span className='text-white lg:hidden md:hidden inline-block text-lg'>Home</span>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="/messages" className="block flex space-x-2 items-center py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">
                                            <TbMessageChatbot size={30} />
                                            <span className='text-white lg:hidden md:hidden inline-block text-lg'>Messaging</span>
                                        </a>
                                    </li>

                                    <li>
                                        <div className="block flex space-x-2 items-center py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">
                                            <MdOutlineNotifications size={30} />
                                            <span className='text-white lg:hidden md:hidden inline-block text-lg'>Notifications</span>
                                        </div>
                                    </li>

                                    <li>
                                        <a href="/settings" className="block flex space-x-2 items-center py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">
                                            <FaRegSun color='white' size="30" />

                                            <span className='text-white lg:hidden md:hidden inline-block text-lg'>Settings</span>
                                        </a>

                                    </li>

                                    <li>
                                        <div onClick={() => setShowProfile(!showProfile)} className="block flex space-x-2 items-center py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">
                                            <img className="object-cover w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />

                                            <span className='text-white lg:hidden md:hidden inline-block text-lg'>{userName}</span>
                                        </div>

                                    </li>


                                    <div id="dropdownAvatar" className={showProfile ? "z-10 absolute right-8 top-14  bg-white divide-y divide-gray-100 rounded-lg shadow w-44" : "z-10  bg-white divide-y divide-gray-100 rounded-lg shadow w-44 hidden"}>

                                        <div className="px-4 py-3 text-sm text-gray-900">

                                            <div className="font-medium truncate pt-2">{userName }
                                            </div>
                                            <hr />

                                        </div>

                                        <ul className="py-2 text-sm text-gray-700 " aria-labelledby="dropdownUserAvatarButton">

                                            <li>
                                                <div className="block px-4 py-2 hover:bg-gray-100">Profile</div>
                                            </li>

                                        </ul>

                                        <div className="py-2">
                                            <div onClick={logout} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign out</div>
                                        </div>

                                    </div>
                                </>
                                :
                                <>
                                    <li>
                                        <a href="/login" className="block flex space-x-2 items-center py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0" aria-current="page">
                                            <span className='text-white text-lg'>Login</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/register" className="block flex space-x-2 items-center py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0" aria-current="page">
                                            <span className='text-white text-lg'>Register</span>
                                        </a>
                                    </li>
                                </>
                        }

                    </ul>
                </div>
            </div>
        </nav>


    )
}

const mapStateToProps = state => ({
	isAuthenticated: state.auth.isAuthenticated,
	token: state.auth.token,
	
});

export default connect(mapStateToProps,null)(NavBar)

