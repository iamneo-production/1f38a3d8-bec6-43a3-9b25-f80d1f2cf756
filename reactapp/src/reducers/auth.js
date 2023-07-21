<<<<<<< HEAD
import {LOGIN_FAIL,
  LOGIN_SUCCESS,
  SIGNUP_FAIL,
  SIGNUP_SUCCESS,
  LOGOUT,
  USER_FETCH_SUCCESS,
  LOAD_USER_FETCH_SUCCESS,
  LOAD_USER_FETCH_FAIL
} from '../actions/types';
=======
import {LOGIN_FAIL,LOGIN_SUCCESS,SIGNUP_FAIL,SIGNUP_SUCCESS,LOGOUT} from '../actions/types';
>>>>>>> Project-Workspace-pratikmandge



const initialState = {
  token: null,
  login_state:{status:null,message:null},
<<<<<<< HEAD
  userName: null,
=======
  user: null,
>>>>>>> Project-Workspace-pratikmandge
  isAuthenticated: false,
  
}; 

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {

    case LOGIN_SUCCESS:
      localStorage.setItem('token', payload.token);
<<<<<<< HEAD
      // localStorage.setItem('refresh', payload.refresh);
      // localStorage.setItem("logfail", JSON.stringify(false));
=======
>>>>>>> Project-Workspace-pratikmandge
      
      return {
        ...state,
        isAuthenticated: true,
        token: payload.token,
        login_state: {
<<<<<<< HEAD
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
=======
          state:false,
          message:"Success"
        }
      }

>>>>>>> Project-Workspace-pratikmandge
    case SIGNUP_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
<<<<<<< HEAD
=======
        // token: payload.token,
>>>>>>> Project-Workspace-pratikmandge
        login_state: {
          status:false,
          message:"Success"
        }
      }
<<<<<<< HEAD
    
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
=======

    
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
    case SIGNUP_FAIL:
>>>>>>> Project-Workspace-pratikmandge
    case LOGOUT:
      // localStorage.removeItem('access');
      // localStorage.removeItem('refresh');

<<<<<<< HEAD
=======
      localStorage.removeItem('token');
>>>>>>> Project-Workspace-pratikmandge

      return {
        ...state,
        token: null,
        // refresh: null,
        isAuthenticated: false,
<<<<<<< HEAD
        user: null,
        login_state:{
          status:null,
          message:null
        }
=======
        user: null
>>>>>>> Project-Workspace-pratikmandge
      }



    default:
      return state;
  }
}








