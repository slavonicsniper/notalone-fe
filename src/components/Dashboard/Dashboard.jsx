import React, {useEffect, useState} from 'react'
import User from '../../services/User';

export default function Dashboard() {
    const [users, setUsers] = useState([])
    const [profile, setProfile] = useState([])

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await User.getUsers()
                setUsers(response.data)
            } catch(err) {
                console.log(err)
            }
        }
        fetchData()
    }, [])

    const fetchProfile = async() => {
        try {
            const response = await User.getProfile()
            setProfile(response.data)
        } catch(err) {
            console.log(err)
        }
    }

    return (
        <div>
            {users.map(user => {
                return (
                    <div key={user.uuid}>
                        <p>{user.username}</p>
                        <p>{user.city}</p>
                        <p>{user.country}</p>
                        <p>{user.age}</p>
                    </div>
                )
            })}
        </div>
    )
}