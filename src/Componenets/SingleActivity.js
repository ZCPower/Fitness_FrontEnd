import React, { useState } from 'react'
import { updateActivity } from '../API/api';

function SingleActivity({ description, actId, name, actNum, token }) {
    const [edit, setEdit] = useState(false);
    const [newName, setNewName] = useState(name);
    const [newDesc, setNewDesc] = useState(description);


    function handleNameChange(e) {
        setNewName(e.target.value)
    }

    function handleDescChange(e) {
        setNewDesc(e.target.value)
    }

    function handleUpdateAct(e) {
        e.preventDefault()
        console.log(actId, newName, newDesc)
        updateActivity(actId, newName, newDesc, token)
        setEdit(prevState => !prevState)
    }

    function toggleEdit() {
        setEdit(prevState => !prevState)
    }
    return (
        <div className='activity'>
            <h3>#{actNum} {name}</h3>
            {edit ? <input placeholder='Edit Name' defaultValue={name} onChange={handleNameChange}></input> : null}
            {edit ? <input placeholder='Edit Goal' defaultValue={description} onChange={handleDescChange}></input> : <h4>Description: {description}</h4>}

            <div id='actButtons'>
                <button className='EDIT' onClick={toggleEdit}>{edit ? 'Cancel Edit' : 'Modify Activity'}</button>

                {edit ? <button onClick={handleUpdateAct}>Submit Update</button> : null}
            </div>
        </div>

    )
}

export default SingleActivity