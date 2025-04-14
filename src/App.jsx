import React, { useContext, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { AuthContext } from './main';
import { useSelector } from "react-redux";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css'
import Header from './Components/layout/Header'
import Home from './Components/pages/Home'
import Footer from './Components/layout/Footer'
import Projects from './Components/pages/Projects'
import Register from './Components/pages/Register';
import Login from './Components/pages/Login';
import axios from 'axios';
import PostProject from './Components/pages/PostProject';
import ProjectDetail from './Components/pages/ProjectDetail';
import Achievements from './Components/pages/Achievements';
import Contact from './Components/pages/Contact';
import NotFound from './Components/NotFound/NotFound';

function App() {
  const currentMode = useSelector((state) => state.theme.mode);
  const { isAuthorized, setIsAuthorized, setUser } = useContext(AuthContext);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          "https://portfolio-backend-2ts0.onrender.com/api/v1/user/getuser",
          {
            withCredentials: true,
          }
        );
        setUser(response.data.user);
        setIsAuthorized(true);
      } catch (error) {
        setIsAuthorized(false);
      }
    };
    fetchUser();
  }, [isAuthorized]);

  return (
    <>
      <BrowserRouter>
        <Header/>
        <main  className={`${currentMode}`}>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/acheivemnts' element={<Achievements/>}/>
            <Route path='/projects' element={<Projects/>}/>
            <Route path='/postProject' element={ <PostProject/> }/>
            <Route path='/project/:id' element={ <ProjectDetail/> }/>
            <Route path='/contact' element={ <Contact/> }/>
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer/>
          <Toaster/>
        </main>
      </BrowserRouter>
    </>
  )
}

export default App
