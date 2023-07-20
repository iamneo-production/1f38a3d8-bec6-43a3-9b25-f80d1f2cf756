import {LOGIN_FAIL,
  LOGIN_SUCCESS,
  SIGNUP_FAIL,
  SIGNUP_SUCCESS,
  LOGOUT,
  USER_FETCH_SUCCESS,
  LOAD_USER_FETCH_SUCCESS,
  LOAD_USER_FETCH_FAIL
} from '../actions/types';



const initialState = {
  token: null,
  login_state:{status:null,message:null},
  userName: null,
  isAuthenticated: false,
  
}; 

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {

    case LOGIN_SUCCESS:
      localStorage.setItem('token', payload.token);
      // localStorage.setItem('refresh', payload.refresh);
      // localStorage.setItem("logfail", JSON.stringify(false));
      
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
    
      case USER_FETCH_SUCCESS:
        return 

    case LOGIN_FAIL:
      //localStorage.setItem("logfail", JSON.stringify(true));
      return {
        ...state,
        //logfail: true,
      }

    case SIGNUP_FAIL:
    case LOAD_USER_FETCH_FAIL:
    case LOGOUT:
      // localStorage.removeItem('access');
      // localStorage.removeItem('refresh');


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








