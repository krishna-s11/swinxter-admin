import React from 'react'
import "./deleteCard.css";
import warning from "../../Assets/warning-ico.png"

const DeleteCard = ({close,type}) => {
  
  if(type === 'deletion') 
  return (
    <div className='delete-box'>
        <div className='delete-card'>
            <div className='dl-top'>
                <h2>Delete Data</h2>
            </div>
            <div className='delete-content'>
                <img src={warning} alt=''></img>
                <p>This will permanently delete the data.</p>
            </div>
            <div className='dl-action-box'>
                <button className='btn btn-cancel' onClick={close}>Cancel</button>
                <button className='btn btn-delete'>Delete</button>
            </div>
        </div>
    </div>
  )
  if(type === 'suspension') 
  return(
    <div className='delete-box'>
        <div className='delete-card'>
            <div className='dl-top'>
                <h2>Suspend Event</h2>
            </div>
            <div className='delete-content'>
                <img src={warning} alt=''></img>
                <p>This will suspend the event.</p>
            </div>
            <div className='dl-action-box'>
                <button className='btn btn-cancel' onClick={close}>Cancel</button>
                <button className='btn btn-delete'>Delete</button>
            </div>
        </div>
    </div>
  )
  if(type === 'approval') {
    return(
    <div className='approve-box'>
        <div className='approve-card'>
            <div className='dl-top'>
                <h2>Approve Data</h2>
            </div>
            <div className='approve-content'>
                <img src={warning} alt=''></img>
                <p>This will approve the data.</p>
            </div>
            <div className='dl-action-box'>
                <button className='btn btn-cancel' onClick={close}>Cancel</button>
                <button className='btn btn-approve'>Approve</button>
            </div>
        </div>
    </div>
    )
  }
}

export default DeleteCard