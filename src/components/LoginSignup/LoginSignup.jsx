import React, { useState } from 'react';
import './LoginSignup.css'
import loginimg from '../../assets/login.svg'
import signupimg from '../../assets/Login-svg.svg'
import apple from '../../assets/apple.svg';
import fb from '../../assets/fb.svg';
import google from '../../assets/google.svg'
import { useNavigate } from 'react-router-dom';

const LoginSignup = () => {

    const [action, setAction] = useState('Log in');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [loginFailed, setLoginFailed] = useState(false);

    const handleLogin = () => {
        if (username === 'user@gmail.com' && password === 'password') {
          navigate('/today');
        } else {
            setLoginFailed(true);
        }
      };

  return (
    <div className='login-signup'>
        <div className="sm-container">
            <div className="signin-grid">
                <div className='img-wrapper'>
                    {action==="Log in" ? <img src={loginimg} alt="" className='img-responsive'/> : <img src={signupimg} alt="" className='img-responsive'/>}
                    
                </div>
                <div className='right-box'>
                    <h1>{action}</h1>
                    {action==="Log in" ?
                    <div className='form-login'>
                        <input type="email" placeholder='Enter your Email address' value={username}
                        onChange={(e) => setUsername(e.target.value)}/>
                        <input type="password" placeholder='Enter your password' value={password}
                        onChange={(e) => setPassword(e.target.value)}/>
                        {loginFailed && <div className="login-failed-message">Login Failed. Please try again.</div>}
                        <button type='submit' className='primaryBtn' onClick={handleLogin}>{action}</button>
                    </div>:
                    <div className='form-login'>
                        <input type="email" placeholder='Enter your Email address' />
                        <input type="password" placeholder='Enter your password' />
                        <button type='submit' className='primaryBtn'>{action}</button>
                    </div>
                    }
                    <div className='additional-details'>
                        {action==='Sign up'? <div></div>:<a href="#" title="Forgot password?" className='forgot-link'>Forgot password?</a>}
                        <p>By continuing with Google, Apple, or Email, you agree to Todoist’s <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.</p>
                    </div>
                    <h3>Continue with: </h3>
                    <div className='other-login'>
                        <a href="#" title="">
                            <img src={fb} alt="" />
                        </a>
                        <a href="#" title="">
                            <img src={google} alt="" />
                        </a>
                        <a href="#" title="">
                            <img src={apple} alt="" />
                        </a>
                    </div>
                    <div className='opt-link'>
                    {action==="Log in" ? <div>Don’t have an account? <a href="#" onClick={()=>{setAction('Sign up')}}>Sign up</a></div>: <div>Already have an account? <a href="#" onClick={()=>{setAction('Log in')}}>Log in</a></div>}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LoginSignup