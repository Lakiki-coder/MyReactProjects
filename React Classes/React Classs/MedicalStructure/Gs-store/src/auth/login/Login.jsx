import { Link, useNavigate} from 'react-router';
import React,{useState} from 'react';
import {useLoginMutation} from "../../apis/loginApi.jsx";
const Login = () => {

  const [loginUser, {date,isError,isSuccess}] = useLoginMutation()
  const navigate = useNavigate()

  // we making it statefull
  const userLoginData = {
    username: "",
    password: ""
  }

  const [formData, setFormData] = useState(userLoginData);

  const handleChange = (e) => {
    const {name, value} = e.target

    setFormData((prev)=>({...prev, [name]: value}))
      //  setFormData((prev)=>({...prev, [e.target.name]: e.target.value}))

  }

  const submitHandler = async(e) =>{
    e.preventDefault();

    try {
      const response = await loginUser(formData).unwrap()
      if(!response){alert("error")}
      console.log(response)
      localStorage.setItem("res",response.token)
      navigate("/products")
    } catch (error) {
      alert("login failed due  to  invalid credentials")
      console.log(error)
    }
  }

  return (
    <>
    <form onSubmit={submitHandler} action="">
    <div>
        <label htmlFor = "username"> username</label>
        <input onChange= {handleChange} type="text" name = "username" placeholder = "" autoComplete= 'username' value={formData.username} />
    </div>
    <div>
        <label htmlFor = "password"> password </label>
        <input onChange= {handleChange} type="password" name ="password" placeholder = "" autoComplete='current-password' value={formData.password} />
    </div>
    <button type="submit">login</button>

    </form>
    <span>Don't have an account? Register</span>
    <Link to="/register">Sign up</Link>
  </>
)
    }
    export default Login;
    /*
    import style from './Login/style.css'
    import {link} from 'react-router' 
    import React from 'react'

    const login = () => {
      return (
      <>
      <div>
        <label htmlFor='login'>Login<//div>
        <input type='text' placeholder=''/>
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input type="text" placeholder="" />

      </div>


      )}
      wispr flow
    */