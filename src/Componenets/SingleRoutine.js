import React, { useState } from 'react'
import { deleteRoutine } from '../API/api'
import { updateRoutine } from '../API/api'

function SingleRoutine({ creatorId, name, creatorName, goal, userId, routId, key, token, myRout }) {
    const [edit, setEdit] = useState(false)
    const [newName, setNewName] = useState(name);
    const [newGoal, setNewGoal] = useState(goal);

    // console.log(myRout, 'MY ROUT')

    function handleNameChange(e) {
        setNewName(e.target.value)
        // console.log(newName)
    }

    function handleGoalChange(e) {
        setNewGoal(e.target.value)
        // console.log(newGoal)
    }

    function handleUpdateRout(e) {
        e.preventDefault()
        updateRoutine(routId, newName, newGoal, token)
        // console.log(routId, newName, newGoal)
        setEdit(prevState => !prevState)
    }

    const toggleEdit = (e) => {
        e.preventDefault()
        setEdit(prevState => !prevState)
        console.log(edit)
    }


    // let mappedRoutines = allRout.map((rout, key) => {
    //     return (
    //         <div className='routine'>
    //             <h3>#{key} {rout.name}</h3>
    //             <h4>Creator: {rout.creatorName}</h4>
    //             <h4>Goal: {rout.goal}</h4>
    //             UserId: {userId}
    //             CreatorId:{rout.creatorId}
    //             <div className='routButtons'>
    //                 <button>Modify Routine</button>
    //                 {rout.creatorId === userId ? <button onClick={() => {
    //                     deleteRoutine(rout.id, token)
    //                 }}>Delete Routine</button> : null}
    //                 {rout.creatorId === userId ? <button className='EDIT'>Edit</button> : null}
    //             </div>
    //         </div>
    //     )
    // })


    return (
        <div className='routine'>
            <h3>{key} {name}</h3>
            {edit ? <><h4>Name:</h4><input placeholder='Edit Name' defaultValue={name} onChange={handleNameChange}></input></> : null}
            {edit ? <><h4>Goal:</h4> <input id='editGoal' placeholder='Edit Goal' defaultValue={goal} onChange={handleGoalChange}></input></> : <h4>Goal: {goal}</h4>}
            {edit ? null : <h4>Creator: {creatorName}</h4>}
            {creatorId === userId ? <div className='routButtons'>
                <button className='EDIT' onClick={toggleEdit}>{edit ? 'Cancel Edit' : 'Modify Routine'}</button>

                {edit ? <button onClick={handleUpdateRout}>Submit Update</button> : <button onClick={() => {
                    deleteRoutine(routId, token)
                }}>Delete Routine</button>}

            </div> : null}
        </div>
    )
}

export default SingleRoutine