import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../main";
import axios from "axios";
import toast from "react-hot-toast";
import { Link, NavLink, useNavigate, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { toggleMode } from "../../Redux/Slices/ThemeSlice";
// import { useDispatch, useSelector } from "react-redux";
import { setField, loginUser } from '../../Redux/Slices/LoginSlice'
import { MdOutlineMailOutline } from "react-icons/md";
// import { Link, Navigate } from "react-router-dom";
// import { AuthContext } from "../../main";
// import loginIcon from '/images/loginIcon.png'
// import loginBanner from '/images/loginBanner.png'
import { IoEyeOutline } from "react-icons/io5"
import { FaRegEyeSlash } from "react-icons/fa";
import './header.css'
import Modal from "./Modal";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { isAuthorized, setIsAuthorized, user, setUser } = useContext(AuthContext);
  const dispatch = useDispatch();
  const currentMode = useSelector((state) => state.theme.mode);



  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };

  const navigateTo = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await axios.get(
        "https://portfolio-backend-2ts0.onrender.com/api/v1/user/logout",
        {
          withCredentials: true,
        }
      );
      toast.success(response.data.message);
      setIsAuthorized(false);
      navigateTo("/login");
    } catch (error) {
      toast.error(error.response.data.message), setIsAuthorized(true);
    }
  };

  // login 
  const [showPassword, setShowPassword] = useState(false);

  const { email, password, status, error } = useSelector((state) => state.login);

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



  if (isAuthorized) {
    return <Navigate to={'/'} />
  }

  return (
    <header className={`nav-head ${currentMode} `}>
      <nav className={`nav-main  isAuthorized ? "navbarShow" : "navbarHide"`}>
        <Link to={"/"} className='logolink'>
          <div className="logo">
            Code<font>Paras</font>
          </div>
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
          {/* <GiHamburgerMenu /> */}
        </div>
        <ul className={clicked ? "menu-list" : "menu-list close"}>
          <li className="nav-list-item">
            <NavLink to={"/"}>
              Home
            </NavLink>
          </li>
          <li className="nav-list-item">
            <NavLink to={'/acheivemnts'}>
              Acheivements
            </NavLink>
          </li>
          <li className="nav-list-item">
            <NavLink to={"/projects"}>
              Projects
            </NavLink>
          </li>
          {user && user.role === 'admin' ? (
            <>
              <li className="nav-list-item">
                <NavLink to={'/postProject'}>
                  Post Project
                </NavLink>
              </li>
            </>
          ) : (
            <>
            </>
          )}
          <li className="nav-list-item">
            <NavLink to={'/contact'}>
              Contact
            </NavLink>
          </li>
          {/* <li
          className="theme-toggle-btn nav-list-item"
          onClick={handleToggleTheme}
        >
          <i
            className={`fa-solid fa-${
              currentMode === "light" ? "moon" : "sun"
            }`}
          />
        </li > */}
          <li className="theme-toggle-btn nav-list-item ">
            {isAuthorized ? (<NavLink onClick={handleLogout}>LOGOUT</NavLink>)
              : (<>
                <NavLink id="auth-btn" onClick={() => setIsOpen(true)}>Admin</NavLink>
              </>   
              )
            }
            <Modal className='loginmodal'
                  header={<div className="modal-header">Admin Login</div>}
                  // footer={
                  //   <div className="modal-footer">
                  //     <button
                  //       onClick={() => setIsOpen(false)}
                  //       className="cancel-btn"
                  //     >
                  //       Cancel
                  //     </button>
                  //     <button
                  //       onClick={() => setIsOpen(false)}
                  //       className="signin-btn"
                  //     >
                  //       Sign In
                  //     </button>
                  //   </div>
                  // }
                  isOpen={isOpen}
                  setIsOpen={setIsOpen}
                >
                  <form className="loginform" onSubmit={handleLogin}>
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
                    <button
                        onClick={() => setIsOpen(false)}
                        className="cancel-btn"
                      >
                        Cancel
                      </button>
                  </form>
                </Modal>
          </li>

        </ul>
      </nav>
    </header>
  );
};

export default Header;