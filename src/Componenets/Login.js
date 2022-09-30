import React, { useState } from 'react'
import { login } from '../API/api'
import { Link } from 'react-router-dom'

function Login({ token, setToken, setUserId, userId }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const handleUsernameChange = async (e) => {
        e.preventDefault();
        setUsername(e.target.value)
        console.log(e.target.value)
    }

    const handlePasswordChange = async (e) => {
        e.preventDefault();
        setPassword(e.target.value)
    }

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        console.log(username, password)
        try {
            await login(username, password).then((results) => {
                console.log(results.message)
                console.log(results.user.id)
                // setUserId(results.user.id)
                setToken(results.token)
                localStorage.setItem("jwt", results.token);
            });
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='loginContainer'>
            <img className='loginPhoto' src='https://media1.popsugar-assets.com/files/thumbor/ZoeVePhf_2hWf_cvx-Sy264TR0Q/837x0:4965x4128/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2021/10/08/786/n/1922729/ba9bad7761608571dc3c46.84091087_/i/runners-favorite-running-shoes.jpg'></img>
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