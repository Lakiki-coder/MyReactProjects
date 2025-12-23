// import style from "./login.module.css";

// function login() {
//     return (
//         <div className={style.container}>
//         <div>
//         <input type="text" className={style.input} placeholder="login" />
//         <label className={style.label}>Login</label>
//         </div>

//         <div>
//         <input type="password" className={style.input} placeholder="password" />
//         <label className={style.label}>Password</label>
//         </div>
//         </div>
//     );

// }
// export default login;

//we import useStae because we are going to manage form data with useState
import { useState } from 'react';
// we import useNavigate to navigate between pages and ca also use it for redirection after login it alternative is react-router-dom
import { useNavigate } from 'react-router-dom';
// we import styles from css module for styling
import styles from './login.module.css';


// We define the Login component this is where our login form will be implemented,everything related to login will be handled here
const Login = () => {
  //we need useNavigate hook to navigate to different routes and need to be called inside the component
  const navigate = useNavigate();
  // we define formData state to hold the form input values,useState is initialized with an object containing fields for email,password,firstName,lastName,phone and currency and are all set to empty strings except currency which is set to 'USD'
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    phone: '+1',
    currency: 'USD'
  });
  // we define errors state to hold validation error messages for the form fields which is initialized as an empty object
  const [errors, setErrors] = useState({});
  // we define agreed state to track whether the user has agreed to the terms and conditions which is initialized to false
  const [agreed, setAgreed] = useState(false);

  // we create handleChange function to handle the changes in the input fields is different from handleSubmit because this one handles input changes like typing and updates the formData state accordingly instead of handling form submission
  const handleChange = (e) => {

    // we extract name and value from the event target which is the input field that triggered the change event
    const { name, value } = e.target;

    // we update the formData state using the setFormData function by spreading the previous state and updating the specific field that changed using computed property names and this allows us to dynamically update the correct field based on the input's name attribute
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // we create handleSubmit function to handle form submission that is triggered when the user submits the form
  const handleSubmit = (e) => {

    // we prevent the default form submission behavior to avoid page reload
    e.preventDefault();
    // Validate
    // we define newErrors object to collect validation error messages
    let newErrors = {};

    //
    if (!formData.email) newErrors.email = 'Email required';
    if (formData.password.length < 8) newErrors.password = 'Min 8 characters';
    if (!formData.firstName) newErrors.firstName = 'First name required';
    if (!agreed) newErrors.agreed = 'Must agree to terms';
    
    // we update the errors state with any validation errors found and display them to the user when the form is submitted
    setErrors(newErrors);

    // If no errors, proceed with login logic
    if (Object.keys(newErrors).length === 0) {

      // Here, you can handle the login logic, e.g., API call through redux-toolkit and navigation by navigate("/dashboard") through react-router-dom which we will implement later,this will display the form data in the console for demonstration purposes
      console.log('Login:', formData);
      // Handle login API call
    }
  };

  // we return the JSX structure of the login form which includes two main sections: a left section with an image and crypto widget, and a right section containing the login form itself
  return (
    // Main Container
    <div className={styles.container}>

      {/* Left Section - Image & Crypto Widget */}
      <div className={styles.leftSection}>

        {/* // Background Image that covers the left section */}
        <img src="/voltrex-man.jpg" alt="Voltrex" className={styles.backgroundImage} />
        
        {/* Crypto Widget */}
        {/* /* This widget displays cryptocurrency information such as ETH and USDT with their respective PNL for today */ }
        <div className={styles.cryptoWidget}>

          {/* Ethereum (ETH) Info */}
          <div className={styles.cryptoItem}>

            {/* Ethereum Icon */}
            <span className={styles.ethIcon}>Ξ</span>

            <div>
              {/* Cryptocurrency Name and Label which is PNL for today and can change based on real data */}
              <p className={styles.cryptoName}>ETH</p>
              <p className={styles.cryptoLabel}>PNL for today</p>
            </div>

            <div className={styles.cryptoValues}>
              <p className={styles.price}>+0.0021</p>
              <p className={styles.positive}>+72.5%</p>
            </div>
          </div>

          <div className={styles.cryptoItem}>
            <span className={styles.usdtIcon}>₮</span>
            <div>
              <p className={styles.cryptoName}>USDT</p>
              <p className={styles.cryptoLabel}>PNL for today</p>
            </div>
            <div className={styles.cryptoValues}>
              <p className={styles.price}>+0.32</p>
              <p className={styles.positive}>+6.1%</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section - Form */}

        {/* // we create the right section which contains the login form and related elements */}
      <div className={styles.rightSection}>

        {/* // Header with Logo and Language Selector */}
        <div className={styles.header}>

          {/* // Logo */}
          <h1 className={styles.logo}>◆ Cryptocurrency </h1>
          <select className={styles.language} defaultValue="en">
            <option value="en">EN</option>
            <option value="es">ES</option>
            <option value="fr">FR</option>
            <option value="de">DE</option>
          </select>
        </div>

        {/* // Form Container where the actual login form resides */}
        <div className={styles.formContainer}>
          <h2 className={styles.title}>Welcome to Voltrex!</h2>

          {/* Tabs */}
          <div className={styles.tabs}>

            {/* // Active Tab for Sign Up,we use  `${styles.tab} ${styles.active}` to apply both the tab and active styles to this button and '$' means we are using template literals to combine multiple class names dynamically */}
            <button className={`${styles.tab} ${styles.active}`}>SIGN UP</button>

            {/* // Inactive Tab for Log In,means this button does not have the active style applied to it, and when clicked, it navigates to the login page using the navigate function from react-router-dom */}
            <button className={styles.tab} onClick={() => navigate('/login')}>
              LOG IN
            </button>
          </div>

          {/* Form */}
          {/* // we create the form element with an onSubmit handler that triggers the handleSubmit function when the form is submitted it will take the user input data and process it accordingly */}
          <form onSubmit={handleSubmit} className={styles.form}>
            {/* Email */}

            {/* // form group for email input field */}
            <div className={styles.formGroup}>
              <label>Email (Login)</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="hello.lakiki@gmail.com"

                // we apply conditional styling to the input field to highlight errors by checking if there is an error message for the email field in the errors state and if there is, we add the styles.error class to the input field
                className={`${styles.input} ${errors.email ? styles.error : ''}`}
              />
              {/* // we display the error message for the email field if it exists by checking if there is an error message for the email field in the errors state and if there is, we render a span element with the error message styled using styles.errorText */}
              {errors.email && <span className={styles.errorText}>{errors.email}</span>}
            </div>

            {/* Password */}
            <div className={styles.formGroup}>
              <label>Password must contain 8 characters or more</label>
              <input
                type="password"
                name="password"

                // we bind the input value to formData.password to make it a controlled component by setting the value attribute to formData.password
                value={formData.password}

                // we handle input changes using the handleChange function by setting the onChange attribute to the handleChange function so the formData state is updated whenever the user types in the input field
                onChange={handleChange}

                // we set a placeholder text for the password input field
                placeholder="••••••••••"

                // we apply conditional styling to the input field to highlight errors by checking if there is an error message for the password field in the errors state and if there is, we add the styles.error class to the input field
                className={`${styles.input} ${errors.password ? styles.error : ''}`}

              />

              {/* // we display the error message for the password field if it exists by checking if there is an error message for the password field in the errors state and if there is, we render a span element with the error message styled using styles.errorText */}
              {errors.password && <span className={styles.errorText}>{errors.password}</span>}
            </div>

            {/* First Name */}
            {/* // the className={styles.formGroup} is common for all form groups to apply consistent styling because we want all form groups to have the same styling defined in styles.formGroup */}
            <div className={styles.formGroup}>
              <label>First Name</label>

              {/* // we bind the input value to formData.firstName to make it a controlled component by setting the value attribute to formData.firstName */}
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="James"
                className={`${styles.input} ${errors.firstName ? styles.error : ''}`}
              />
              {errors.firstName && <span className={styles.errorText}>{errors.firstName}</span>}
            </div>

            {/* Last Name */}
            <div className={styles.formGroup}>
              <label>Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Davies"
                className={styles.input}
              />
            </div>

            {/* Phone */}
            <div className={styles.formGroup}>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 - 212 555 4567"
                className={styles.input}
              />
            </div>

            {/* Currency */}
            <div className={styles.formGroup}>
              {/* // we create a select dropdown for currency selection */}
              <label>Account Currency</label>
              <select
                name="currency"
                value={formData.currency}
                onChange={handleChange}
                className={styles.select}
              >
                <option>USD (Account currency)</option>
                <option>EUR</option>
                <option>GBP</option>
              </select>
            </div>

            {/* Checkbox */}
            <div className={styles.checkboxGroup}>

              {/* // we use id instead of className for the checkbox input to associate it with the label using htmlFor */}
              <input
                type="checkbox"
                id="terms"
                // checked attrivute is used to bind the checkbox state to the agreed state
                checked={agreed}

                // we handle checkbox state changes by updating the agreed state when the checkbox is toggled
                onChange={(e) => setAgreed(e.target.checked)}
              />
              {/* // htmlFor is used to link the label to the checkbox input so clicking the label toggles the checkbox */}
              <label htmlFor="terms">
                I have read and agree <a href="#terms">Terms and Risk statements</a>
              </label>
            </div>
            {errors.agreed && <span className={styles.errorText}>{errors.agreed}</span>}

            {/* Submit Button */}
            <button type="submit" className={styles.submitBtn}>
              Sign up
            </button>

            {/* Login Link */}
            <p className={styles.loginLink}>
              Already have an account?{' '}
              <button
                type="button"
                onClick={() => navigate('/login')}
                className={styles.linkBtn}
              >
                Log In
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

