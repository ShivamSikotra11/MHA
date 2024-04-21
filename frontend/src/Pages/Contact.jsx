import React, { useEffect } from 'react';
import styles from "../styles/contact.module.css";

const Contact = () => {
  const handleFocus = (e) => {
    e.target.parentNode.classList.add(styles.focus);
  };

  const handleBlur = (e) => {
    if (e.target.value === "") {
      e.target.parentNode.classList.remove(styles.focus);
    }
  };
  return (
    <div className={`${styles.containerr}  `}>
      <div className={`${styles.form} `}>
        <div className={styles["contact-info"]}>
          <h3 className={styles.ltitle}>Let's get in touch</h3>
          <p className={styles.ltext}>
            To get more updates about blood camps and information about our upcoming campaigns.
          </p>

          <div className={styles.info}>
            <div className={styles.information}>
              <i className={`fa-solid fa-location-dot ${styles.icon}`} style={{ color: '#00668C' }}></i>
              <p>Surat, Gujarat</p>
            </div>
            <div className={styles.information}>
              <i className={`fa-solid fa-envelope ${styles.icon}`} style={{ color: '#00668C' }}></i>
              <p>lifesaver102023@gmail.com</p>
            </div>
            <div className={styles.information}>
              <i className={`fa-solid fa-phone ${styles.icon}`} style={{ color: '#00668C' }}></i>
              <p>+91 9083462356</p>
            </div>
          </div>

          <div className={styles["social-media"]}>
            <p>Connect with us:</p>
            <div className={styles['social-i']}>
              <a href="">
                <i className={`fa-2xl fab fa-facebook-f ${styles.icon}`}></i>
              </a>
              <a href="">
                <i className={`fa-2xl fab fa-twitter ${styles.icon}`}></i>
              </a>
              <a href="">
                <i className={`fa-2xl fab fa-instagram ${styles.icon}`}></i>
              </a>
              <a href="">
                <i className={`fa-2xl fab fa-linkedin-in ${styles.icon}`}></i>
              </a>
            </div>
          </div>
        </div>

        <div className={styles["contact-form"]}>
          <span className={`${styles.circle} ${styles.c1}`}></span>
          <span className={`${styles.circle} ${styles.c2}`}></span>

          <form action="\feedback" method="POST">
            <h3 className={styles.title}>Contact Us</h3>

            <div className={styles["input-container"]}>
              <input type="text" name="uname" className={styles.input} onFocus={handleFocus} onBlur={handleBlur}  />
              <label htmlFor="">Username</label>
              <span>Username</span>
            </div>

            <div className={styles["input-container"]}>
              <input type="email" name="email" className={styles.input} onFocus={handleFocus} onBlur={handleBlur} />
              <label htmlFor="">Email</label>
              <span>Email</span>
            </div>

            <div className={styles["input-container"]}>
              <input type="tel" name="phone" className={styles.input} onFocus={handleFocus} onBlur={handleBlur}  />
              <label htmlFor="">Phone No.</label>
              <span>Phone No.</span>
            </div>

            <div className={`${styles["input-container"]} ${styles.textarea}`}>
              <textarea name="message" className={`${styles.input} custom-scrollbar `}onFocus={handleFocus} onBlur={handleBlur} ></textarea>
              <label htmlFor="">Message</label>
              <span>Message</span>
            </div>

            <input type="submit" value="Send" className={`${styles.btn} bg-white`} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
