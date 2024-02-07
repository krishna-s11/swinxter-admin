import React from 'react'
import "./table.css"
import { useNavigate } from 'react-router'

const Table = ({data,type}) => {

  const navigate = useNavigate();

  if(type==="clubs"){
    return(
      <table border={0}>
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
              <td>{d.clubname}</td>
              <td>{d.owner_name}</td>
              <td>{d.clubtype}</td>
              <td>{d.isverify?"Yes":"No"}</td>
              <td style={d.isverify?{color: "red"}:{color: "#22a6b3"}} className='btn_action'>{d.isverify?"Suspend":"Approve"}</td>
              <td className='btn_view'>Delete</td>
            </tr>
          )
        })
      }
      </table>
    )
  }
  if(type==="events"){
    return(
      <table border={0}>
      <tr>
          <th></th>
          <th>Name</th>
          <th>Host</th>
          <th>Type</th>
          <th>Dates</th>
          <th>Verfied</th>
          <th colSpan={2}>Action</th>
      </tr>
      {
        data && data.data.map((d,i) => {
          return(
            <tr key={i}>
              <td>{i+1}</td>
              <td style={{cursor: "pointer", textDecoration: "underline"}}onClick={() => {navigate(`/dashboard?pg=event?id=${d._id}`)}}>{d.eventName}</td>
              <td>{d.userId?.username}</td>
              <td>{d.type}</td>
              <td>{d.Startdate.split("T")[0]} - {d.EndDate.split("T")[0]}</td>
              <td>{d.isverify?"Yes":"No"}</td>
              <td style={d.isverify?{color: "red"}:{color: "#22a6b3"}} className='btn_action'>{d.isverify?"Suspend":"Approve"}</td>
              <td className='btn_view'>Delete</td>
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
                <td style={d.isVerify?{color: "red"}:{color: "#22a6b3"}} className='btn_action'>{d.isVerify?"Suspend":"Approve"}</td>
                <td className='btn_view'>Delete</td>
            </tr>
            )
        })
    } 
    </table>
  )
  }
}

export default Table