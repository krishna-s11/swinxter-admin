import React, { useState } from 'react'
import "./createUser.css";
import userimg from "../../Assets/user-profile.png"
import { IoMdCloseCircle } from "react-icons/io";
import axios from "axios";

const CreateUser = ({close,refresh}) => {
  const [details, setDetails] = useState({
    name: "",
    username: "",
    password: "",
    events: false,
    clubs: false,
    situationships: false,
    users: false,
    admins: false,
  });

  const handleChange = e => {
    setDetails({...details, [e.target.name]: e.target.value});
  }

  const handleRoles = e => {
    setDetails({...details, [e.target.name]: e.target.checked});
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const res = await axios.post("http://localhost:8080/admin/signup", details);
        console.log(res.data);
        await refresh();
        close();
    } catch (error) {
        console.log(error);   
    }
  }

  console.log(details);

  return (
    <div className='createuser'>
        <div className='createuser_header'>
            <h2>Create User</h2>
            <IoMdCloseCircle onClick={() => {close()}} style={{fontSize: "24px", position: "absolute", right: "10px", top: "50%", transform: "translateY(-50%)", cursor: "pointer"}}/>
        </div>
        <div className='createuser_photobox'>
            <img src={userimg} alt="" className='userphoto' />
            {/* <input type='file' className='btn_upload' onChange={handleImage}/> */}
        </div>
        <form>
            <div className='form_inputbox'>
                <label for="name">Name: </label>
                <input type='text' name="name" onChange={handleChange} className='form_inputs' />
            </div>
            <div className='form_inputbox'>
                <label for="username">Username: </label>
                <input type='name' name="username" onChange={handleChange} className='form_inputs' />
            </div>
            <div className='form_inputbox'>
                <label for="password">Password: </label>
                <input type='password' name="password" onChange={handleChange} className='form_inputs' />
            </div>
            <div className='form_inputbox'>
                <label for="password">Grant Access: </label>
                <div style={{marginTop: "10px", marginLeft: "5px"}}>
                    <input type="checkbox" name="events" onChange={handleRoles} id="" />
                    <label for="events" style={{marginLeft: "8px"}}>Events</label><br/><br/>
                    <input type="checkbox" name="clubs" onChange={handleRoles} id="" />
                    <label for="events" style={{marginLeft: "8px"}}>Clubs</label><br/><br/>
                    <input type="checkbox" name="situationships" onChange={handleRoles} id="" />
                    <label for="events" style={{marginLeft: "8px"}}>Situationship</label><br/><br/>
                    <input type="checkbox" name="users" id="" onChange={handleRoles} />
                    <label for="events" style={{marginLeft: "8px"}}>Users</label><br/><br/>
                    <input type="checkbox" name="admins" id="" onChange={handleRoles} />
                    <label for="events" style={{marginLeft: "8px"}}>Admin Users</label><br/><br/>
                </div>
            </div>
            <div style={{width: "100%",marginTop: "10px", display: "flex", justifyContent: "center"}}>
                <button className='btn_create_user' onClick={handleSubmit}>Create User</button>
            </div>
        </form>
    </div>
  )
}

export default CreateUser