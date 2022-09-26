import React, { useEffect } from 'react'
import { allActivities } from '../API/api'


function AllActivities({ allActs, setAllActs }) {


    useEffect(() => {
        async function fetchActivities() {
            try {
                await allActivities()
                    .then((result) => {
                        console.log(result)
                        setAllActs(result)
                    })
            } catch (error) {
                console.log(error)
            }
        }
        fetchActivities();
    }, [setAllActs]
    )
    let mappedActivities = allActs.map((act, key) => {
        return (
            <div className='activity'>
                <h3>Activity #{key + 1}</h3>
            </div>
        )
    })
    return (
        <div id='allActivitiesList'><h2>AllActivities</h2>
            {mappedActivities}</div>
    )
}

export default AllActivities