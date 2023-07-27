import {LOGIN_FAIL,
  LOGIN_SUCCESS,
  SIGNUP_FAIL,
  SIGNUP_SUCCESS,
  LOGOUT,
  USER_FETCH_SUCCESS,
  LOAD_USER_FETCH_SUCCESS,
  LOAD_USER_FETCH_FAIL,
  POST_CREATE_FAIL,
  POST_CREATE_SUCCESS,
  POST_FETCH_SUCCESS,
  POST_FETCH_FAIL,
} from '../actions/types';



const initialState = {
  token: null,
  login_state:{status:null,message:null},
  userName: null,
  isAuthenticated: false,
  createdPost:{},
  postsData:{},
  isPostAvail:false,
}; 

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {

    case LOGIN_SUCCESS:
      localStorage.setItem('token', payload.token);
      
      return {
        ...state,
        isAuthenticated: true,
        token: payload.token,
        login_state: {
          status:false,
          message:"Success"
        }
      }
    
    case LOAD_USER_FETCH_SUCCESS:
      localStorage.setItem('user', payload);
      
      return {
        ...state,
        userName:payload,
        login_state: {
          status:false,
          message:"Success"
        }
      }
    case SIGNUP_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
        login_state: {
          status:false,
          message:"Success"
        }
      }
    case POST_CREATE_SUCCESS:
      return{
        ...state,
        createdPost:payload
      }
    case POST_FETCH_SUCCESS:
      return{
        ...state,
        postsData:payload,
        isPostAvail:true,
      }
      case USER_FETCH_SUCCESS:
        return {}

    
    case LOGIN_FAIL:
      // console.log(payload)
      
      localStorage.removeItem('token');
      return {
          ...state,
          login_state: {
            status:true,
            message:payload.message
          },
          isAuthenticated: false,
          token: null,
      }
    case POST_CREATE_FAIL:
      return {
        ...state,
        createdPost:{}
      }
    case POST_FETCH_FAIL:
      return{
        ...state,
        postsData:{},
        isPostAvail:false
      }
    case SIGNUP_FAIL:
    case LOAD_USER_FETCH_FAIL:
    case LOGOUT:
      // localStorage.removeItem('access');
      // localStorage.removeItem('refresh');

      localStorage.removeItem('token');

      return {
        ...state,
        token: null,
        // refresh: null,
        isAuthenticated: false,
        user: null,
        login_state:{
          status:null,
          message:null
        }
      }



    default:
      return state;
  }
}








