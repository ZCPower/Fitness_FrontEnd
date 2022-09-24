import React, { useState, useEffect } from 'react'
import { register } from '../API/api';
import '../Styles/Register.css'
import { Link } from 'react-router-dom'

function Register() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('')


    const handleUsernameChange = (e) => {
        e.preventDefault();
        setUsername(e.target.value)
        console.log(username)
    }

    const handlePasswordChange = (e) => {
        e.preventDefault();

        setPassword(e.target.value)
        console.log(password)
    }

    const handleConfirmPasswordChange = (e) => {
        e.preventDefault();
        setConfirmPassword(e.target.value)
        console.log(confirmPassword)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === confirmPassword) {
            console.log(username, password)
            register(username, password)
        }

    }
    return (
        <div className='registerContainer'>
            <form onSubmit={handleSubmit}>
                <h2>Create an account!</h2>
                <input placeholder='Username' onChange={handleUsernameChange}></input>
                <input placeholder='Password' type='password' onChange={handlePasswordChange} minLength={8}></input>
                <input placeholder='Confirm Password' onChange={handleConfirmPasswordChange} type='password'></input>
                <button>Register!</button>
                <p>Already have an account? Log in <Link to='/login'>here!</Link></p>
            </form>
        </div>
    )
}

export default Register