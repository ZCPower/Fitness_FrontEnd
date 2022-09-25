import React, { useEffect } from 'react'
import { myRoutines } from '../API/api'
import '../Styles/MyRoutines.css'

function MyRoutines({ user, myRout, setMyRout }) {
    useEffect(() => {
        async function fetchMyRoutines() {
            try {
                await myRoutines(user)
                    .then((result) => {
                        setMyRout(result)
                    })
            } catch (error) {
                console.log(error)
            }
        }
        fetchMyRoutines()
    }, [user, setMyRout])

    let mappedMyRout = myRout.map((rout, key) => {
        return (
            <div className='myRout'>
                <h3>My Routine #{key + 1}</h3>
                <p>{rout}</p>
            </div>
        )
    })

    // let noRoutines = () => {
    //     return (
    //         <h3>You don't have any routines yet!</h3>
    //     )
    // }
    return (
        <div id='myRoutContainer'><h2>My Routines</h2>
            {myRout.length === 0 ? <h3>You don't have any routines yet!</h3> : mappedMyRout}</div>

    )
}

export default MyRoutines