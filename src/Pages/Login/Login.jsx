import React, { useState } from 'react'
import "./login.css";
import logo from "../../Assets/SwinxterLogo-bg.png"
import { FaUser } from "react-icons/fa";
import { CiCircleInfo } from "react-icons/ci";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { IoMdArrowRoundForward } from "react-icons/io";
import { useNavigate } from 'react-router-dom';




const Login = () => {
    const navigate = useNavigate();
    const [details,setDetails] = useState({
        username: "",
        password: "",
    })
    const [invalid,setInvalid] = useState(false);

    const handleChange = e => {
        setDetails({...details, [e.target.name]: e.target.value});
    }

    const handleSubmit = e => {
        e.preventDefault();
        if(details.username === "admin" && details.password === "admin12345")
           navigate("/dashboard");
        else{
            setInvalid(true);
        }
    }

  return (
    <div className='login'>
        <div className='login_left'>
            <img src={logo} alt="" />
            <ul>
                <li style={{    borderLeft: "10px solid #1a33d6ff"}}>
                    <FaUser style={{transform: "translateX(-5px)"}}/>
                    <p style={{transform: "translateX(-5px)"}}>Login</p>
                </li>
                <li>
                    <FaUser />
                    <p>Sign up</p>
                </li>
                <li>
                    <CiCircleInfo/>
                    <p>About</p>
                </li>
            </ul>
        </div>
        <div className='login_center'>
            <h1>Welcome to Swinxter</h1>
            <p>The content management <br/> admin board.</p>
            <a href='https://swinxter-v2.vercel.app/' target='_blank'>Go to Swinxter.com <IoArrowForwardCircleOutline style={{marginLeft: "10px", marginTop: "2px"}}/></a>
        </div>
        <div className='login_right'>
            <div className='loginbox'>
                <h1>Member Login</h1>
                <div>
                    <input type="text" name="username" onChange={handleChange} id="" placeholder='username' />
                </div>
                <div>
                    <input type="password" name="password" onChange={handleChange} id="" placeholder="password"/>
                </div>
                <p style={invalid?{textAlign: "center", marginBottom: "20px", color: "red"}:{display: "none"}}>Invalid Login Credentials</p>
                <button className='btn_login' onClick={handleSubmit}>
                    <IoMdArrowRoundForward />
                </button>
            </div>
        </div>
    </div>
  )
}

export default Login