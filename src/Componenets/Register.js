import React, { useState, useEffect } from 'react'
import { register } from '../API/api';
import '../Styles/Register.css'
import { Link } from 'react-router-dom'

function Register() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState('Create an Account!')


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
                .then(result => {
                    console.log(result)
                    if (result.error === 'A user by that username already exists') {
                        console.log('fuck')
                        setMessage('A user by that username already exists');
                    } else {
                        setMessage(`${result.user.username} successfully registered, proceed to login page.`)
                    }
                })
        } else {
            setMessage('Passwords do not match.')
        }
    }
    return (
        <div className='registerContainer'>
            <img className='loginPhoto' src='https://media1.popsugar-assets.com/files/thumbor/ZoeVePhf_2hWf_cvx-Sy264TR0Q/837x0:4965x4128/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2021/10/08/786/n/1922729/ba9bad7761608571dc3c46.84091087_/i/runners-favorite-running-shoes.jpg'></img>
            <form onSubmit={handleSubmit}>
                <h2>{message}</h2>
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