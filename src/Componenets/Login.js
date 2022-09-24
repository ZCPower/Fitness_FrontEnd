import React, { useState } from 'react'
import { login } from '../API/api'
import { Link } from 'react-router-dom'

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // const [confirmPassword, setConfirmPassword] = useState('');

    const handleUsernameChange = (e) => {
        e.preventDefault();
        setUsername(e.target.value)
        console.log(username)
    }

    const handlePasswordChange = (e) => {
        e.preventDefault();
        setPassword(e.target.value)
    }

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        login(username, password)
        console.log(username, 'username', password, 'password')
    }

    return (
        <div className='loginContainer'>
            <form className='login' onSubmit={handleLoginSubmit}><h2>Login to your account!</h2>
                <input placeholder='Username' onChange={handleUsernameChange}></input>
                <input placeholder='Password' type='password' onChange={handlePasswordChange}></input>
                <button>Login!</button>
                <p>Don't have an account? Create one <Link to='/register'>here!</Link></p>
            </form>
        </div>
    )
}

export default Login