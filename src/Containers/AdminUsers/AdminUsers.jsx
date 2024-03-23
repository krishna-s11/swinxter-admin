import React, { useEffect, useState } from 'react'
import "./adminUsers.css";
import CreateUser from '../../Components/CreateUser/CreateUser';
import axios from "axios";
import Table from '../../Components/Table/Table';

const AdminUsers = () => {
    const [userModal, setUserModal] = useState(false);
    const [users, setUsers] = useState([]);

    const fetchData = async () => {
        const res = await axios.get('http://localhost:8080/admin/adminUsers');
        setUsers(res.data);
    }

    useEffect(() => {
        fetchData();
    }, [])

    console.log(users);

  return (
    <div className='manage_users'>
        {userModal?<CreateUser close={() => {setUserModal(false)}} refresh={fetchData}/>:null}
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
        
        <Table data={users} type = "admins" refresh={fetchData} />
    </div>
  )
}

export default AdminUsers