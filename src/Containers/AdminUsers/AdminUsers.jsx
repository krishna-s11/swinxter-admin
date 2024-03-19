import React, { useState } from 'react'
import "./adminUsers.css";
import CreateUser from '../../Components/CreateUser/CreateUser';

const AdminUsers = () => {
    const [userModal, setUserModal] = useState(false);
  return (
    <div className='manage_users'>
        {userModal?<CreateUser close={() => {setUserModal(false)}}/>:null}
        <h1>Admin Users</h1>
        <div className='action_holder'>
            <input type="text" name="" id="searchbox" placeholder='start typing...' />
            <select>
                <option>Filters</option>
            </select>
            <p onClick={() => {setUserModal(true)}} style={{marginLeft: "20px", fontWeight: "500", color: "#fff", backgroundColor: "#1a33d6ff", padding: "10px 20px", borderRadius: "30px", boxShadow: "0 0 5px rgba(0,0,0,0.3", cursor: "pointer"}}>
                Create New +
            </p>
        </div>
        
        {/* <Table /> */}
    </div>
  )
}

export default AdminUsers