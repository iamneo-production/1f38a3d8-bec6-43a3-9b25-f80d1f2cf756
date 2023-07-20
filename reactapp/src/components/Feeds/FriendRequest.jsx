import React from 'react'

const FriendRequest = () => {
  return (
    <div className='w-full '>
        <div className=' h-[80px] flex justify-around items-center border-b'>
            <div>
                <a href='#' className='font-bold text-gray-700'>FriendRequest
                </a>
        
            </div> 
            <div>
                <a href='#' className='font-bold text-blue-700'>see all
                </a>
            </div>

        </div>
        <div className=' h-[360px] pt-5 overflow-y-auto'>
            <div className='w-full flex justify-center '>
                <div className='w-8/12 flex flex-col'>
                    <div className='flex justify-around '>
                    <div>
                        <img class="object-cover w-16 h-16 rounded-full" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />

                    </div>
                    <div>
                        <p className='font-semibold'>amir_khan</p>
                        <p className='text-gray-500 text-md'>12 mutual friends</p>

                    </div>
                </div>

                <div className='flex justify-between mt-3'>
                    <button className='bg-blue-700 rounded-3xl text-white px-6 py-2'>
                        confirm
                    </button>
                    <button className='bg-gray-200 rounded-3xl px-6 py-2'>
                        delete
                    </button>
                </div>
                </div>
            </div>

            <div className='w-full flex justify-center mt-4'>
                <div className='w-8/12 flex flex-col'>
                    <div className='flex justify-around '>
                    <div>
                        <img class="object-cover w-16 h-16 rounded-full" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />

                    </div>
                    <div>
                        <p className='font-semibold'>karthik_aryan</p>
                        <p className='text-gray-500 text-md'>12 mutual friends</p>

                    </div>
                </div>

                <div className='flex justify-between mt-3'>
                    <button className='bg-blue-700 rounded-3xl text-white px-6 py-2'>
                        confirm
                    </button>
                    <button className='bg-gray-200 rounded-3xl px-6 py-2'>
                        delete
                    </button>
                </div>
                </div>
            </div>

            <div className='w-full flex justify-center mt-4 '>
                <div className='w-8/12 flex flex-col'>
                    <div className='flex justify-around '>
                    <div>
                        <img class="object-cover w-16 h-16 rounded-full" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />

                    </div>
                    <div>
                        <p className='font-semibold'>roshan___</p>
                        <p className='text-gray-500 text-md'>12 mutual friends</p>

                    </div>
                </div>

                <div className='flex justify-between mt-3'>
                    <button className='bg-blue-700 rounded-3xl text-white px-6 py-2'>
                        confirm
                    </button>
                    <button className='bg-gray-200 rounded-3xl px-6 py-2'>
                        delete
                    </button>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FriendRequest