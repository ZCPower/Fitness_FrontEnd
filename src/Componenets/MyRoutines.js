import React, { useEffect, useState } from 'react'
import { myRoutines, currentUser } from '../API/api'
import '../Styles/MyRoutines.css'

function MyRoutines({ token, user, setUser }) {
    const [myRout, setMyRout] = useState([]);
    // const [userId, setUserId] = useState('')

    useEffect(() => {
        async function fetchUser() {
            try {
                await currentUser(token)
                    .then((result) => {
                        console.log(result.username)
                        setUser(result.username)
                    });
            } catch (error) {
                console.error(error)
            }
        }
        fetchUser()
    }, [token])


    useEffect(() => {
        async function fetchMyRoutines() {
            try {
                await myRoutines(user)
                    .then((result) => {
                        console.log(result)
                        setMyRout(result)
                    })
            } catch (error) {
                console.log(error)
            }
        }
        fetchMyRoutines()
    }, [setMyRout])

    let mappedMyRout = myRout.map((rout, key) => {
        console.log(rout.name, rout.goal)
        return (
            <>
                <h2>My Routine #{key + 1}</h2>
                <h4>Name: {rout.name}</h4>
                <h4>Goal: {rout.goal}</h4>
                <h4>isPublic: {rout.isPublic}</h4>
            </>
        )
    })

    console.log(mappedMyRout)

    // console.log(myRout, 'my rout')
    // let noRoutines = () => {
    //     return (
    //         <h3>You don't have any routines yet!</h3>
    //     )
    // }
    return (
        <div id='myRoutContainer'><h2>My Routines</h2>
            {myRout.length === 0 ? <h3>You don't have any routines yet!</h3> : mappedMyRout}
        </div>

    )
}

export default MyRoutines