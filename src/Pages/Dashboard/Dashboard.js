import React, { useContext, useEffect } from 'react'
import "./dashboard.css";
import { RiArrowDropDownLine } from "react-icons/ri";
import user_img from "../../Assets/user-profile.png"
import { FaUsers } from "react-icons/fa";
import { BsCalendar2EventFill } from "react-icons/bs";
import { useLocation, useNavigate } from 'react-router-dom';
import RightPane from '../../Containers/RightPane/RightPane';
import Home from '../../Containers/Home/Home';
import LeftPane from '../../Containers/LeftPane/LeftPane';
import { AuthContext } from '../../Contexts/AuthContext';

const Dashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {currentUser} = useContext(AuthContext);  
  
  const activeStyle = {
    boxShadow: "0px 2px 2px rgba(0,0,0,0.3)",
    backgroundColor: "#fff",
    color: "#000"
  }

  useEffect(() => {
    if(currentUser){
      console.log("user found");
    }
    else{
      navigate("/");
    }
  },[currentUser])

  return (
    <div className='dashboard'>
       <LeftPane />
       <RightPane />
    </div>
  )
}

export default Dashboard