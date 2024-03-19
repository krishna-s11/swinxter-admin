import React, { useState } from 'react'
import "./createUser.css";
import userimg from "../../Assets/user-profile.png"
import { IoMdCloseCircle } from "react-icons/io";

const CreateUser = ({close}) => {
    const [img,setImg] = useState();

    const handleImage = e => {
        // setImg(e.target.files[0]);
        console.log(e);
    }

  return (
    <div className='createuser'>
        <div className='createuser_header'>
            <h2>Create User</h2>
            <IoMdCloseCircle onClick={() => {close()}} style={{fontSize: "24px", position: "absolute", right: "10px", top: "50%", transform: "translateY(-50%)", cursor: "pointer"}}/>
        </div>
        <div className='createuser_photobox'>
            <img src={userimg} alt="" className='userphoto' />
            <input type='file' className='btn_upload' onChange={handleImage}/>
        </div>
        <form>
            <div className='form_inputbox'>
                <label for="name">Name: </label>
                <input type='text' name="name" className='form_inputs' />
            </div>
            <div className='form_inputbox'>
                <label for="email">Email: </label>
                <input type='email' name="email" className='form_inputs' />
            </div>
            <div className='form_inputbox'>
                <label for="password">Password: </label>
                <input type='password' name="password" className='form_inputs' />
            </div>
            <div className='form_inputbox'>
                <label for="password">Role: </label>
                {/* <input type='password' name="password" className='form_inputs' /> */}
            </div>
        </form>
    </div>
  )
}

export default CreateUser