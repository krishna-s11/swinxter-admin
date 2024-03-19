import React from 'react'
import "./rightPane.css";
import ManageUsers from '../../Containers/ManageUsers/ManageUsers';
import {Routes,Route, useLocation} from "react-router-dom";
import Home from '../Home/Home';
import Events from '../Events/Events';
import Clubs from '../Clubs/Clubs';
import EventDetails from '../EventDetails/EventDetails';
import Situationship from '../Situationship/Situationship';
import AdminUsers from '../AdminUsers/AdminUsers';

const RightPane = () => {
  const location = useLocation();
  return (
    <div className='right-pane'>
        {
          location.search.includes("type=details")?<EventDetails/> : null
        }
        {
          location.search.includes("users")?<ManageUsers/> :null
        }
        {
          location.search.includes("events")?<Events/> : null
        }
        {
          location.search.includes("situationships")?<Situationship/> : null
        }
        {
          location.search.includes("admin_members")?<AdminUsers/> : null
        }
        {
          location.search.includes("clubs")?<Clubs/> : null
        }
        {
          !location.search?<Home />: null
        }
    </div>
  )
}

export default RightPane