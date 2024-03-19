import React, { useEffect, useState } from 'react'
import "./eventDetails.css";
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const EventDetails = () => {
  const location = useLocation();
  const [event,setEvent] = useState(null);
  const [club,setClub] = useState(null);
  const [situationship,setSituationship] = useState(null);

  const getData = async () => {
    const id = location.search.split("id=")[1];
    const type = location.search.split("pg=")[1].split("?")[0];
    console.log(type);
    if(type==='event'){
    const res = await axios.get(`https://swinxter-test.onrender.com/api/get_event/${id}`);
    setEvent(res.data);
    }
    else if(type==='club'){
      const res = await axios.get(`https://swinxter-test.onrender.com/api/getClub/${id}`);
      setClub(res.data);
    }
    else if(type==='situationship'){
      const res = await axios.get(`https://swinxter-test.onrender.com/api/travel/${id}`);
      setSituationship(res.data);
    }
  }

  useEffect(() => {
    getData();
  },[])

  console.log(situationship);

  return (
    <div className='event_details_pg'>
        {event ?
        <>
        <h1>Event Details</h1>
        <img src={event.mainImage} className="event_main_img" alt='Event cover image'/>
        <h2 style={{marginTop: "20px"}}>{event.eventName}</h2>
        <p>By {event.userId.username}</p>
        <p style={{marginTop: "10px", fontWeight: "600"}}>{event.Startdate.split("T")[0]} {`(${event.Startdate.split("T")[1]})`} - {event.EndDate.split("T")[0]} {`(${event.EndDate.split("T")[1]})`}</p>
        <p style={{marginTop: "10px"}}><span style={{fontWeight: "600"}}>Type:</span> {event.type}</p>
        <p style={{marginTop: "10px"}}><span style={{fontWeight: "600"}}>Accepted:</span> {event.accepted_type.map(d => (`${d} `))}</p>
        <p style={{marginTop: "10px"}}><span style={{fontWeight: "600"}}>Location:</span> {event.location.display_name}</p>
        <p style={{marginTop: "10px"}}><span style={{fontWeight: "600"}}>Contact:</span> {event.contact}</p>
        <p style={{marginTop: "10px"}}>{event.description}</p>
        <h3 style={{marginTop: "20px"}}>Images:</h3>
        <div className='event_details_images'>
            {
                event.images.length > 0?
                    event.images.map((image,index) => {
                        return <img src={image} key={index} className="event_details_image"/>
                    })
                :
                <p>No images available</p>
            }
        </div>
        <div style={{width: "10px", height: "50px"}}>

        </div>
        </>:null}
        {
          club?
          <>
            <h1>Club Details</h1>
            <img src={club?.image[0]} className="event_main_img" alt='Event cover image'/>
            <h2 style={{marginTop: "20px"}}>{club.clubname}</h2>
            <p>By {club.owner_name}</p>
            <p style={{marginTop: "10px"}}><span style={{fontWeight: "600"}}></span> {club.introduction}</p>
            <p style={{marginTop: "10px"}}><span style={{fontWeight: "600"}}>Location:</span> {club.location.display_name}</p>
            <p style={{marginTop: "10px"}}><span style={{fontWeight: "600"}}>Contact:</span> {club.contact}</p>
            <p style={{marginTop: "10px"}}><span style={{fontWeight: "600"}}>Website:</span> {club.website}</p>
            <p style={{marginTop: "10px"}}><span style={{fontWeight: "600"}}>Description:</span> {club.description}</p>
            <h3 style={{marginTop: "20px"}}>Images:</h3>
            <div className='event_details_images'>
                {
                    club?.image?.length > 0?
                        event?.image.map((image,index) => {
                            return <img src={image} key={index} className="event_details_image"/>
                        })
                    :
                    <p>No images available</p>
                }
            </div>
            <div style={{width: "10px", height: "50px"}}>

            </div>
          </>:null
        }
        {
          situationship?
          <>
            <h1>Situationship Details</h1>
            <img src={situationship?.image} className="event_main_img" alt='Situationship cover image'/>
            <h2 style={{marginTop: "20px"}}>{situationship.name}</h2>
            <p>{situationship.description}</p>
            <p style={{marginTop: "10px"}}><span style={{fontWeight: "600"}}>Date: </span> {situationship.startDate.split("T")[0]} {`(${situationship.startDate.split("T")[1]})`} - {situationship.endDate.split("T")[0]} {`(${situationship.endDate.split("T")[1]})`}</p>
            <p style={{marginTop: "10px"}}><span style={{fontWeight: "600"}}>Resort: </span> {situationship.resort}</p>
            <p style={{marginTop: "10px"}}><span style={{fontWeight: "600"}}>Location: </span>{situationship.locationto.display_name}</p>
            <p style={{marginTop: "10px"}}><span style={{fontWeight: "600"}}>Interested: </span>{situationship.interested.map(d => (`${d}, `))}</p>
            {/* <p style={{marginTop: "10px"}}><span style={{fontWeight: "600"}}>Description:</span> {club.description}</p> */}
            {/* <h3 style={{marginTop: "20px"}}>Images:</h3> */}
            {/* <div className='event_details_images'>
                {
                    club?.image?.length > 0?
                        event?.image.map((image,index) => {
                            return <img src={image} key={index} className="event_details_image"/>
                        })
                    :
                    <p>No images available</p>
                }
            </div> */}
            <div style={{width: "10px", height: "50px"}}>

            </div>
          </>:null
        }
    </div>
  )
}

export default EventDetails