import React from 'react'
import "./home.css";

const Home = () => {
  return (
    <div className='home'>
        <h1>Dashboard</h1>
        <div className='action_holder'>
            <input type="text" name="" id="searchbox" placeholder='start typing...' />
            <select>
                <option>Filters</option>
            </select>
        </div>
    </div>
  )
}

export default Home