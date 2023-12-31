import React from 'react'
import "./rightPane.css";
import ManageUsers from '../../Containers/ManageUsers/ManageUsers';
import {Routes,Route, useLocation} from "react-router-dom";
import Home from '../Home/Home';
import Events from '../Events/Events';
import Clubs from '../Clubs/Clubs';

const RightPane = () => {
  const location = useLocation();
  return (
    <div className='right-pane'>
        {
          location.search.includes("users")?<ManageUsers/> :null
        }
        {
          location.search.includes("events")?<Events/> : null
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