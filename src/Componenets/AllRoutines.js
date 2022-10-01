import React, { useEffect, useState } from 'react'
import { allRoutines, deleteRoutine } from '../API/api'
import '../Styles/AllRoutines.css'
import { currentUser } from '../API/api';
import SingleRoutine from './SingleRoutine';

function AllRoutines({ token }) {

    const [allRout, setAllRout] = useState([]);
    const [userId, setUserId] = useState('')

    useEffect(() => {
        async function fetchUser() {
            try {
                await currentUser(token)
                    .then((result) => {
                        setUserId(result.id)
                    });
            } catch (error) {
                console.error(error)
            }
        }
        fetchUser()
    }, [token])

    useEffect(() => {
        async function fetchRoutines() {
            try {
                await allRoutines()
                    .then((result) => {
                        // console.log(result)
                        setAllRout(result)
                    })
            } catch (error) {
                console.log(error)
            }
        }
        fetchRoutines();
    }, [token, setAllRout, allRout]
    )

    // console.log(userId, 'USER ID')


    let mappedRoutines = allRout.map((rout, key) => {
        return (
            <SingleRoutine key={key} creatorName={rout.creatorName} name={rout.name} goal={rout.goal} userId={userId} creatorId={rout.creatorId} routId={rout.id} token={token} />)
    })


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
        <div id='routineBody'>
            <h2>AllRoutines</h2>
            <div id='allRoutContainer'>
                {mappedRoutines}</div>
        </div>
    )
}

export default AllRoutines