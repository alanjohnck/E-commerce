
import { useState } from 'react';
import './App.css';
import axios from 'axios';
import Home from './Home/Home';

function App() {
// const [formData,setformData]=useState(
//   {
//     email:'',
//     password:''}
//   )
  
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:8000/createUser', formData);
//       console.log(response.data);
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };
//   const handleChange = (e) => {
//     setformData({...formData, [e.target.name]: e.target.value});
//   };
  return (
    <div className="App" >
    {/* <form  onSubmit={handleSubmit}>
       <input type='text' name='email' value={formData.email} onChange={handleChange} placeholder='email' />
       <input type='text' name='password' value={formData.password} onChange={handleChange} placeholder='password' />
       <input type='submit' value='Submit' />
    </form> */}
    <Home/>
    </div>
  );
}

export default App;
