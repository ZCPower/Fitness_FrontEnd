import React, { useState } from 'react';
import { createActivity } from '../API/api';

function CreateActivity({ token }) {
    const [actName, setActName] = useState('');
    const [desc, setDesc] = useState('');


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
    }


    return (
        <div id='createActivityContainer'>
            <h2>Create New Activity!</h2>
            <form onSubmit={handleActSubmit} id='createActForm'>
                <input onChange={handleNameChange} placeholder='Activity Name'></input>
                <input onChange={handleDescription} placeholder='Description'></input>
                <button>Create Activity</button>
            </form>
        </div>
    )
}

export default CreateActivity