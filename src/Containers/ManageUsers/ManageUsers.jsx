import React, { useEffect, useState } from 'react'
import "./manageUsers.css";
import axios from "axios";
import Table from '../../Components/Table/Table';

const ManageUsers = () => {
    const [users,setUsers] = useState();

    const fetchUsers = async () => {
        const data = await axios.get("https://swinxter-test.onrender.com/api/users");
        setUsers(data.data);
    }

    useEffect(() => {
        fetchUsers();
    },[])

    console.log(users);

  return (
    <div className='manage_users'>
        <h1>Manage Users</h1>
        <div className='action_holder'>
            <input type="text" name="" id="searchbox" placeholder='start typing...' />
            <select>
                <option>Filters</option>
            </select>
        </div>
        
        <Table data={users} />
    </div>
  )
}

export default ManageUsers