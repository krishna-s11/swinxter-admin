import React,{useState,useEffect} from 'react'
import "./situationship.css"
import axios from "axios";
import Table from '../../Components/Table/Table';

const Situationship = () => {
    const [data,setData] = useState();

    const fetchData = async () => {
        const data = await axios.get("https://swinxter-test.onrender.com/api/search_travel");
        setData(data.data);
    }

    useEffect(() => {
        fetchData();
    },[])
    console.log(data);
  return (
    <div className='situationship'>
        <h1>Situationships </h1>
        <div className='action_holder'>
            <input type="text" name="" id="searchbox" placeholder='start typing...' />
            <select>
                <option>Filters</option>
            </select>
        </div>
        <Table data={data} type="situationship" />
    </div>
  )
}

export default Situationship