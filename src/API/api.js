const baseURL = `https://fitnesstrac-kr.herokuapp.com/api`;

export async function register(username, password) {
    const url = `${baseURL}/users/register`
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
        const data = response.json()
        return data
    } catch (error) {
        console.log(error)
    }
}

export async function login(username, password) {
    const url = `${baseURL}/users/login`;

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: username,
                password: password,
            }),
        });
        const data = response.json();
        // console.log(data);
        return data;
    } catch (error) {
        console.error(error);
    }
}


export async function currentUser(token) {
    const url = `${baseURL}/users/me`;

    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                'Authorization': 'Bearer ' + token
            }
        });
        const data = response.json();
        // console.log(data);
        return data;
    } catch (error) {
        console.error(error);
    }
}


export async function myRoutines(username) {
    const url = `${baseURL}/users/${username}/routines`;
    // console.log(url)
    try {
        const response = await fetch(url, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = response.json();
        // console.log(data);
        return data;
    } catch (error) {
        console.error(error);
    }
}

export async function allActivities() {
    const url = `${baseURL}/activities`

    try {
        const response = await fetch(url, {
            headers: {
                "Content-Type": "application/json",
            }
        })
        const data = response.json();
        // console.log(data)
        return data
    } catch (error) {
        console.log(error)
    }
}


export async function createActivity(name, description, token) {
    const url = `${baseURL}/activities`
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify({
                name: name,
                description: description
            })
        });
        const data = response.json();
        return data;
    } catch (error) {
        console.log(error)
    }
}

export async function deleteRoutine(id, token) {
    const url = `${baseURL}/routines/${id}`
    try {
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        })
        const data = response.json();
        console.log('deleted routine', data)
        return data
    } catch (error) {
        console.log(error)
    }
}

export async function allRoutines() {
    const url = `${baseURL}/routines`;
    try {
        const response = await fetch(url, {
            headers: {
                'Content-Type': 'application/json',
            }
        })
        const data = response.json()
        // console.log(data);
        return data
    } catch (error) {
        console.log(error)
    }
}

export async function createRoutine(token, name, goal, isPublic) {
    const url = `${baseURL}/routines`;
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify({
                name: name,
                goal: goal,
                isPublic: isPublic
            })
        })
        const data = response.json()
        console.log(data);
        return data
    } catch (error) {
        console.log(error)
    }
}

export async function updateRoutine(id, name, goal, token) {
    const url = `${baseURL}/routines/${id}`;
    try {
        const response = fetch(url, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify({
                name: name,
                goal: goal
            })
        })
        const data = response.json();
        console.log('updated routine:', data)
        return data
    } catch (error) {
        console.log(error)
    }
}

export async function updateActivity(id, name, description, token) {
    const url = `${baseURL}/activities/${id}`;

    try {
        const response = await fetch(url, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify({
                name: name,
                description: description
            })
        })
        const data = response.json();
        console.log(data)
        return data;
    } catch (error) {
        console.log(error)
    }
}

//LAST ONE TESTED ^^^

//get routines associated with routine.
export async function getActivityRoutines(id) {
    const url = `${baseURL}/activities/${id}/routines`

    try {
        const response = await fetch(url, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
        const data = response.json()
        console.log(data)
        return data
    } catch (error) {
        console.log(error)
    }

}

export async function attachRoutine(routId, activityId, count, duration) {
    console.log(activityId, 'in the api')
    const url = `${baseURL}/routines/${routId}/activities`;
    try {
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                activityId: activityId,
                count: 1,
                duration: 20
            })
        })
        const data = response.json();
        console.log('attaching act to rout', data)
        return data
    } catch (error) {
        console.log(error)
    }
}

export async function updateRoutAct(id, count, duration) {
    const url = `${baseURL}/routines/${id}/activities`;
    try {
        const response = await fetch(url, {
            method: "PATCH",
            body: JSON.stringify({
                count: count,
                duration: duration
            })
        })
        const data = response.json();
        console.log('updating routine activity', data)
        return data
    } catch (error) {
        console.log(error)
    }
}

export async function deleteRoutAct(id, token) {
    const url = `${baseURL}/routine_activities/${id}`
    try {
        const response = await fetch(url, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        })
        const data = response.json();
        console.log('deleting routAct', data)
        return data
    } catch (error) {
        console.log(error)
    }
}