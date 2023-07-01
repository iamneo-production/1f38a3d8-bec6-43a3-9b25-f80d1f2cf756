import React, { useState, useEffect } from 'react'
import Alert from '../Alerts/Alert';
import { useNavigate } from 'react-router-dom';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'

const Register = () => {

    const navigate = useNavigate();

    useEffect(function(){
        const user = localStorage.getItem("user")
        if(user !== null){
            navigate("/");
        }
    },[])

    const [showPassword, setshowPassword] = useState(false);


    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPasssword: ""
    })

    const { username, email, password, confirmPasssword } = formData;
    const [alert, setAlert] = useState(false);
    const [alertStatus, setAlertStatus] = useState({
        errorMessage: "",
        errorCode: "",
        errorColor: ""
    })


    const handleValidation = () => {
        //for password 

        console.log("handle validations")
        const passwordInputValue = password;
        const uppercaseRegExp = /(?=.*?[A-Z])/;
        const lowercaseRegExp = /(?=.*?[a-z])/;
        const digitsRegExp = /(?=.*?[0-9])/;
        const specialCharRegExp = /(?=.*?[#?!@$%^&*-])/;
        const minLengthRegExp = /.{8,}/;
        const uppercasePassword = uppercaseRegExp.test(passwordInputValue);
        const lowercasePassword = lowercaseRegExp.test(passwordInputValue);
        const digitsPassword = digitsRegExp.test(passwordInputValue);
        const specialCharPassword = specialCharRegExp.test(passwordInputValue);
        const minLengthPassword = minLengthRegExp.test(passwordInputValue);

        console.log(password)
        let errMsg = "";
        if (password === "") {
            errMsg = "Password is empty";
            setAlertStatus({
                errorMessage: errMsg,
                errorCode: "Error..!!",
                errorColor: "red"
            });

            setAlert(true);
        } else if (!uppercasePassword) {
            errMsg = "At least one Uppercase";
            setAlertStatus({
                errorMessage: errMsg,
                errorCode: "Error..!!",
                errorColor: "red"
            });

            setAlert(true);
        } else if (!lowercasePassword) {
            errMsg = "At least one Lowercase";
            setAlertStatus({
                errorMessage: errMsg,
                errorCode: "Error..!!",
                errorColor: "red"
            });

            setAlert(true);
        } else if (!digitsPassword) {
            errMsg = "At least one digit";
            setAlertStatus({
                errorMessage: errMsg,
                errorCode: "Error..!!",
                errorColor: "red"
            });

            setAlert(true);
        } else if (!specialCharPassword) {
            errMsg = "At least one Special Characters";
            setAlertStatus({
                errorMessage: errMsg,
                errorCode: "Error..!!",
                errorColor: "red"
            });

            setAlert(true);
        } else if (!minLengthPassword) {
            errMsg = "At least minumum 8 characters";
            setAlertStatus({
                errorMessage: errMsg,
                errorCode: "Error..!!",
                errorColor: "red"
            });

            setAlert(true);
        } else if (password !== confirmPasssword) {
            setAlertStatus({
                errorMessage: "Confirm password is not matched",
                errorCode: "Error..!!",
                errorColor: "red"
            });

            setAlert(true);
        } else {
            setAlertStatus({
                errorMessage: "Account Created Successfully...",
                errorCode: "Success..!!",
                errorColor: "green"
            });
            setAlert(true);

            setTimeout(function () {
                navigate("/login");
            }, 2000);
        }



    }
    // for confirm password


    const onChange = (e) => {

        // e.target.name -> tells which input component the user is adding data,
        // e.target.value -> returns the data which is being entered by user.

        setFormData({ ...formData, [e.target.name]: e.target.value })
        // formData = [1,2,3]
        // {...formData,1} -> add 1 in list

        // formData = {name:"bhavana"}
        //formData = {...formData, email:"bhavana@gmail.com"} -> {name:"bhavana",email:"bhavana@gmail.com"}
    }


    const submit = (e) => {

        e.preventDefault();
        console.log(formData);
        handleValidation()


        // if (password === confirmPasssword) {
        //     console.log("hi")
        //     setAlertStatus({
        //         errorMessage: "User Registered Successfully...!",
        //         errorCode: "Success.",
        //         errorColor: "green"
        //     })
        //     setAlert(true);
        //     console.log(formData);
        //     console.log(setAlertStatus)
        // } else {
        //     // console.log("password and confirm password does not match")
        //     setAlertStatus({
        //         errorMessage: "password and confirm password does not match",
        //         errorCode: "Warning...!!",
        //         errorColor: "red"
        //     })
        //     setAlert(true);
        //     // console.log(alertStatus)
        // }

    }


    return (
        <div>
            <div class="bg-gray-200 pt-4 min-h-screen flex flex-col">
                <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                        <h1 class="mb-8 text-3xl text-center">Sign up</h1>

                        {
                            alert === true ?
                                // setAlert is a useStete function to change value that particular useState
                                <Alert errorMessage={alertStatus.errorMessage} errorCode={alertStatus.errorCode} errorColor={alertStatus.errorColor} setAlert={setAlert} />
                                :
                                ""
                        }
                        <form onSubmit={(e) => submit(e)} >
                            <input
                                type="text"
                                class="block border border-grey-light w-full p-3 rounded mb-4"
                                name="username"
                                placeholder="Full Name" onChange={(e) => onChange(e)} required />

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
                                    { showPassword ? <AiFillEyeInvisible onClick={() => setshowPassword(false)} size={20} /> :<AiFillEye size={20} onClick={() => setshowPassword(true)}  />}
                                </div>
                            </div>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    class="block border border-grey-light w-full p-3 rounded mb-4"
                                    name="confirmPasssword"
                                    placeholder="Confirm Password" onChange={(e) => onChange(e)} required />
                                <div className="absolute right-5 top-4">
                                { showPassword ? <AiFillEyeInvisible onClick={() => setshowPassword(false)}  size={20} /> :<AiFillEye onClick={() => setshowPassword(true)}  size={20} />}
                                </div>
                            </div>

                            <button
                                type="submit"
                                class="w-full text-center py-3 rounded bg-blue-500 text-white hover:bg-green-dark focus:outline-none my-1"
                            >Create Account</button>
                        </form>

                        <div class="flex item-center justify-center text-grey-dark mt-6 gap-2 font-semibold">
                        Already have an account?
                        <a class="underline border-b border-blue text-blue-700 hover:text-blue-500" href="../login/">
                            Log in
                        </a>
                    </div> 
                    </div>

             
                </div>
            </div>
        </div>
    )
}

export default Register