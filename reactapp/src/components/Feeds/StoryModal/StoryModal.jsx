import React, { useState,useEffect } from "react";

const StoryModal = ({ showModal, setShowModal }) => {
  const [selectedFile, setSelectedFile] = useState()
  const [preview, setPreview] = useState()

  // create a preview as a side effect, whenever selected file is changed
  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined)
      return
    }

    const objectUrl = URL.createObjectURL(selectedFile)
    setPreview(objectUrl)

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl)
  }, [selectedFile])

  const onSelectFile = e => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined)
      return
    }

    // I've kept this example simple by using the first image instead of multiple
    setSelectedFile(e.target.files[0])
  }







  return (
    <>
      {showModal ? (
        <>
          <div className="flex  justify-center items-center bg-gray-800 bg-opacity-70 overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-5/12 my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-3xl font=semibold">Create Story</h3>
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-black = h-6 w-6 text-xl block ">
                      x
                    </span>
                  </button>
                </div>
                <div className="relative p-4 flex-auto">
                  <form className=" rounded px-8  w-full">

                    {selectedFile && <div className="">
                      <img src={preview} alt="" className="object-cover w-full h-[300px]" />
                    </div>}

                    <label class="block mb-2 text-sm font-medium text-gray-900 " for="file_input">Upload file</label>
                    <input onChange={onSelectFile} class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50  focus:outline-none  placeholder-gray-600" id="file_input" type="file" />

                  </form>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default StoryModal;