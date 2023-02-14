import React, {useState} from 'react';
import classes from './App.module.css';
import {Rating} from './components/Rating/Rating';
import {OnOffButton} from './components/OnOff/OnOff';
import {UncontrelledAccordion} from './components/Accordion/UncontrolledAccordion';


const App = () => {
    // полезное что - то
    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
    ]);
    let arrForAccordion = [1, 2, 3];

    const [msg, setMsg] = useState('');


    const addMessage = (title: string) => {
        const newMessage = {message: title};
        setMessage([newMessage, ...message])
    }

    const newMessageAdd = () => {
        addMessage(msg);
        setMsg('');
    }

    return (
        <div className={classes.App}>

            {/*<Accordion titleValue={'--Users--'} collapsed={true}/>*/}
            <Rating/>

            <OnOffButton/>

            <UncontrelledAccordion titleValue={'Menu'}/>

        </div>
    );
}

export default App;
