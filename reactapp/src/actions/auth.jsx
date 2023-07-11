import axios from 'axios';
import {LOGIN_FAIL,LOGIN_SUCCESS,SIGNUP_FAIL,SIGNUP_SUCCESS} from './types';




export const login = (username, password) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
            
        }
    };
    const body = JSON.stringify({ username, password });
    try {
        const res = await axios.post('https://ide-cdeeceacaebfddcdafbacfedaceeaeaadbdbabf.project.examly.io/proxy/8080/api/authenticate', body, config);
        console.log(res);
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        });
        // dispatch(load_user());
    } catch (err) {
        dispatch({
            type: LOGIN_FAIL
        })
    } 
};

export const signup = (username,email, password,dateofbirth) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({ username,email, password,dateofbirth });

    try {
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/register`, body, config);
        console.log(res);
        dispatch({
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