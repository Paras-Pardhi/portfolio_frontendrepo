import React, { useContext, useState , useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { setField, loginUser } from '../../Redux/Slices/LoginSlice'
import { MdOutlineMailOutline } from "react-icons/md";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../../main";
import loginIcon from '/images/loginIcon.png'
import loginBanner from '/images/loginBanner.png'
import { IoEyeOutline } from "react-icons/io5"
import { FaRegEyeSlash } from "react-icons/fa";



const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
    const { isAuthorized, setIsAuthorized } = useContext(AuthContext);
    const dispatch = useDispatch();
    const { email, password,status, error } = useSelector((state) => state.login);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      dispatch(setField({ field: name, value }));
    };

    const handleLogin = (e) => {
      e.preventDefault();
      dispatch(loginUser({ email, password }));
    };

    const passwordToggleChange = () => {
      setShowPassword(!showPassword);
    };

    useEffect(() => {
      if (status === 'succeeded') {
        setIsAuthorized(true);
      }
    }, [status, setIsAuthorized]);


 
  if(isAuthorized){
    return <Navigate to={'/'}/>
  }

  return (
    <>
      <section className="authPage">
        <div className="container">
          <div className="header">
            <img src={loginIcon} alt="logo" />
            <h3>Login to your account</h3>
          </div>
          <form onSubmit={handleLogin}>
          <div className="inputTag">
              <label>Email Address</label>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="abc@gmail.com"
                  value={email}
                  onChange={handleChange}
                  required
                />
                <MdOutlineMailOutline />
              </div>
            </div>
            <div className="inputTag">
              <label>Password</label>
              <div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="Your Password"
                  value={password}
                  onChange={handleChange}
                  required
                />
                  {showPassword ? <FaRegEyeSlash onClick={passwordToggleChange} />
                   : <IoEyeOutline onClick={passwordToggleChange} />}
                  
              </div>
            </div>
                <button className="loginBtn" type="submit" disabled={status === 'loading'} >
              {status === 'loading' ? 'Logging in...' : 'Login'}
            </button>
            <Link to={"/register"}>Register Now</Link>
          </form>
        </div>
        <div className="banner">
          <img src={loginBanner} alt="login" />
        </div>
      </section>
    </>
  );
};

export default Login;


