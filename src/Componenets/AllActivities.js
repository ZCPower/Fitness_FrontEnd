import React, { useEffect } from 'react'
import { allActivities } from '../API/api'
import '../Styles/AllActivities.css'


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
            <div key={key} className='activity'>
                <h3>#{key + 1} {act.name}</h3>
                <div className='actInfo'>
                    <h4>{act.description}</h4>
                </div>
                <div className='actButtons'><button>Edit</button><button>Add to Routine</button><button>Remove</button></div>
            </div>
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