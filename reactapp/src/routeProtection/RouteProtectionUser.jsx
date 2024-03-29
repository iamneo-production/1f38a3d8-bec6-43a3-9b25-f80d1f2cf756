import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useNavigate , Route, Navigate } from 'react-router-dom';

const RouteProtectionUser = ({ children, isAuthenticated,token}) => {
    const navigate = useNavigate();
    let auth = false;

    // useEffect(()=>{
    //     if(!isAuthenticated || localStorage.getItem("token") === null || token === null){
    //         auth = false
    //         navigate("/login")
    //     }else{
    //       auth = true;
    //     }
    // },[])

  if(localStorage.getItem("token")){
    return children
  }
  
  return <Navigate to="/login" />
}

const mapStateToProps = state => ({
	isAuthenticated: state.auth.isAuthenticated,
	token: state.auth.token,
});


export default connect(mapStateToProps,null) (RouteProtectionUser)
