import React,{useState,useEffect} from 'react'
import "./clubs.css";
import axios from "axios";
import Table from '../../Components/Table/Table';

const Clubs = () => {
    const [clubs,setClubs] = useState(null);

    const fetchClubs = async () => {
        const data = await axios.get("https://swinxter-test.onrender.com/api/search_club");
        setClubs(data.data);
    }

    useEffect(() => {
        fetchClubs();
    },[])

  return (
    <div className='clubs'>
        <h1>Clubs </h1>
        <div className='action_holder'>
            <input type="text" name="" id="searchbox" placeholder='start typing...'/>
            <select>
                <option>Filters</option>
            </select>
        </div>
        <Table data={clubs} type="clubs" />
    </div>
  )
}

export default Clubs