import React, {useState} from 'react';
import classes from './App.module.css';
import {Fullinput} from './components/Fullinput';

const App = () => {
    // полезное что - то
    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
    ]);

    return (
        <div className={classes.App}>
            <Fullinput/>
            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
);
}

export default App;
