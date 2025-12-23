import styles from "./Login.module.css"

const Login = ()=> {
    return(
        <div className={styles.LoginWrapper}>
            <div className={styles.formSection}>

                    <h2>Log in</h2>
                    <form>
                        <label>Email</label>
                        <input type="email" placeholder="Your email"/>
                        <label>Password</label>
                        <input type="password" placeholder="password"/>    
                        <button type="submit">Log in</button>
                        <p><a href="#">Forgot password?</a></p>
                         <div className={styles.buttonContainer}>
                           <button className={styles.secondaryButton}>Continue with Google</button>
                           <button className={styles.secondaryButton}>Continue with Facebook</button>
                         </div>
                         <p>Don't have an account? <a href="#">Sign Up</a></p>
                    </form>
                    </div>
                    <div className={styles.quoteSection}>
                    <p className={styles.p}>“The future belongs to those who <span class= {styles.highlight}>believe</span> in the <span class={styles.highlight}>beauty of their dreams</span>.”</p>
                    <p>— Eleanor Roosevelt</p>
                    </div>
                </div>
        
    );
};

export default Login