import React, {useState} from 'react'
import AuthService from '../../services/AuthService';
import './Confirmation.css'

const Confirmation = (props) => {

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [color, setColor] = useState("");

    setMessage("");
    setLoading(true);

    AuthService.verifyUser(props.confirmationCode).then((response) => {
    if(response.hasOwnProperty('message')){
        setMessage(response.message);
        setColor('green');
    } else {
        setMessage(response.error);
        setColor('red');
    }
    });
    setLoading(false);

    return (
        <div className='main-login'>
            {message.length > 0 &&
            <div className={'alert ' + color}>
              {message}
            </div>
          }
        </div>
    )
}

export default Confirmation;
