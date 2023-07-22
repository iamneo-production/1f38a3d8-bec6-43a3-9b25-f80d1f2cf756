<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> Project-Workspace-ukeerthi18
import {LOGIN_FAIL,
  LOGIN_SUCCESS,
  SIGNUP_FAIL,
  SIGNUP_SUCCESS,
  LOGOUT,
  USER_FETCH_SUCCESS,
  LOAD_USER_FETCH_SUCCESS,
  LOAD_USER_FETCH_FAIL
} from '../actions/types';
<<<<<<< HEAD
=======
import {LOGIN_FAIL,LOGIN_SUCCESS,SIGNUP_FAIL,SIGNUP_SUCCESS,LOGOUT} from '../actions/types';
>>>>>>> Project-Workspace-pratikmandge
=======
>>>>>>> Project-Workspace-ukeerthi18



const initialState = {
  token: null,
  login_state:{status:null,message:null},
<<<<<<< HEAD
<<<<<<< HEAD
  userName: null,
=======
  user: null,
>>>>>>> Project-Workspace-pratikmandge
=======
  userName: null,
>>>>>>> Project-Workspace-ukeerthi18
  isAuthenticated: false,
  
}; 

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {

    case LOGIN_SUCCESS:
      localStorage.setItem('token', payload.token);
<<<<<<< HEAD
<<<<<<< HEAD
      // localStorage.setItem('refresh', payload.refresh);
      // localStorage.setItem("logfail", JSON.stringify(false));
=======
>>>>>>> Project-Workspace-pratikmandge
=======
      // localStorage.setItem('refresh', payload.refresh);
      // localStorage.setItem("logfail", JSON.stringify(false));
>>>>>>> Project-Workspace-ukeerthi18
      
      return {
        ...state,
        isAuthenticated: true,
        token: payload.token,
        login_state: {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> Project-Workspace-ukeerthi18
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
<<<<<<< HEAD
=======
          state:false,
          message:"Success"
        }
      }

>>>>>>> Project-Workspace-pratikmandge
=======
>>>>>>> Project-Workspace-ukeerthi18
    case SIGNUP_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
<<<<<<< HEAD
<<<<<<< HEAD
=======
        // token: payload.token,
>>>>>>> Project-Workspace-pratikmandge
=======
>>>>>>> Project-Workspace-ukeerthi18
        login_state: {
          status:false,
          message:"Success"
        }
      }
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> Project-Workspace-ukeerthi18
    
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
<<<<<<< HEAD
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
=======
>>>>>>> Project-Workspace-ukeerthi18
    case LOGOUT:
      // localStorage.removeItem('access');
      // localStorage.removeItem('refresh');

<<<<<<< HEAD
<<<<<<< HEAD
=======
      localStorage.removeItem('token');
>>>>>>> Project-Workspace-pratikmandge
=======
>>>>>>> Project-Workspace-ukeerthi18

      return {
        ...state,
        token: null,
        // refresh: null,
        isAuthenticated: false,
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> Project-Workspace-ukeerthi18
        user: null,
        login_state:{
          status:null,
          message:null
        }
<<<<<<< HEAD
=======
        user: null
>>>>>>> Project-Workspace-pratikmandge
=======
>>>>>>> Project-Workspace-ukeerthi18
      }



    default:
      return state;
  }
}








