import React, { useState, useContext } from "react";
import { AuthContext } from "../../main";
import axios from "axios";
import toast from "react-hot-toast";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleMode } from "../../Redux/Slices/ThemeSlice";

const Header = () => {
  const { isAuthorized, setIsAuthorized, user, setUser } = useContext(AuthContext);
  const dispatch = useDispatch();
  const currentMode = useSelector((state) => state.theme.mode);

  const handleToggleTheme = () => {
    dispatch(toggleMode()); 
  };

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

  return (
    <header className={`nav-head ${currentMode} `}>
    <nav className={`nav-main  isAuthorized ? "navbarShow" : "navbarHide"`}>
      <div className="logo">
        Code<font>Paras</font>
      </div>
      <div className="menu-icon" onClick={handleClick}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
        {/* <GiHamburgerMenu /> */}
      </div>
      <ul className={clicked ? "menu-list" : "menu-list close"}>
        <li className="nav-list-item">
          <NavLink  to={"/"}>
            Home
          </NavLink>
        </li>
        <li className="nav-list-item">
          <NavLink to={'/acheivemnts'}>
            Acheivements
          </NavLink>
        </li>
        <li className="nav-list-item">
          <NavLink  to={"/projects"}>
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
        <li
          className="theme-toggle-btn nav-list-item"
          onClick={handleToggleTheme}
        >
          <i
            className={`fa-solid fa-${
              currentMode === "light" ? "moon" : "sun"
            }`}
          />
        </li >
        <li  className="theme-toggle-btn nav-list-item "> 
          {isAuthorized ? (<NavLink  onClick={handleLogout}>LOGOUT</NavLink> )
           : (<NavLink id="auth-btn" to={'/login'}>LOGIN</NavLink>)
        }    
        </li>
        
      </ul>
    </nav>
    </header>
  );
};

export default Header;