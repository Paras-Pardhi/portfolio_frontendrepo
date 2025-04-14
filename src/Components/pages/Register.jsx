import React, { useState, useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setField, registerUser } from '../../Redux/Slices/RegisterSlice'
import { MdOutlineMailOutline } from "react-icons/md";
import { FaPencilAlt } from "react-icons/fa";
import { FaPhoneFlip } from "react-icons/fa6";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../../main";
import loginIcon from '/images/loginIcon.png'
import register from '/images/loginBanner.png'
import { IoEyeOutline } from "react-icons/io5"
import { FaRegEyeSlash } from "react-icons/fa";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
    const { isAuthorized, setIsAuthorized } = useContext(AuthContext);
    const dispatch = useDispatch();
    const { email, name, phone, password, status, error } = useSelector((state) => state.register);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      dispatch(setField({ field: name, value }));
    };
  
    const handleRegister = (e) => {
      e.preventDefault();
      dispatch(registerUser({ name, phone, email, password }));
    };

    const passwordToggleChange = () => {
      setShowPassword(!showPassword);
    };

    useEffect(() => {
      if (status === 'succeeded') {
        setIsAuthorized(true);
      }
    }, [status, setIsAuthorized]);
  
    if (isAuthorized) {
      return <Navigate to="/" />;
    }
  
    return (
      <section className="authPage">
        <div className="container">
          <div className="header">
            <img src={loginIcon} alt="logo" />
            <h3>Create a new account</h3>
          </div>
          <form onSubmit={handleRegister}>
            <div className="inputTag">
              <label>Name</label>
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Username"
                  value={name}
                  onChange={handleChange}
                  required
                />
                <FaPencilAlt />
              </div>
            </div>
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
              <label>Phone Number</label>
              <div>
                <input
                  type="number"
                  name="phone"
                  placeholder="12345678"
                  value={phone}
                  onChange={handleChange}
                  required
                />
                <FaPhoneFlip />
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
            <button className="loginBtn" type="submit" disabled={status === 'loading'}>
            {status === 'loading' ? 'Registering...' : 'Register'}
            </button>
            <Link to="/login">Login Now</Link>
          </form>
        </div>
        <div className="banner">
          <img src={register} alt="login" />
        </div>
      </section>
    );
  };

export default Register;


