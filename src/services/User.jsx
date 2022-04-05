const getUsers = async () => {
    const requestOptions = {
        method: 'GET',
        headers: { 
            'Content-Type': 'application/json',
        },
        credentials: 'include',
    };
    try {
        const response = await fetch(process.env.REACT_APP_API_URL + '/users', requestOptions)
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
          }
        const json = await response.json();
        return json;
    } catch(err) {
        console.error(err);
    }
}

const getProfile = async () => {
    const requestOptions = {
        method: 'GET',
        headers: { 
            'Content-Type': 'application/json',
        },
        credentials: 'include'
    };
    try {
        const response = await fetch(process.env.REACT_APP_API_URL + '/users/profile', requestOptions)
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
          }
        const json = await response.json();
        return json;
    } catch(err) {
        console.error(err);
    }
}

export default {
    getUsers,
    getProfile
}