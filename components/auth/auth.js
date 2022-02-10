import {Fragment} from "react";
import styles from './auth.module.css';
import Login from "./login";

const Auth = () => {
    return (
      <Fragment>
          <section className={styles.auth}>
              <div className={styles.tab}>
                  <ul className={styles.nav}>
                      <li>
                          ورود
                      </li>
                      <li>
                          ثبت نام
                      </li>
                  </ul>
                  <div>
                      <Login />
                  </div>
              </div>
          </section>
      </Fragment>
    );
};

export default Auth;