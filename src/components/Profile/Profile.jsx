import React, {useEffect, useState} from 'react'
import User from '../../services/User';

export default function Dashboard() {
    const [profile, setProfile] = useState([])

    useEffect(() => {
        fetchProfile()
    }, [profile])

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