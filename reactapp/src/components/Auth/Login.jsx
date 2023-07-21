<<<<<<< HEAD
import React, { useState, useEffect, useMemo } from 'react';
=======
import React, { useState, useEffect } from 'react';
>>>>>>> Project-Workspace-pratikmandge
import { useNavigate } from 'react-router-dom';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import Alert from '../Alerts/Alert';
import { login } from '../../actions/auth';
import { connect, useSelector } from 'react-redux';

<<<<<<< HEAD



const Login = ({ login, token, isAuthenticated,login_state }) => {


	const [alert, setAlert] = useState(false);
	const [alertStatus, setAlertStatus] = useState({
		errorMessage: "",
		errorCode: "",
		errorColor: ""
	})

	const data = useMemo(()=> {
=======
const Login = ({ login, token, isAuthenticated }) => {

	const login_state = useSelector(state => state.auth.login_state);

	useEffect(() => {
		if (login_state.status === true) {
			setAlertStatus({
				errorMessage: login_state.message,
				errorCode: "error",
				errorColor: "red"
			})
			setAlert(true)

		}

>>>>>>> Project-Workspace-pratikmandge
		if (isAuthenticated === true && localStorage.getItem("token") && token !== null) {
			setAlertStatus({
				errorMessage: login_state.message,
				errorCode: "success",
				errorColor: "green"
			})
			setAlert(true)

			setTimeout(() => {
				setAlert(false)
				navigate("/")
			}, 1000)
		}
<<<<<<< HEAD
		if(login_state.status === true){
			setAlertStatus({
				errorMessage: login_state.message,
				errorCode: "error",
				errorColor: "red"
			})
			setAlert(true)
		}
	  }, [isAuthenticated,token])

	// useEffect(() => {
	// 	if (login_state.status === true) {
	// 		setAlertStatus({
	// 			errorMessage: login_state.message,
	// 			errorCode: "error",
	// 			errorColor: "red"
	// 		})
	// 		setAlert(true)

	// 	}

	// 	if (isAuthenticated === true && localStorage.getItem("token") && token !== null) {
	// 		setAlertStatus({
	// 			errorMessage: login_state.message,
	// 			errorCode: "success",
	// 			errorColor: "green"
	// 		})
	// 		setAlert(true)

	// 		setTimeout(() => {
	// 			setAlert(false)
	// 			navigate("/")
	// 		}, 1000)
	// 	}
	// }, [login_state.status, token, isAuthenticated])
=======
	}, [login_state.status, token, isAuthenticated])
>>>>>>> Project-Workspace-pratikmandge

	const navigate = useNavigate();

	// Retrieving data from input tag.
	const [formData, setFormData] = useState({
		email: "",
		password: " "
	})

	const { email, password } = formData;
<<<<<<< HEAD
	
=======
	const [alert, setAlert] = useState(false);
	const [alertStatus, setAlertStatus] = useState({
		errorMessage: "",
		errorCode: "",
		errorColor: ""
	})
>>>>>>> Project-Workspace-pratikmandge

	const onChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	}


	const [showPassword, setshowPassword] = useState(false);


	const onSubmit = (e) => {
		e.preventDefault();

		// calling the API using redux
		login(email, password)
	}




	return (
		<div>
			<div class="bg-gray-200 pt-4 min-h-screen flex flex-col">
				<div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
					<div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
						<h1 class="mb-8 text-3xl text-center">Sign In</h1>

						{
							alert === true ?
								// setAlert is a useStete function to change value that particular useState
								<Alert errorMessage={alertStatus.errorMessage} errorCode={alertStatus.errorCode} errorColor={alertStatus.errorColor} setAlert={setAlert} />
								:
								""
						}
						<form onSubmit={(e) => onSubmit(e)} >

							<input
								type="text"
								class="block border border-grey-light w-full p-3 rounded mb-4"
								name="email"
								placeholder="email" onChange={(e) => onChange(e)} required />

							<div className="relative">
								<input
									type={showPassword ? "text" : "password"}
									class="block border border-grey-light w-full p-3 rounded mb-4"
									name="password"
									placeholder="Password" onChange={(e) => onChange(e)} required />
								<div className="absolute right-5 top-4" >
									{showPassword ? <AiFillEyeInvisible onClick={() => setshowPassword(false)} size={20} /> : <AiFillEye size={20} onClick={() => setshowPassword(true)} />}
								</div>
							</div>

							<button
								type="submit"
								class="w-full text-center py-3 rounded bg-blue-500 text-white hover:bg-green-dark focus:outline-none my-1"
							>Sign In</button>



						</form>




					</div>


				</div>
			</div>
		</div>
	)
}

const mapStateToProps = state => ({
	isAuthenticated: state.auth.isAuthenticated,
	token: state.auth.token,
<<<<<<< HEAD
	login_state: state.auth.login_state
=======
>>>>>>> Project-Workspace-pratikmandge
});


export default connect(mapStateToProps, { login })(Login)
