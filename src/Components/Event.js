import React,{useState,useEffect} from 'react';
import Axios  from 'axios';
import Button from 'react-bootstrap/Button';
import Eventab from './Eventab';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';




const Event = () => {
    const [username,setUsername] = useState('')
    const [eventname,setEventname] = useState('')
    const [location,setLocation] = useState('')
    const [id,setId] = useState('')

    const onUsernameChange = (event) =>{
        
        setUsername(event.target.value)
    }
    const onEventnameChange = (event) =>{
        
        setEventname(event.target.value)
    }
    const onLocationChange = (event) =>{
        
        setLocation(event.target.value)
    }
    const onIdChange = (event) =>{
        
        setId(event.target.value)
    }


    const [data,setData] = useState([]);

    const seeEvents = async(e) =>{
        // e.preventDefault()
        const response = await Axios.get("http://localhost:3000/event/")
        setData(response.data)
      }
    console.log(data)

    const [sessiondata,setSessionData] = useState('');
    const getData = async() =>{
      const response = await Axios.get("http://localhost:3000/session/")
      setSessionData(response.data)
    }

    const [weatherdata,setWeatherData] = useState('');
    const getWeatherData = async() =>{
      const response = await Axios.get(`http://localhost:3000/weather/:${location}`)
      setWeatherData(response.data)
    }
  
    // useEffect(()=>{
    //   getData()
    // },[]);

    const submitEvent = async(e) => {
        e.preventDefault()
        var postData = {
            event_name:eventname,
   event_id:id,
   location:location
          };
          
          let axiosConfig = {
            headers: {
                'Content-Type': 'application/json'
            }
          };
          
          const response = await Axios.post('http://localhost:3000/event/', postData, axiosConfig)
    }

  return (
    <div>
        <div>
        <Button variant="outline-primary" onClick={seeEvents}>See All Events</Button>
        {data.map((data)=><Eventab event_name={data.event_name} event_id ={data.event_id} username={data.username} location={data.location}/>)}
        </div>
        <div>
        <Button variant="outline-primary" onClick={getData}>See Sessions</Button>
        <Button variant="outline-primary" onClick={getWeatherData}>Check Weather</Button>
        </div>
        <div>
        <Form onSubmit={submitEvent}>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Event name</Form.Label>
          <Form.Control type="text" placeholder="Enter email" onChange={onEventnameChange} />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>ID</Form.Label>
          <Form.Control type="text" placeholder="Password" onChange={onIdChange}/>
        </Form.Group>
      </Row>


      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>User</Form.Label>
          <Form.Control onChange={onUsernameChange} />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control onChange={onLocationChange} />
        </Form.Group>

      </Row>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
        </div>

    </div>
  )
}

export default Event