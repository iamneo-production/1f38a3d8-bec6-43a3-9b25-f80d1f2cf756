import axios from 'axios';
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




export const login = (username, password) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    };
    const body = JSON.stringify({ username, password });
    try {

        const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/authenticate/`, body, config);
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        });

        dispatch(load_user());
    } catch (err) {
        dispatch({
            type: LOGIN_FAIL,
            payload: { message: "Something went wrong!!!  " }
        })
    }
};

export const signup = (username, email, password, dateofbirth) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({ username, email, password, dateofbirth });

    try {
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/register`, body, config);
        console.log(res);
        dispatch({
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
