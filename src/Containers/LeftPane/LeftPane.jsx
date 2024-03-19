import React from 'react'
import "./leftPane.css";
import { RiArrowDropDownLine } from "react-icons/ri";
import user_img from "../../Assets/user-profile.png"
import { FaUsers } from "react-icons/fa";
import { BsCalendar2EventFill } from "react-icons/bs";
import { MdDashboard } from "react-icons/md";
import { useLocation, useNavigate } from 'react-router-dom';



const LeftPane = () => {
  
  const navigate = useNavigate();
  const location = useLocation();

  console.log(location);
  
  const activeStyle = {
    boxShadow: "0px 2px 2px rgba(0,0,0,0.3)",
    backgroundColor: "#fff",
    color: "#000"
  }


  return (
    <div className='left_pane' style={{position: "relative"}}>
        <h1>Swinxter</h1>
        <div className='userbox'>
            <img src={user_img} />
            <div>
                <p>Dave Johnson</p>
                <p>Admin</p>
            </div>
            <RiArrowDropDownLine style={{fontSize: "20px"}}/>
        </div>
        <ul>
          <li style={location.search.length===0?activeStyle:null}  onClick={() => navigate("/dashboard")}><MdDashboard className='list_icons' />Dashboard</li> 
          <li style={location.search.includes("events")?activeStyle:null} onClick={() => navigate("/dashboard?pg=events")}><BsCalendar2EventFill className='list_icons'/>Events</li> 
          <li style={location.search.includes("clubs")?activeStyle:null} onClick={() => navigate("/dashboard?pg=clubs")}><FaUsers className='list_icons' />Clubs</li> 
          <li style={location.search.includes("situationship")?activeStyle:null} onClick={() => navigate("/dashboard?pg=situationships")}><FaUsers className='list_icons' />Situationship</li> 
          <li style={location.search.includes("users")?activeStyle:null}  onClick={() => navigate("/dashboard?pg=users")} ><FaUsers className='list_icons' />Users</li> 
          <li style={location.search.includes("admin_members")?activeStyle:null}  onClick={() => navigate("/dashboard?pg=admin_members")} ><FaUsers className='list_icons' />Admin Users</li> 
        </ul>
        <p style={{position: "absolute", bottom: "40px", left: "50%", transform: "translateX(-50%)", cursor: "pointer"}} onClick={() => {navigate("/")} }>Log Out</p>
    </div>
  )
}

export default LeftPane