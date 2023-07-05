import {LOGIN_FAIL,LOGIN_SUCCESS,SIGNUP_FAIL,SIGNUP_SUCCESS,LOGOUT} from '../actions/types';



const initialState = {
  token: null,
  user: null,
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
        // refresh: payload.refresh,
        // logfail: false,
      }

    case SIGNUP_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
        token: payload.token,

      }

    case LOGIN_FAIL:
      //localStorage.setItem("logfail", JSON.stringify(true));
      return {
        ...state,
        //logfail: true,
      }

    case SIGNUP_FAIL:
    case LOGOUT:
      // localStorage.removeItem('access');
      // localStorage.removeItem('refresh');


      return {
        ...state,
        token: null,
        // refresh: null,
        isAuthenticated: false,
        user: null
      }



    default:
      return state;
  }
}








