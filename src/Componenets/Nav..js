import React from 'react'
import '../Styles/Nav.css'
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <div className='navContainer'>
            <nav>
                <div className='logo'>
                    <h1>POWER</h1>
                    <img src='https://img.icons8.com/officel/2x/shutdown.png' alt=''></img>
                </div>
                <ul className='links'>
                    <li><Link to='/login'>Login</Link></li>
                    <li><Link to='/register'>Register</Link></li>
                    <li>Track Exercise</li>
                    <li>Account</li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav