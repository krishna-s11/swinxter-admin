import React, { useState, useContext} from 'react'
import "./login.css";
import logo from "../../Assets/SwinxterLogo-bg.png"
import { FaUser } from "react-icons/fa";
import { CiCircleInfo } from "react-icons/ci";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { IoMdArrowRoundForward } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../../Contexts/AuthContext';




const Login = () => {
    const navigate = useNavigate();
    const [details,setDetails] = useState({
        username: "",
        password: "",
    })
    const [invalid,setInvalid] = useState("");
    const {currentUser,setCurrentUser} = useContext(AuthContext);

    const handleChange = e => {
        setDetails({...details, [e.target.name]: e.target.value});
    }

    useState(() => {
        if(currentUser !== null){
            navigate("/dashboard");
        }
    },[currentUser])

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:8080/admin/login", details);
            setCurrentUser(res.data);
            navigate("/dashboard");
        } catch (error) {
            console.log(error.response.data);
            setInvalid(error.response.data);
        }
    }

    console.log(currentUser)

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
                <p style={invalid?{textAlign: "center", marginBottom: "20px", color: "red"}:{display: "none"}}>{invalid}</p>
                <button className='btn_login' onClick={handleSubmit}>
                    <IoMdArrowRoundForward />
                </button>
            </div>
        </div>
    </div>
  )
}

export default Login