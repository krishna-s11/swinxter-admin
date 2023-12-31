import React,{useEffect, useState} from 'react'
import "./events.css";
import axios from "axios";
import Table from '../../Components/Table/Table';

const Events = () => {
    const [events,setEvents] = useState();

    const fetchEvents = async () => {
        const data = await axios.get("https://swinxter-test.onrender.com/api/events");
        setEvents(data.data);
    }

    useEffect(() => {
        fetchEvents();
    },[])
    console.log(events);
  return (
    <div className='events'>
        <h1>Events </h1>
        <div className='action_holder'>
            <input type="text" name="" id="searchbox" placeholder='start typing...' />
            <select>
                <option>Filters</option>
            </select>
        </div>
        <Table data={events} type="events" />
    </div>
  )
}

export default Events