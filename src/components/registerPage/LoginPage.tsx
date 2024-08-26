import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import userImg from './../../../public/assetsForSignupSignin/bx-user.svg';
import passwordImg from './../../../public/assetsForSignupSignin/bxs-lock-alt.svg';
import passwordOpenImg from './../../../public/assetsForSignupSignin/lock-open-solid.svg';
import './LoginPage.css';

const LoginPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState<string>('');
  const [isEmailValid, setIsEmailValid] = useState<boolean>(true);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleLoginButtonClick = (path: string, event: React.MouseEvent<HTMLButtonElement>) => {

    const button = event.currentTarget;
    button.classList.add('clicked');

    button.addEventListener('animationend', () => {
        button.classList.remove('clicked');
        navigate(path);
    }, { once: true });
};

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setIsEmailValid(true);
    setFormSubmitted(false);
  };

  const handleLoginSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormSubmitted(true);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailValid = emailRegex.test(email);

    if (!isEmailValid) {
      setIsEmailValid(false);
      return;
    }
    // loginis logika
  };

  return (
    <div className="login-box">
      <span className="border-line"></span>

      <div className="login-main">
        <div className="login">
          <h1>Sign In</h1>

          <form onSubmit={handleLoginSubmit}>
            <div className="login-input-box">
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
              />
              <img src={userImg} alt="" />
            </div>

            <div className="emailerror-div">
              {(!isEmailValid && formSubmitted) && <span className="emailerror">Incorrect Email!</span>}
            </div>

            <div className="login-input-box">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
              />
              <img
                src={showPassword ? passwordOpenImg : passwordImg}
                alt=""
                onClick={togglePasswordVisibility}
                className="password-toggle"
              />
            </div>

            <div className="passworderror-div">
              {(formSubmitted) && (
                <span className='passworderror'>Incorrect password!</span>
              )}
            </div>

            <div className="login-checkbox-forgot">
              <label className='checkbox-remember'>
                <input type="checkbox" className='checkbox' />
                <span className='remember'>Remember me</span>
              </label>

              <div className='forgot-password-div'>
                <a href="" className='forgot-password'>Forgot password?</a>
              </div>
            </div>

            <div className="register-link">
              <p>
                Don't have an account? <Link to="/SignUp" className='SignUp-link'>Sign Up</Link>
              </p>
            </div>

            <button type="submit" className="btn" onClick={(event) => handleLoginButtonClick('', event)}>Sign In</button>

            <div className="authentification-with-links">
              <Link to="" className="authentification-links">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="facebook-register">
                  <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5 16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
                </svg>
              </Link>
              <Link to="" className="authentification-links">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="apple-register">
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                </svg>
              </Link>
              <Link to="" className="authentification-links">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512" className="google-register">
                  <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                </svg>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
