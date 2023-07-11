export default function Chat() {
    return(
        <div>
            <div>
                <div className="relative min-h-screen flex flex-col bg-gray-50">
                    <nav className="flex-shrink-0 bg-red-600">
                        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
                            <div className="relative flex items-center justify-between h-16">
                                <div></div>
                                <div className="flex lg:hidden">
                                    <button className="bg-red-600 inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-red-600 focus:ring-white">
                                        <svg
                                           className="block h-6 w-6"
                                           xmlns="http://www.w3.org/2000/svg"
                                           fill="none"
                                           viewBox="0 0 24 24"
                                           stroke="currentColor"
                                           aria-hidden="true"
                                        >  
                                        <path
                                           strokeLinecap="round"
                                           strokeLinejoin="round"
                                           strokeWidth={2}
                                           d="M4 6h16M4 12h8m-8 6h16"
                                        />
                                        </svg>
                                    </button>
                                </div>

                                <div className="hidden lg:block lg:w-80">
                                    <div className="flex items-center justify-end">
                                        <div className="flex">
                                            <a href="#" className="px-3 py-2 rounded-md text-sm font-medium text-white hover:text-white">
                                                Chat
                                            </a>
                                        </div>

                                        <div className="ml-4 relative flex-shrink-0">
                                            <div>
                                                <button className="bg-red-700 flex text-sm rounded-full text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-red-700 focus:ring-white">
                                                    <img className="h-8 w-8 rounded-full" src="https://i.pinimg.com/originals/59/37/5f/59375f2046d3b594d59039e8ffbf485a.jpg"alt=""/>

                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                    {/*nav section ends here*/}
                    {/*Chats layout ends here*/}
                    <div className="flex-grow w-full max-w-7xl mx-auto lg:flex">
                        <div className="flex-1 min-w-0 bg-white xl:flex">
                            <div className="border-b border-gray-200 xl:border-b-0 xl:flex-shrink-0 xl:w-64 xl:border-r xl-border-gray-200 bg-gray-50">
                                <div className="h-full pl-4 pr-2 py-6 sm:pl-6 lg:pl-8 xl:pl-0">
                                    <div className="h-full relative">
                                        <div className="relative rounded-lg px-2 py-2 flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-red-500 mb-4">
                                            <div className="flex-shrink-0">
                                                <img 
                                                    className="h-12 w-12 rounded-full"
                                                    src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg" alt=""
                                                />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <a href="#" className="focus:outline-none">
                                                    <p className="text-sm font-bold text-red-600">Venkat</p>
                                                    <p className="text-sm text-gray-500 truncate">Marketing Manager</p>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="mb-4">
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                    <svg
                                                        className="h-5 w-5 text-gray-400"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                        aria-hidden="true"
                                                    >
                                                        <path
                                                          fillRule="evenodd"
                                                          d="MB 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.47614 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                                          clipRule="evenodd" 
                                                        />
                                                    </svg>
                                                </div>
                                                <input
                                                       name="search"
                                                       placeholder="search here"
                                                       className="focus:ring-red-500 focus:border-red-500 block w-full pl-10 sm:text-sm border-gray-100 rounded-full p-2 border"
                                                    />
                                            </div>
                                        </div>
                                        {/*search ends here */}
                                        {/*user 1 */}
                                        <div className="relative rounded-lg px-2 py-2 flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 mb-3 hover:bg-gray-200">
                                            <div className="flex-shrink-0">
                                                <img 
                                                   className="h-10 w-10 rounded-full"
                                                   src="https://images.pexels.com/photos/3454298/pexels-photo-3454298.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="s"
                                                />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <a href="#" className="focus:outline-none">
                                                    <div className="flex items-center justify-between">
                                                        <p className="text-sm font-bold text-red-600">
                                                            Bhavana
                                                        </p>
                                                        <div className="text-gray-400 text-xs">
                                                            12:35 AM
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center justify-between">
                                                        <p className="text-sm text-gray-500 truncate">Hi</p>
                                                        <div className="text-white text-xs bg-red-400 rounded-full px-1 py-0 ">
                                                            2
                                                        </div>

                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        {/*user 2*/}
                                        <div className="relative rounded-lg px-2 py-2 flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 mb-3 hover:bg-gray-200">
                                            <div className="flex-shrink-0">
                                                <img 
                                                   className="h-10 w-10 rounded-full"
                                                   src="https://yohohindi.com/wp-content/uploads/2022/08/49-girls-dp-yohohindi.com_.jpeg" alt="s"
                                                />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <a href="#" className="focus:outline-none">
                                                    <div className="flex items-center justify-between">
                                                        <p className="text-sm font-bold text-red-600">
                                                            Uma
                                                        </p>
                                                        <div className="text-gray-400 text-xs">
                                                            12:35 AM
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center justify-between">
                                                        <p className="text-sm text-gray-500 truncate">Hi</p>
                                                        <div className="text-white text-xs bg-red-400 rounded-full px-1 py-0 ">
                                                            2
                                                        </div>

                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Middle content start here */}
                            <div className="flex-1 p:2 sm:pb-6 justify-between flex flex-col h-screen hidden xl:flex">
                                <div className="flex sm:items-center justify-between py-3 border-b border-gray-200 p-3">
                                    <div className="flex items-center space-x-4">
                                        <img 
                                           src="https://yohohindi.com/wp-content/uploads/2022/08/49-girls-dp-yohohindi.com_.jpeg" alt=""
                                           className="w-10 sm:w-12 h-10 sm-h-12 rounded-full curser pointer"
                                        />
                                        <div className="flex flex-col leading-tight">
                                            <div className="text-1xl mt-1 flex items-center">
                                                <span className="text-gray-700 mr-3">Uma</span>
                                                <span className="text-green-500">
                                                    <svg width={10} height={10}>
                                                        <circle cx={5} cy={5} r={5} fill="currentColor"/>
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <button className="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none">
                                            <svg 
                                              xmlns="http://www.w3.org/2000/svg"
                                              fill="none"
                                              viewBox="0 0 24 24"
                                              stroke="currentColor"
                                              className="h-6 w-6"
                                            >
                                               <path
                                                  strokeLinecap="round"
                                                  strokeLinejoin="round"
                                                  strokeWidth={2}
                                                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                                />
                                            </svg>

                                        </button>
                                        <button className="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none">
                                            <svg 
                                              xmlns="http://www.w3.org/2000/svg"
                                              fill="none"
                                              viewBox="0 0 24 24"
                                              stroke="currentColor"
                                              className="h-6 w-6"
                                            >
                                               <path
                                                  strokeLinecap="round"
                                                  strokeLinejoin="round"
                                                  strokeWidth={2}
                                                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                                />
                                            </svg>

                                        </button>
                                    </div>
                                </div>
                                {/* Messages start here */}
                                <div 
                                  id="messages" 
                                  className="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch"
                                >
                                    <div className="chat-message">
                                        <div className="flex-items-end">
                                            <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                                                <div>
                                                    <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-200 text-gray-600">
                                                        Hi 
                                                    </span>
                                                </div>
                                            </div>
                                            <img 
                                               src="https://yohohindi.com/wp-content/uploads/2022/08/49-girls-dp-yohohindi.com_.jpeg" alt=""
                                               className="w-6 h-6 rounded-full order-1"
                                            />
                                        </div>
                                    </div>

                                    <div className="chat-message">
                                        <div className="flex-items-end justify-end">
                                            <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                                                <div>
                                                    <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-200 text-gray-600">
                                                        Hi 
                                                    </span>
                                                </div>
                                            </div>
                                            <img 
                                               src="https://yohohindi.com/wp-content/uploads/2022/08/49-girls-dp-yohohindi.com_.jpeg" alt=""
                                               className="w-6 h-6 rounded-full order-1"
                                            />
                                        </div>
                                    </div>
                                </div>   
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}