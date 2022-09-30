import React, { useState, useEffect } from 'react'
import { currentUser } from '../API/api';
import '../Styles/Account.css'
import { Link } from 'react-router-dom';

function Account({ token, setToken, user, setUser }) {
    function logOut() {
        setToken('')
        localStorage.clear()
    }

    useEffect(() => {
        async function fetchUser() {
            try {
                await currentUser(token)
                    .then((result) => {
                        setUser(result.username)
                    });
            } catch (error) {
                console.error(error)
            }
        }
        fetchUser()
    }, [token])

    console.log(token)
    console.log(user)

    return (
        <div id='accountContainer'>
            <h2>{user}'s Account</h2>
            <h4>View Your Routines:</h4> <p><Link to='/account/routines'>My Routines</Link></p>
            <button onClick={logOut}>Log Out</button>
        </div>
    )
}

export default Account