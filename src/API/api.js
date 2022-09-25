const baseURL = `https://fitnesstrac-kr.herokuapp.com/api`;

export async function register(username, password) {
    fetch(`${baseURL}/users/register`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
    }).then(response => response.json())
        .then(result => {
            console.log(result)
            return result
        })
        .catch(console.error);
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


export async function myRoutines(user) {
    const url = `${baseURL}/users/${user}/routines`;

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