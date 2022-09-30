import React, { useEffect, useState } from 'react'
import { allRoutines, deleteRoutine } from '../API/api'
import '../Styles/AllRoutines.css'

function AllRoutines() {

    const [allRout, setAllRout] = useState([]);

    useEffect(() => {
        async function fetchRoutines() {
            try {
                await allRoutines()
                    .then((result) => {
                        console.log(result)
                        setAllRout(result)
                    })
            } catch (error) {
                console.log(error)
            }
        }
        fetchRoutines();
    }, [setAllRout]
    )

    let mappedRoutines = allRout.map((rout, key) => {
        return (
            <div className='routine'>
                <h3>#{key} {rout.name}</h3>
                <h4>Creator: {rout.creatorName}</h4>
                <h4>Goal: {rout.goal}</h4>
                <div className='routButtons'>
                    <button>Modify Routine</button>
                    <button>Delete Routine</button>
                </div>
            </div>
        )
    })
    return (
        <div id='routineBody'>
            <h2>AllRoutines</h2>
            <div id='allRoutContainer'>
                {mappedRoutines}</div>
        </div>
    )
}

export default AllRoutines