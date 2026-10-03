import React from 'react'

const Card = (props) => {
  return (
    <div className="card">
        <img src="https://plus.unsplash.com/premium_photo-1736949355119-bec70911bcc0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8Q0R3dXdYSkFiRXd8fGVufDB8fHx8fA%3D%3D" alt=''></img>
        <h1>{props.username}</h1>
        <p>{props.Bio}</p>
        <button>View Profile</button>
    </div>
  )
}

export default Card