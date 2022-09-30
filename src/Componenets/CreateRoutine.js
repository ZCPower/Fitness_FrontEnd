import React, { useState } from 'react'
import '../Styles/CreateRoutine.css'

function CreateRoutine() {
    const [routName, setRoutName] = useState('');
    const [goal, setGoal] = useState('');
    const [isPublic, setIsPublic] = useState(false)

    const handlePublic = () => {
        setIsPublic(!isPublic)
    }

    const handleName = (e) => {
        setRoutName(e.target.value)
        console.log(routName)
    }

    const handleGoal = (e) => {
        setGoal(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(routName, goal, isPublic)
    }

    return (
        <div id='createRoutContainer'><h2>CreateRoutine</h2>
            {/* {isPublic ? <h2>Public!</h2> : <h2>Private!</h2>}
            {routName}
            {goal} */}
            <form id='createRoutine' onSubmit={handleSubmit}>
                <input placeholder='Routine Name' onChange={handleName}></input>
                <input placeholder='Routine Goal' onChange={handleGoal}></input>
                <div id='isPublic' className="switch_box box_1">
                    <label>Public Routine?</label><input type="checkbox" className="switch_1" onChange={handlePublic} />
                </div>
                <button>Create Routine</button>
            </form></div>
    )
}

export default CreateRoutine