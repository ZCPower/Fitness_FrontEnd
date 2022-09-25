import React from 'react'
import '../Styles/Nav.css'
import { Link } from 'react-router-dom'

function Nav({ token }) {
    return (
        <div className='navContainer'>
            <nav>
                <div className='logo'>
                    <Link className='navLinks' to='/'>
                        <h1>POWER</h1>
                        <img src='https://img.icons8.com/officel/2x/shutdown.png' alt=''></img>
                    </Link>
                </div>
                <ul className='links'>
                    {!token ? <li><Link className='navLinks' to='/login'>Login</Link></li> : null}
                    {!token ? <li><Link className='navLinks' to='/register'>Register</Link></li> : null}
                    {token ? <li><Link className='navLinks' to='/AllActivities'>Track Exercise</Link></li> : null}
                    {token ? <li><Link className='navLinks' to='/account'>Account</Link></li> : null}
                </ul>
            </nav>
        </div>
    )
}

export default Nav