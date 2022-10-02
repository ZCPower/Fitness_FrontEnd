import React, { useState } from 'react';
import { createActivity } from '../API/api';
import '../Styles/CreateRoutine.css'

function CreateActivity({ token }) {
    const [actName, setActName] = useState('');
    const [desc, setDesc] = useState('');
    const [heading, setHeading] = useState('Create New Activity!')


    function handleNameChange(e) {
        e.preventDefault();
        // console.log(e.target.value)
        setActName(e.target.value)
    }

    function handleDescription(e) {
        e.preventDefault();
        setDesc(e.target.value)
    }

    function handleActSubmit(e) {
        e.preventDefault();
        console.log(actName, desc)
        createActivity(actName, desc, token)
            .then(result => {
                if (result.message) setHeading('An activity with this name already exists.')
                else setHeading(`Activity, ${actName}, successfully created!`)
            })
    }


    return (
        <div id='createActivityContainer'>
            <h2>{heading}</h2>
            <form onSubmit={handleActSubmit} id='createActForm'>
                <input onChange={handleNameChange} placeholder='Activity Name'></input>
                <input onChange={handleDescription} placeholder='Description'></input>
                <button>Create Activity</button>
            </form>
        </div>
    )
}

export default CreateActivity