import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/TrackExercise.css'

// This should house all of the links to create/view activities/routines
function TrackExercise() {
    return (
        <div id='trackContainer'>
            <h2>Track Your Exercise!</h2>
            <ul>
                <li><Link to='/AllActivities'>View All Activities</Link></li>
                <li><Link to='/AllRoutines'>View All Routines</Link></li>
                <li><Link to='/activities/create'>Create New Activity</Link></li>
                <li><Link to='/routines/create'>Create New Routine</Link></li>
            </ul>
        </div>
    )
}

export default TrackExercise