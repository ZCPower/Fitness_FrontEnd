import React, { useState } from 'react'
import { updateActivity, attachRoutine } from '../API/api';

function SingleActivity({ description, actId, name, actNum, token, myRout }) {
    const [edit, setEdit] = useState(false);
    const [attach, setAttach] = useState(false)
    const [newName, setNewName] = useState(name);
    const [newDesc, setNewDesc] = useState(description);
    const [attachingTo, setAttachingTo] = useState(null);


    function handleNameChange(e) {
        setNewName(e.target.value)
    }

    function handleDescChange(e) {
        setNewDesc(e.target.value)
    }

    function handleUpdateAct(e) {
        e.preventDefault()
        // console.log(actId, newName, newDesc)
        updateActivity(actId, newName, newDesc, token)
            .then((result) => {
                if (result.error === 'duplicate key value violates unique constraint "activities_name_key"') alert('An activity with that name already exists. Please try a different name.')
            })
        setEdit(prevState => !prevState)
    }

    function toggleEdit() {
        setEdit(prevState => !prevState)
    }

    function toggleAttach() {
        setAttach(prevState => !prevState)
    }

    function handleRoutChange(e) {
        console.log(e.target.value)
        setAttachingTo(e.target.value)
    }

    function handleAttachment() {
        attachRoutine(attachingTo, actId)
        console.log(attachingTo)
        console.log(actId)
    }

    let mappedRouts = myRout.map((rout, key) => {
        return (
            <option value={rout.id}>{rout.name}</option>
        )
    })

    // let mappedActivities = allActs.map((act, key) => {
    // //     return (
    // //         <div key={key} className='activity'>
    // //             <h3>#{key + 1} {act.name}</h3>
    // //             <div className='actInfo'>
    // //                 <h4>{act.description}</h4>
    // //             </div>
    // //             <div className='actButtons'><button>Edit</button><button>Add to Routine</button><button>Remove</button></div>
    // //         </div>
    // //     )
    // // })

    return (
        <div className='activity'>
            <h3>#{actNum} {name}</h3>
            {edit ? <input placeholder='Edit Name' defaultValue={name} onChange={handleNameChange}></input> : null}
            {edit ? <input placeholder='Edit Goal' defaultValue={description} onChange={handleDescChange}></input> : <h4>Description: {description}</h4>}
            {attach ? <select onChange={handleRoutChange}>{mappedRouts}</select> : null}
            {/* {attach ? <div>
                <input placeholder='count'></input> <input placeholder='duration'></input>
            </div> : null} */}
            <div id='actButtons'>
                {!attach ? <button className='EDIT' onClick={toggleEdit}>{edit ? 'Cancel Edit' : 'Modify Activity'}</button> : null}
                {!edit ? <button onClick={toggleAttach} className='attach'>{attach ? 'Cancel Attachment' : 'Attach to Routine'}</button> : null}
                {edit ? <button onClick={handleUpdateAct}>Submit Update</button> : null}
                {attach ? <button onClick={handleAttachment}>Submit Attachment</button> : null}
            </div>
        </div >

    )
}

export default SingleActivity