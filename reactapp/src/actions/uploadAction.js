// // import * as UploadApi from '../api/UploadRequest'

// // export const uploadPost = (Postdata) => async(dispatch) => {
// //   dispatch({type: 'POST_START'})
// //   try{
// //     const token = localStorage.getItem('token');
// //     if (token) {
// //       Postdata.headers = {
// //         Authorization: `Bearer ${token}`,
// //       };
// //     }
// //     await UploadApi.uploadPost(Postdata)
// //     // const {data} = await UploadApi.uploadPost(Postdata)
// //     // dispatch({type: 'POST_SUCCESS', payload: data})
// //   } 
// //   catch(error){
// //       console.log(error)
// //       dispatch({type: 'POST_FAIL'})
// //   }
// // }


// import * as UploadApi from '../api/UploadRequest';

// export const uploadPost = (data) => async (dispatch) => {
//   console.log(data);
//   try {
//     const token = localStorage.getItem('token');

//     const config = {
//       headers: {
//         'Content-Type': 'multipart/form-data',
//       },
//     };

//     if (token) {
//       config.headers['Authorization'] = `Bearer ${token}`;
//     }
    
//     await UploadApi.uploadPost(data, config);

//   } catch (error) {
//     console.log(error);
//   }
// };

import * as UploadApi from '../api/UploadRequest';

export const uploadPost = (formData) => async (dispatch) => {
  dispatch({ type: 'POST_START' });
  try {
    const token = localStorage.getItem('token');
    const config = {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
    };
    
    const {data} = await UploadApi.uploadPost(formData, config);
    dispatch({ type: 'POST_SUCCESS', payload: data });

  } catch (error) {
    console.error("Error uploading post:", error);
    dispatch({ type: 'POST_FAIL' });
  }
};
