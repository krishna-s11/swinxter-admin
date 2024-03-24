import React,{useEffect, useState} from 'react'
import "./events.css";
import axios from "axios";
import Table from '../../Components/Table/Table';
import DeleteCard from '../../Components/DeleteCard/DeleteCard';

const Events = () => {
    const [events,setEvents] = useState([]);

    const fetchEvents = async () => {
        const data = await axios.get("https://swinxter-test.onrender.com/api/allevents");
        setEvents(data.data);
    }

    useEffect(() => {
        fetchEvents();
    },[])

    let filteredEvents = events?.filter(event => {
        let now = new Date();
        let eventEndDate = new Date(event.EndDate);
        return eventEndDate > now;
    }).reverse();

    console.log(filteredEvents);
  return (
    <div className='events'>
        <h1>Events </h1>
        <div className='action_holder'>
            <input type="text" name="" id="searchbox" placeholder='start typing...' />
            <select>
                <option>Filters</option>
            </select>
        </div>
        <Table data={filteredEvents} type="events" refresh={fetchEvents} />
    </div>
  )
}

export default Events