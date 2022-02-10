import {Fragment, useState, useEffect, useRef} from "react";
import styles from './login.module.css';
import UserInput from "../icons/user-input";
import Eye from "../icons/eye";
import Lock from "../icons/lock";
import Button from "../ui/button";

const Login = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const storedUserLoggedInInfoStorage = localStorage.getItem('isLoggedIn');

        if (storedUserLoggedInInfoStorage === '1'){
            setIsLoggedIn(true);
        }
    }, []);

    const togglePassVisibility = () => {
        setShowPassword(showPassword ? false : true);
    };

    const formSubmitHandler = (email, password) => {
        localStorage.setItem('isLoggedIn', '1');
        setIsLoggedIn(true);
    }

    return (
      <Fragment>

          <div className={styles.controllers}>
              <UserInput />
              <input
                  id="username"
                  type="text"
                  name="username"
                  placeholder="نام کاربری"
              />
          </div>

          <div className={styles.controllers}>
              <Lock />
              <input
                  id="password"
                  type= {showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="رمز عبور"
              />
              <span>
                    <Eye onClick={togglePassVisibility} />
                </span>
          </div>

          <Button className={styles['login-btn']} onClick={formSubmitHandler}>
              ورود
          </Button>

      </Fragment>
    );
};

export default Login;