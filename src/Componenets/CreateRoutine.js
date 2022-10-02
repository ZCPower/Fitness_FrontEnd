import React, { useState, useEffect } from 'react'
import '../Styles/CreateRoutine.css'
import { createRoutine } from '../API/api';
import { currentUser } from '../API/api';

function CreateRoutine({ token }) {
    const [routName, setRoutName] = useState('');
    const [goal, setGoal] = useState('');
    const [isPublic, setIsPublic] = useState(true)
    const [heading, setHeading] = useState('Create New Routine!')


    const handlePublic = () => {
        setIsPublic(!isPublic)
    }

    const handleName = (e) => {
        setRoutName(e.target.value)
    }

    const handleGoal = (e) => {
        setGoal(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(routName, goal, isPublic)
        createRoutine(token, routName, goal, isPublic)
            .then(result => {
                // console.log('RESULT', result)
                // console.log(result.message)
                if (result.message === 'duplicate key value violates unique constraint "routines_name_key"') setHeading('A routine with that name already exists!')
                if (!result.message) setHeading(`${routName} created.`)
                setTimeout(() => {
                    setHeading('Create New Routine!')
                }, 2500)
            })
    }

    return (
        <div id='createRoutContainer'><h2>{heading}</h2>
            {/* {isPublic ? <h2>Public!</h2> : <h2>Private!</h2>}
            {routName}
            {goal} */}
            <form id='createRoutine' onSubmit={handleSubmit}>
                <input placeholder='Routine Name' onChange={handleName}></input>
                <input placeholder='Routine Goal' onChange={handleGoal}></input>
                {/* <div id='isPublic' className="switch_box box_1">
                    <label>Public Routine?</label><input type="checkbox" className="switch_1" onChange={handlePublic} />
                </div> */}
                <button>Create Routine</button>
            </form></div>
    )
}

export default CreateRoutine