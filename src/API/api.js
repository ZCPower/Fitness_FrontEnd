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
            // console.log(result)
            return result
        })
        .catch(console.error);
}

export async function login(username, password) {
    fetch(baseURL + '/users/login', {
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
            // console.log(result)
            return result
        })
        .catch(console.error);
}

export async function currentUser(token) {
    fetch(baseURL + '/users/me', {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer' + token
        },
    }).then(response => response.json())
        .then(result => {
            console.log(result);
        })
        .catch(console.error);
}