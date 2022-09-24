import React from 'react'
import '../Styles/Home.css'
import Login from './Login'
import Register from './Register'

function Home() {
    return (
        <div className='homeContainer'>
            {/* // if no token, display login and register. if token, display something else like routines. Or a message that says "HELLO ${USER}, WELCOME TO POWERFITNESS" */}
            {/* <Login />
            <Register /> */}
        </div>
    )
}

export default Home