import styles from './Login.module.css';
//we need useState to manage form state that is without useStae we can't manipulate the user input
import { useState } from 'react';

function login(){
    return(
        //we wrap everything in a div because we have multiple elements
        //we name it style.login because we are using CSS modules and we need to refer to the specific class in the CSS file
        <div className={styles.container}>

        <div className={styles.login}>
            <label htmlFor="login">Login:</label>
            <input type="text" id="login" name="login" />
        </div>
        <div className={styles.password}>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" />
        </div>
        <div className={styles.submit}>
            <button type="submit">Submit</button>
        </div>

        </div>
    )
    
}
export default login;