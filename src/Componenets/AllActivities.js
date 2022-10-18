import React, { useEffect, useState } from 'react'
import { allActivities, myRoutines } from '../API/api'
import '../Styles/AllActivities.css'
import SingleActivity from './SingleActivity';


function AllActivities({ allActs, setAllActs, token, user }) {
    const [myRout, setMyRout] = useState([]);

    useEffect(() => {
        async function fetchActivities() {
            try {
                await allActivities()
                    .then((result) => {
                        setAllActs(result)
                    })
            } catch (error) {
                console.log(error)
            }
        }
        fetchActivities();
    }, [allActs, setAllActs]
    )

    useEffect(() => {
        async function fetchMyRoutines() {
            try {
                await myRoutines(user)
                    .then((result) => {
                        // console.log(result)
                        setMyRout(result)
                    })
            } catch (error) {
                console.log(error)
            }
        }
        fetchMyRoutines()
    }, [myRout])


    // let mappedActivities = allActs.map((act, key) => {
    //     return (
    //         <div key={key} className='activity'>
    //             <h3>#{key + 1} {act.name}</h3>
    //             <div className='actInfo'>
    //                 <h4>{act.description}</h4>
    //             </div>
    //             <div className='actButtons'><button>Edit</button><button>Add to Routine</button><button>Remove</button></div>
    //         </div>
    //     )
    // })

    let mappedActivities = allActs.map((act, key) => {
        return (
            <SingleActivity actId={act.id} description={act.description} name={act.name} actNum={key} token={token} myRout={myRout} />
        )
    })
    return (
        <div id='activityBody'>
            <h2>All Activities</h2>
            <div id='allActContainer'>
                {mappedActivities}</div>
        </div>
    )
}

export default AllActivities