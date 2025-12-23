import style from './Register.module.css'
import {useState} from "react";
import useRegister from '../../customHooks/useRegister';



// Register component to handle user registration,is a functional component that uses React hooks for state management
const Register = () => {

    //state variables to hold form input values
    //firstName and lastName are initialized as empty strings
    const[firstName,setFirstName] = useState("");

    //state variable for last name, email, message, and error
    //all have setter functions to update their values
    const[lastName,setLastName] = useState("");
    const[email,setEmail] = useState("");
    const[message,setMessage] = useState("");
    const[error,setError] = useState("");
    const[password,setPassword] = useState("");

    //create an object to hold user details
    //inn other to pass to the custom hook useRegister
    //when they have samee name and value we can use shorthand sytax meaning we can just write the name once
   

    //function to handle form submission
    //prevent default form submission behavior
    // function handleSubmit(e){
    //we use async because we might be making an asynchronous call to a server or database to register the user meaning the function might take some time to complete
       
    const handleSubmit = async (e) => {

        //prevent page from reloading on form submission because you want tobe in charge of what happens when the form is submitted
        e.preventDefault();

        //create an object to hold user details
        const userDetails = {
            firstName,
            lastName,
            email
        };

        //to see the password value in the console for debugging purposes
        console.log(password);
        //call the useRegister custom hook with userDetails
        try{
            const {name,message} = await useRegister(userDetails);
            //you can use the returned name and message as needed and display a success message to the user
            setMessage(message);
            //store the user's name in local storage for later use and persistence across sessions
            localStorage.setItem("name", name);
            // setMessage(message)
        }catch(error){

            //handle any errors that occur during registration
            //set an error message to inform the user
            //seError is a state variable that holds error messages related to registration
            setError("Registration failed. Please try again.");
    }
}

  return (

    //registration form with input fields for first name, last name, email, password, and confirm password
    <form onSubmit={handleSubmit} className={style.registerform}>
    <div className = {style.inputDiv }>
        //input field for first name
        <label htmlFor = "firstName"> First Name </label>

        {/* set the value of firstName state variable when input changes */}
        {/* //also apply styling from Register.module.css */}
        <input id="firstName" onChange={(e) => setFirstName(e.target.value)} className = {style.input} type="text" placeholder = ""/>
        {/* <input id="firstName" onChange={(e) => console.log(e)} className = {style.input} type="text" placeholder = ""/> */}

    </div>
    <div className = {style.inputDiv }>

        {/* //input field for last name and update lastName state variable on change */}
        <label htmlFor = "lastName"> Last Name </label>

        {/* /* apply styling from Register.module.css*/ }
        <input id="lastName" onChange={(e) => setLastName(e.target.value)} className = {style.input} type="text" placeholder = ""/>
    </div>
    <div className = {style.inputDiv}>
        <label htmlFor = "email"> email </label>
        <input id="email" onChange={(e) => setEmail(e.target.value)} className = {style.input} type="email" placeholder = ""/>
    </div>
    <div className = {style.inputDiv}>
        <label htmlFor = "password"> password </label>
        <input className = {style.input} type="password" placeholder = ""/>
    </div>
    <div className = {style.inputDiv}>
        <label htmlFor = "confirmPassword"> Confirm Password </label>
        <input className = {style.input} type="password" placeholder = ""/>
    </div>

    {/* //display success or error messages based on registration outcome and apply styling meaning if message exists display it with success styling else if error exists display it with error styling */}
    <button type="submit">submit</button>
    {message ? alert (message) : ""}
    </form>
  )
}
export default Register;