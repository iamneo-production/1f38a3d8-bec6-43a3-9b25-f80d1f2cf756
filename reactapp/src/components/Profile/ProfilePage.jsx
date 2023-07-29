import React from 'react'


const ProfilePage = () => {
  return (
    <div className=' ml-5 h-screen w-9/12 bg-gray-100'>
      <div className='bg-gray-700 h-[200px] relative w-full text-white'>
        <div className="w-6/12 absolute bottom-[-60px] h-[200px]">
          <div className="p-5 flex justify-center items-center">
            <div className="flex items-center ">
              <div className="">
                <img className="w-40 border-4 shadow-md border-white rounded-sm box-border md:h-40 object-cover" src="https://ii2.pepperfry.com/media/catalog/product/w/h/1100x1210/white-ceramic-pipe-shaped-small-flower-pot---set-of-2-by-cdi-white-ceramic-pipe-shaped-small-flower--riznsl.jpg" />
              </div>
              <div className="mx-4 ">
                <p className='text-2xl font-semibold'>Giduturi Bhavana</p>
                <p>New York</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <div className="flex justify-between w-full h-[100px]">
          <div className="w-5/12 h-[100px] flex items-center pl-[4.5%]">
            <button className='px-8 py-2 bg-gray-100 border-2 border-gray-500 text-gray-900 shadow-md rounded-md hover:bg-gray-200'>
              EDIT PROFILE
            </button>
          </div>
          <div className=" flex justify-around w-5/12 h-[100px]">
            <div className=" text-center pt-5 h-[100px] w-3/12">
              <p className='text-2xl font-semibold'>253</p>
              <p className='text-lg font-normal text-gray-500'>Photos</p>
            </div>
            <div className=" text-center pt-5 h-[100px] w-3/12">
              <p className='text-2xl font-semibold'>1026</p>
              <p className='text-lg font-normal text-gray-500'>Followers</p>
            </div>
            <div className=" text-center pt-5 h-[100px] w-3/12">
              <p className='text-2xl font-semibold'>478</p>
              <p className='text-lg font-normal text-gray-500'>Following</p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-5 h-[200px] w-full">
        <div className="p-3 ">
          <p className='text-2xl font-semibold'>About</p>
          <div className=" h-[150px] p-5">
            <p className=''>Web Developer</p>
            <p className=''>Lives in New York</p>
            <p className=''>Photographer</p>

          </div>
        </div>
      </div>

      <div className="w-full px-8 flex justify-between items-center">
        <div className="font-semibold text-2xl">
          Posts
        </div>

        <div className=" text-xl">
         <button className='text-gray-500'>
          show all
         </button>
        </div>

      </div>
    </div>
  )
}

export default ProfilePage