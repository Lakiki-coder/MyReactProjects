
//testing component useRegister custom hook
// import { useEffect,useState } from "react";

// custom hook to handle user registration
// const useRegister = (userDetails) => {

//     // console.log(userDetails.firstName);
//     // console.log(userDetails.lastName);
//     // let naem = userDetails.firstName;
//     // let mesage = "Registration successful";
    // to store user's name
    // initialize name state variable as empty string
    // const [name, setName] = useState("");

    //setMessage is a function 
    // to store success message
    // const [message, setMessage] = useState("");

        // useEffect to perform side effects based on userDetails changes
        // useEffect(() => {

                // if userDetails is provided, update name and message
                // if(userDetails){
                    // set the name to user's first name
                    // setName(userDetails.firstName);
                    // set success message
                    // setMessage("Registration successful");

                    // alternatively, you can use template literals for message
                    // setMessage(`${userDetails.firstName}, Registration successful`);
                    // console.log(userDetails.firstName);
                    // console.log("userDetails.lastName is " + userDetails.lastName);
                    
                    // Access other user details as needed
                    // e.g., 
                    // userDetails.lastName
                // }
                // if userDetails is not provided, reset name and message
        // }, [userDetails]);

        //return saved name and message to the component that uses this hook

        // return {name, message};
        //dependencies is alway a list of external modules or libraries that a project requires to function correctly.
                //useState to manage form data
                //useEffect to handle side effects like form submission or allowing your app to refresh when userDetails change
    // }

//export the custom hook for use in other components

const useRegister = async (userDetails) => {
    return new promise((resolve) =>{
        resolve({
            name:userDetails.firstName,
            message:"Register succesful"
        })
    })
}
export default useRegister;
