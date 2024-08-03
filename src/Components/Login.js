import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React,{useState} from 'react';
import  Axios  from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [data,setData] = useState()

    const onUsernameChange = (event) =>{
        
        setUsername(event.target.value)
    }
    const onPasswordChange = (event) =>{
        
        setPassword(event.target.value)
    }

    const navigate = useNavigate();

    const submitForm = async(e) =>{
        e.preventDefault()
          var postData = {
            username:username,
            password:password
          };
          
          let axiosConfig = {
            headers: {
                'Content-Type': 'application/json'
            }
          };
          
          const response = await Axios.post('http://localhost:3000/login/', postData, axiosConfig)
        //   .then((res) => {

        //     console.log("RESPONSE RECEIVED: ", res);
        //   })
        //   .catch((err) => {
        //     console.log("AXIOS ERROR: ", err);
        //   })
          setData(response.data);
          navigate('/event');
    }
    console.log(data)


  return (
    <Form onSubmit={submitForm}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="text" placeholder="Enter email" onChange={onUsernameChange}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={onPasswordChange} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Login;