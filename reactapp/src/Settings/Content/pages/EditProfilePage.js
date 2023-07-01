import React from 'react'

const EditProfilePage = () => {
  return (
    <div className='p-3 w-full'>
      <div className='bg-white shadow-lg shadow-gray-300 rounded-lg h-[600px] w-9/12'>
        <div className='font-semibold text-3xl p-4 text-gray-800'>
          EditProfilePage
        </div>

        <div className='flex justify-center'>
          <div className='w-10/12 mt-3'>
            <div className='flex justify-between'>
              <div className='flex flex-col w-5/12'>
                <label>First Name</label>
                <input type='text' className='px-2 py-1 my-2 border rounded-lg' placeholder='Firstname' />
              </div>

              <div className='flex flex-col w-5/12'>
                <label>Last Name</label>
                <input type='text' className='px-2 py-1 my-2 border rounded-lg' placeholder='Lastname' />
              </div>
            </div>

            <div className='flex my-2 justify-between'>
              <div className='flex flex-col w-5/12'>
                <label>Email</label>
                <input type='text' className='px-2 py-1 my-2 border rounded-lg' placeholder='Ex-abc@gmail.com' />
              </div>

              {/* <div className='flex flex-col w-5/12'>
                <label>Contact Number</label>
                <input type='text' className='px-2 py-1 my-2 border rounded-lg' placeholder='contact no' />
              </div> */}
            </div>

            <div className=''>
                <label>Bio</label>
                <textarea className='w-full h-[150px] p-2 rounded-lg my-2 border border-gray-600' placeholder="what's in your mind?.... "></textarea>

            </div>


          </div>

        </div>
           
        <div className='mt-4 m-20 flex gap-3'>
          <button className='px-4 py-2 rounded-lg bg-blue-300 shadow-lg hover:shadow-xl hover:bg-blue-500'>Update </button>
          <button className='px-4 py-2 rounded-lg bg-gray-200 shadow-lg hover:shadow-xl hover:bg-gray-400 '> Cancel </button>
        </div>

      </div>
    </div>
  )
}

export default EditProfilePage