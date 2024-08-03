import Axios from'axios';
import React,{useState,useEffect} from 'react';
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import './App.css';
import Register from './Components/Register';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Components/Login';
import NotFound from './Components/NotFound';
import Event from './Components/Event';

function App() {

  const [data,setData] = useState('');
  const getData = async() =>{
    const response = await Axios.get("http://localhost:3000/session/")
    setData(response.data)
  }

  useEffect(()=>{
    getData()
  },[]);

  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Login/>} />
    <Route exact path="/register" element={<Register/>} />
    <Route exact path="/event" element={<Event/>} />
    <Route path="/notfound" element={<NotFound/>} />
  </Routes>
  </BrowserRouter>
  );
}

export default App;
