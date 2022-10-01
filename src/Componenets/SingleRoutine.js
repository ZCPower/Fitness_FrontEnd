import React, { useState } from 'react'
import { deleteRoutine } from '../API/api'

function SingleRoutine({ creatorId, name, creatorName, goal, userId, routId, key, token }) {
    const [edit, setEdit] = useState(false)

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
            <h3>#{key} {name}</h3>
            {/* {edit ? <h4>Editting!</h4> : null} */}
            {/* <h4>Goal: {goal}</h4> */}
            {edit ? <input placeholder='Edit Name'></input> : null}
            {edit ? <input placeholder='Edit Goal'></input> : <h4>Goal: {goal}</h4>}
            {edit ? null : <h4>Creator: {creatorName}</h4>}
            {/* UserId: {userId} */}
            {/* CreatorId:{creatorId} */}
            <div className='routButtons'>
                {creatorId === userId ? <button onClick={() => {
                    deleteRoutine(routId, token)
                }}>Delete Routine</button> : null}
                {creatorId === userId ? <button className='EDIT' onClick={toggleEdit}>Modify Routine</button> : null}
            </div>
        </div>
    )
}

export default SingleRoutine