import React, { useState } from 'react';
import axios from 'axios';
import "./register.css";
import { useNavigate } from 'react-router-dom';

function Register() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const history = useNavigate();

    const signup = () => {
        axios.post('http://localhost:8000/signup', {
            username: firstName,
            lastName: lastName,
            email: email,
            password: password,
            confirmPassword: confirmPassword
        })
        .then(response => { 
            const { token, username } = response.data;
            console.log(response.data);
            localStorage.setItem('token', token);
            localStorage.setItem('username', username);
            history('/');
        })
        .catch((err) => {
            console.log(err);
        });
    }

    return (
        <div>
            <div className='register-container'>
                <div className='register-image'>
                    <h1>Register</h1>
                    <img src="/images/boywithcart.png" alt="Register Image" />
                </div>
                <div className='register-main'>
                    <form className='register-form' onSubmit={e => e.preventDefault()}>
                        <input type='text' placeholder='First Name' onChange={e => setFirstName(e.target.value)} />
                        <input type='text' placeholder='Last Name' onChange={e => setLastName(e.target.value)} />
                        <input type='email' placeholder='Email' onChange={e => setEmail(e.target.value)} />
                        <input type='password' placeholder='Password' onChange={e => setPassword(e.target.value)} />
                        <input type='password' placeholder='Confirm Password' onChange={e => setConfirmPassword(e.target.value)} />
                        <button onClick={signup}>Register</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;
