import React, { useState } from 'react'
import "./table.css"
import { useNavigate } from 'react-router'
import DeleteCard from '../DeleteCard/DeleteCard';
import ApproveCard from '../ApproveCard/ApproveCard';
import axios from 'axios';

const Table = ({data,type,refresh}) => {
  const [deleteBox, setDeleteBox] = useState(false);
  const [approveBox, setApproveBox] = useState(false);
  const [actionType, setActionType] = useState("");
  const [id,setId] = useState("");
  const navigate = useNavigate();

  if(type==="clubs"){

    const approve = async () => {
      try {
        const res = await axios.put(`https://swinxter-test.onrender.com/api/approve_club/${id}`);
        console.log(res);
        refresh();
      } catch (error) {
        console.log(error);
      }
    }

    const suspend = async () => {
      try {
        const res = await axios.put(`https://swinxter-test.onrender.com/api/approve_club/${id}`, {suspend: true});
        console.log(res);
        refresh();
      } catch (error) {
        console.log(error);
      }
    }
    const deleteFn = async () => {
      try {
        const res = await axios.delete(`https://swinxter-test.onrender.com/api/delete_club/${id}`);
        console.log(res);
        refresh();
      } catch (error) {
        console.log(error);
      }
    }

    return(
      <table border={0}>
        {
         deleteBox?<DeleteCard close={() => {setDeleteBox(false)}} deleteFN={deleteFn} type={actionType} approve={approve} suspend={suspend}/> :null
        }
      <tr>
          <th></th>
          <th>Name</th>
          <th>Host</th>
          <th>Type</th>
          <th>Verfied</th>
          <th colSpan={2}>Action</th>
      </tr>
      {
        data && data.map((d,i) => {
          return(
            <tr key={i}>
              <td>{i+1}</td>
              <td style={{cursor: "pointer", textDecoration: "underline"}} onClick={() => {navigate(`/dashboard?type=details?pg=club?id=${d._id}`)}}>{d.clubname}</td>
              <td>{d.owner_name}</td>
              <td>{d.clubtype}</td>
              <td>{d.isverify?"Yes":"No"}</td>
              <td style={d.isverify?{color: "red"}:{color: "#22a6b3"}} className='btn_action'  onClick={d.isverify?() => {setId(d._id); setActionType("suspension"); setDeleteBox(true)}:() => {setId(d._id); setActionType("approval"); setDeleteBox(true)}}>{d.isverify?"Suspend":"Approve"}</td>
              <td className='btn_view' onClick={() => {setId(d._id); setActionType("deletion"); setDeleteBox(true)}}>Delete</td>
            </tr>
          )
        })
      }
      </table>
    )
  }
  if(type==="events"){

    const approve = async () => {
      try {
        const res = await axios.post(`https://swinxter-test.onrender.com/api/approve_event/${id}`);
        console.log(res);
        refresh();
      } catch (error) {
        console.log(error);
      }
    }

    const suspend = async () => {
      try {
        const res = await axios.post(`https://swinxter-test.onrender.com/api/approve_event/${id}`, {suspend: true});
        console.log(res);
        refresh();
      } catch (error) {
        console.log(error);
      }
    }
    const deleteFn = async () => {
      try {
        const res = await axios.delete(`https://swinxter-test.onrender.com/api/delete_event/${id}`);
        console.log(res);
        refresh();
      } catch (error) {
        console.log(error);
      }
    }

    return(
      <table border={0}>
        {
          deleteBox?<DeleteCard close={() => {setDeleteBox(false)}} deleteFN={deleteFn} type={actionType} approve={approve} suspend={suspend}/> :null
        }
      <tr>
          <th></th>
          <th>Name</th>
          {/* <th>Host</th> */}
          <th>Type</th>
          <th>Dates</th>
          <th>Verfied</th>
          <th colSpan={2}>Action</th>
      </tr>
      {
        data && data.map((d,i) => {
          return(
            <tr key={i}>
              <td>{i+1}</td>
              <td style={{cursor: "pointer", textDecoration: "underline"}} onClick={() => {navigate(`/dashboard?type=details?pg=event?id=${d._id}`)}} >{d.eventName}</td>
              {/* <td>{d.userId?.username}</td> */}
              <td>{d.type}</td>
              <td>{d.Startdate.split("T")[0]} - {d.EndDate.split("T")[0]}</td>
              <td>{d.isverify?"Yes":"No"}</td>
              <td style={d.isverify?{color: "red"}:{color: "#22a6b3"}} className='btn_action'
              onClick={d.isverify?() => {setId(d._id);setActionType("suspension"); setDeleteBox(true)}:() => {setId(d._id); setActionType("approval"); setDeleteBox(true)}}>{d.isverify?"Suspend":"Approve"}</td>
              <td className='btn_view' onClick={() => {setId(d._id);setActionType("deletion"); setDeleteBox(true)}}>Delete</td>
            </tr>
          )
        })
      }
      </table>
    )
  }
  if(type==="situationship"){

    const approve = async () => {
      try {
        const res = await axios.put(`https://swinxter-test.onrender.com/api/approve_travel/${id}`);
        console.log(res);
        refresh();
      } catch (error) {
        console.log(error);
      }
    }

    const suspend = async () => {
      try {
        const res = await axios.put(`https://swinxter-test.onrender.com/api/approve_travel/${id}`, {suspend: true});
        console.log(res);
        refresh();
      } catch (error) {
        console.log(error);
      }
    }
    const deleteFn = async () => {
      try {
        const res = await axios.delete(`https://swinxter-test.onrender.com/api/delete_travel/${id}`);
        console.log(res);
        refresh();
      } catch (error) {
        console.log(error);
      }
    }
    return(
      <table border={0}>
        {
          deleteBox?<DeleteCard close={() => {setDeleteBox(false)}} deleteFN={deleteFn} type={actionType} approve={approve} suspend={suspend}/> :null
        }
      <tr>
          <th></th>
          <th>Name</th>
          <th>Resort</th>
          <th>Location</th>
          <th>Dates</th>
          <th>Verfied</th>
          <th colSpan={2}>Action</th>
      </tr>
      {
        data && data.map((d,i) => {
          return(
            <tr key={i}>
              <td>{i+1}</td>
              <td style={{cursor: "pointer", textDecoration: "underline"}} onClick={() => {navigate(`/dashboard?type=details?pg=situationship?id=${d._id}`)}} >{d.name}</td>
              <td>{d.resort}</td>
              <td>{d.locationto.display_name}</td>
              <td>{d.startDate}</td>
              <td>{d.isVerify?"Yes":"No"}</td>
              <td style={d.isVerify?{color: "red"}:{color: "#22a6b3"}} className='btn_action' onClick={d.isVerify?() => {setId(d._id);setActionType("suspension"); setDeleteBox(true)}:() => {setId(d._id);setActionType("approval"); setDeleteBox(true)}}>{d.isVerify?"Suspend":"Approve"}</td>
              <td className='btn_view' onClick={() => {setId(d._id); setActionType("deletion"); setDeleteBox(true)}}>Delete</td>
            </tr>
          )
        })
      }
      </table>
    )
  }
  if(type==="admins"){
    const deleteUser = async (id) => {
      try {
        const res = await axios.delete(`https://swinxter-test.onrender.com/admin/delete_user/${id}`);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    }

    return(
      <table border={0}>
        {
          deleteBox?<DeleteCard close={() => {setDeleteBox(false)}} type={actionType} deleteFN={() => {deleteUser(id); refresh();}}/> :null
        }
      <tr>
          <th></th>
          <th>Name</th>
          <th>Username</th>
          <th>Events</th>
          <th>Clubs</th>
          <th>Situationships</th>
          <th>Users</th>
          <th>Admins</th>
          <th colSpan={2}>Action</th>
      </tr>
      {
        data && data.map((d,i) => {
          return(
            <tr key={i}>
              <td>{i+1}</td>
              <td>{d.name}</td>
              <td>{d.username}</td>
              <td>{d.events?"Yes":"No"}</td>
              <td>{d.clubs?"Yes":"No"}</td>
              <td>{d.situationships?"Yes":"No"}</td>
              <td>{d.users?"Yes":"No"}</td>
              <td>{d.admins?"Yes":"No"}</td>
              <td style={{color: "#22a6b3", cursor: "pointer"}}>Edit</td>
              <td style={{color: "red", cursor:"pointer"}} onClick={() => {setId(d._id); setActionType("deletion"); setDeleteBox(true)}}>Delete</td>
              {/* <td>{d.locationto.display_name}</td> */}
              {/* <td>{d.startDate}</td> */}
              {/* <td>{d.isver/ify?"Yes":"No"}</td> */}
              {/* <td style={d.isverify?{color: "red"}:{color: "#22a6b3"}} className='btn_action' onClick={d.isverify?() => {setActionType("suspension"); setDeleteBox(true)}:() => {setActionType("approval"); setDeleteBox(true)}}>{d.isverify?"Suspend":"Approve"}</td> */}
              {/* <td className='btn_view' onClick={() => {setActionType("deletion"); setDeleteBox(true)}}>Delete</td> */}
            </tr>
          )
        })
      }
      </table>
    )
  }
  else{
  return (
    <table border={0}>
      {
        deleteBox?<DeleteCard close={() => {setDeleteBox(false)}} type={actionType}/> :null
      }
    <tr>
        <th></th>
        <th>Name</th>
        <th>Type</th>
        <th>Subcription</th>
        <th>Gender</th>
        <th colSpan={2}>Action</th>
    </tr>
    {
        data && data.map((d,i) => {
            return(
                <tr key={i}>
                <td>{i+1}</td>
                <td>{d.username}</td>
                <td>{d.Relationship?d.Relationship:"Couple"}</td>
                <td>Free Plan</td>
                <td>{d.gender?d.gender:`${d.couple.person1.gender} | ${d.couple.person2.gender}`}</td>
                <td style={d.isVerify?{color: "red"}:{color: "#22a6b3"}} className='btn_action' onClick={d.isVerify?() => {setActionType("suspension"); setDeleteBox(true)}:() => {setActionType("approval"); setDeleteBox(true)}} >{d.isVerify?"Suspend":"Approve"}</td>
                <td className='btn_view' onClick={() => {setActionType("deletion"); setDeleteBox(true)}}>Delete</td>
            </tr>
            )
        })
    } 
    </table>
  )
  }
}

export default Table