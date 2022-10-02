import React from 'react'
import '../Styles/Welcome.css'

function Welcome({ user }) {
    return (
        <div id='welcomeContainer'>
            <h2>Welcome, {user}.</h2>
            <h4>Plan your next exercise regimen. Create workout routines and attach activities to them.</h4>
        </div>
    )
}

export default Welcome