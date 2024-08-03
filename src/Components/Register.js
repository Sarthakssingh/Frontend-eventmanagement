import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Axios from 'axios'
import { useNavigate } from 'react-router-dom';


function Register() {

    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [location,setLocation] = useState('')
    const [gender,setGender] = useState('')
    const [data,setdata] = useState()

    const onUsernameChange = (event) =>{
        
        setUsername(event.target.value)
    }
    const onPasswordChange = (event) =>{
        
        setPassword(event.target.value)
    }
    const onLocationChange = (event) =>{
        
        setLocation(event.target.value)
    }
    const onGenderChange = (event) =>{
        setGender(event.target.value)
    }
    const navigate = useNavigate();


    const submitRegister = async(e) => {
        e.preventDefault()
        var postData = {
            username:username,
            password:password,
            location:location,
            gender:gender
          };
          
          let axiosConfig = {
            headers: {
                'Content-Type': 'application/json'
            }
          };
          
          const response = await Axios.post('http://localhost:3000/register/', postData, axiosConfig)
          setdata(response.data);
          navigate('/');
          
    }
    console.log(data);


  return (
    <Form onSubmit={submitRegister}>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="text" placeholder="Enter email" onChange={onUsernameChange} />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={onPasswordChange}/>
        </Form.Group>
      </Row>


      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control onChange={onLocationChange} />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Gender</Form.Label>
          <Form.Select defaultValue="Choose..." onChange={onGenderChange}>
            <option>Choose...</option>
            <option>Male</option>
            <option>Female</option>
            <option>Others</option>
          </Form.Select>
        </Form.Group>
      </Row>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Register;