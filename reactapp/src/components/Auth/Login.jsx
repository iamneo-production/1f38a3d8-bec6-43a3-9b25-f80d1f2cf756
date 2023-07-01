import React,{useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import Alert from '../Alerts/Alert';



const Login = () => {
    

  const navigate = useNavigate();

  useEffect(function(){
    const user = localStorage.getItem("user")
    if(user !== null){
        navigate("/");
    }
},[])

  // Retrieving data from input tag.
  const [formData, setFormData] = useState({
    email:"",
    password:" "
  })
  const {email,password}=formData;
  const [alert, setAlert] = useState(false);
  const [alertStatus, setAlertStatus] = useState({
      errorMessage: "",
      errorCode: "",
      errorColor: ""
  })

  const onChange=(e)=>{
    setFormData({ ...formData, [e.target.name]: e.target.value });
  } 

  

  const [showPassword, setshowPassword] = useState(false);


  const onSubmit = (e)=>{
    e.preventDefault();
    if(email === "bhavana" && password === "123"){
      console.log("Logged in Successfullly");
      const token = email+" "+password;
      localStorage.setItem("user",token);
      navigate("/")
    }else{
      console.log("invalid credentials");
      // alert("invalid credentials")
    }
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
                                    { showPassword ? <AiFillEyeInvisible onClick={() => setshowPassword(false)} size={20} /> :<AiFillEye size={20} onClick={() => setshowPassword(true)}  />}
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

export default Login
