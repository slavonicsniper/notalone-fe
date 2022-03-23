import React, {useState, useEffect} from 'react'
import AuthService from '../../services/AuthService';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import './Confirmation.css'

function Confirmation() {

    let params = useParams();
    const [message, setMessage] = useState("");
    console.log(params.confirmationCode);

    useEffect(() => {
        setMessage("");

        AuthService.verifyUser(params.confirmationCode).then((response) => {
        if(response.hasOwnProperty('message')){
            setMessage(response.message);
        } else {
            setMessage(response.error);
        }
        });
    }, []);

    return (
        <div className='main-login'>
            <div className='main-box'>
            {message.length > 0 &&
                <div className={'alert big'}>
                {message}
                <br/>
                You can <Link to="/">log in</Link> now
                </div>
            }
          </div>
        </div>
    )
}

export default Confirmation;
