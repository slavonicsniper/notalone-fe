const API_URL = 'https://notalone-be.herokuapp.com/api/v1';

const login = async (details) => {
    const requestOptions = {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
            email: details.email,
            password: details.password 
    })
    };
    let resData = await fetch(API_URL + '/users/login', requestOptions)
        .then(response => response.json())
        .then(async (result) => {
                return result;
            },
            (error) => {
                return error;
        });
    return resData;
}

const register = async (details) => {
    const requestOptions = {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
            username: details.username,
            email: details.email,
            password: details.password,
            age: details.age,
            city: details.city,
            country: details.country
    })
    };
    let resData = await fetch(API_URL + '/users/register', requestOptions)
        .then(response => response.json())
        .then(async (result) => {
                return result;
            },
            (error) => {
                return error;
        });
    return resData;
}

const verifyUser = async (code) => {
    const requestOptions = {
        method: 'GET',
        headers: { 
            'Content-Type': 'application/json',
        },
    };
    let resData = await fetch(API_URL + '/users/confirm/' + code, requestOptions)
        .then(response => {
            if (response.status >= 200 && response.status <= 299) {
                return response.json();
            } else {
                throw Error(response.statusText);
            }
        })
        .then(async (result) => {
                return result;
            },
            (error) => {
                return error;
        });
    return resData;
};


export default {
  login,
  register,
  verifyUser
}
