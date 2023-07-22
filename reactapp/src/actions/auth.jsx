import axios from 'axios';
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> Project-Workspace-ukeerthi18
import {
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    SIGNUP_FAIL,
    SIGNUP_SUCCESS,
    USER_FETCH_SUCCESS,
    USER_FETCH_FAIL,
    LOAD_USER_FETCH_SUCCESS,
    LOAD_USER_FETCH_FAIL
}
    from './types';
<<<<<<< HEAD
=======
import {LOGIN_FAIL,LOGIN_SUCCESS,SIGNUP_FAIL,SIGNUP_SUCCESS} from './types';
>>>>>>> Project-Workspace-pratikmandge
=======
>>>>>>> Project-Workspace-ukeerthi18




export const login = (username, password) => async dispatch => {
    const config = {
        headers: {
<<<<<<< HEAD
<<<<<<< HEAD
            'Content-Type': 'application/json',
=======
            'Content-Type': 'application/json',            
>>>>>>> Project-Workspace-pratikmandge
=======
            'Content-Type': 'application/json',
>>>>>>> Project-Workspace-ukeerthi18
        }
    };
    const body = JSON.stringify({ username, password });
    try {
<<<<<<< HEAD
<<<<<<< HEAD

        const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/authenticate/`, body, config);
=======
        
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/authenticate/`, body,config);
>>>>>>> Project-Workspace-pratikmandge
=======

        const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/authenticate/`, body, config);
>>>>>>> Project-Workspace-ukeerthi18
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        });
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> Project-Workspace-ukeerthi18

        dispatch(load_user());
    } catch (err) {
        dispatch({
            type: LOGIN_FAIL,
            payload: { message: "Something went wrong!!!  " }
        })
    }
};

export const signup = (username, email, password, dateofbirth) => async dispatch => {
<<<<<<< HEAD
=======
    } catch (err) {
        if(err.response.status != 400){
            dispatch({
                type: LOGIN_FAIL,
                payload: {message:"Something went wrong!!!  "}
            })
        }else{
            dispatch({
                type: LOGIN_FAIL,
                payload: {message:"Invalid username or password"}
            })
        }
    } 
};

export const signup = (username,email, password,dateofbirth) => async dispatch => {
>>>>>>> Project-Workspace-pratikmandge
=======
>>>>>>> Project-Workspace-ukeerthi18
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

<<<<<<< HEAD
<<<<<<< HEAD
    const body = JSON.stringify({ username, email, password, dateofbirth });
=======
    const body = JSON.stringify({ username,email, password,dateofbirth });
>>>>>>> Project-Workspace-pratikmandge
=======
    const body = JSON.stringify({ username, email, password, dateofbirth });
>>>>>>> Project-Workspace-ukeerthi18

    try {
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/register`, body, config);
        console.log(res);
        dispatch({
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> Project-Workspace-ukeerthi18
            type: SIGNUP_SUCCESS,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: SIGNUP_FAIL
        })
    }
};

export const load_user = () => async dispatch => {
    if (localStorage.getItem('token')) {

        const config = {
            headers: {
                'Content-Type': 'application/json',
            }
        };
        const body = localStorage.getItem('token');
        try {
            const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/loadUser/`, body, config);
            dispatch({
                type: LOAD_USER_FETCH_SUCCESS,
                payload: res.data
            });
            
        dispatch(fetch_user_details());
        } catch (err) {
            dispatch({
                type: LOAD_USER_FETCH_FAIL,
                payload: { message: "Something went wrong!!!  " }
            })
        }

    } else {
        dispatch({
            type: LOAD_USER_FETCH_FAIL,
            payload: { message: "User Not Authenticated" }
        })
    }
};




export const fetch_user_details = () => async dispatch => {
    if (localStorage.getItem('user')) {

        const token = localStorage.getItem('token');
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        };

        const user = localStorage.getItem("user")
        try {
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/users/${user}`, config);
            console.log(res)
            dispatch({
                type: USER_FETCH_SUCCESS,
                payload: res.data
            });
        } catch (err) {
            dispatch({
                type: USER_FETCH_FAIL,
                payload: { message: "Something went wrong!!!  " }
            })
        }

    } else {
        dispatch({
            type: USER_FETCH_FAIL,
            payload: { message: "User Not Authenticated" }
        })
    }
};
<<<<<<< HEAD
=======
            type:     SIGNUP_SUCCESS,
            payload: res.data
        });

        // dispatch(load_user());
    } catch (err) {
        dispatch({
            type: SIGNUP_FAIL
        })
    }
};
>>>>>>> Project-Workspace-pratikmandge
=======
>>>>>>> Project-Workspace-ukeerthi18
