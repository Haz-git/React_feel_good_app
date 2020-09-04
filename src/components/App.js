import React, { useState } from 'react';
import Button from './Button';
import Message from './Message';
import axios from 'axios';


const App = () => {

    const [ compliment, setCompliment ] = useState('');

    const apiRequest = () => {
        const request = async () => {
            const response = await axios.get('https://complimentr.com/api');
            console.log(response);

            setCompliment(response.data.compliment);
        }

        request();
    }

    return (
        <div>
            <Button apiRequest={apiRequest} />
            <Message compliment={compliment}/>
        </div>
    )
}

export default App;