import React, {useState} from 'react';
import classes from './App.module.css';
import {Fullinput} from './components/Fullinput';

type MainMessage = {
    message: string
}

const App = () => {
    // полезное что - то
    let [message, setMessage] = useState<Array<MainMessage>>([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
    ]);

    const addMessage = (title: string) => {
        let newMessage = {message: title};
        setMessage([newMessage, ...message])
    }


    return (
        <div className={classes.App}>
            <Fullinput addMessage={addMessage}/>
            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
);
}

export default App;
