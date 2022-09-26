import React from 'react'
import { Link } from 'react-router-dom'

// This should house all of the links to create/view activities/routines
function TrackExercise() {
    return (
        <div>
            <h2>Track Your Exercise!</h2>
            <ul>
                <li><Link to='/AllActivities'>View All Activities</Link></li>
                <li>View All Routines</li>
                <li><Link to='/activities/create'>Create New Activity</Link></li>
                <li>Create New Routine</li>
            </ul>
        </div>
    )
}

export default TrackExercise