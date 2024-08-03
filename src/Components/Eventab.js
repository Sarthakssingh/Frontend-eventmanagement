import React from 'react'
import Axios from 'axios'

const Eventab = (props) => {
  const {event_name, event_id, username, location} = props
  const deleteEvent = async() => {
    const response = await Axios.delete(`http://localhost:3000/event/:${event_id}`)
    console.log(response.data)
  }

  return (
    <div>
      <p>{event_id}</p>
      <h1>{event_name}</h1>
      <h2>{location}</h2>
      <button onClick={deleteEvent}>Delete</button>
    </div>
  )
}

export default Eventab;