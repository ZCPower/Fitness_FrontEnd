import React from 'react'

function Welcome({ user }) {
    return (
        <div className='welcomeContainer'>
            <h2>Welcome, {user}.</h2>
        </div>
    )
}

export default Welcome