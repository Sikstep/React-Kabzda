import React, {useState} from 'react';
import classes from './App.module.css';
import {Fullinput} from './components/Fullinput';
import {Button} from './components/Button';
import {Input} from './components/Input';
import Accordion from './components/Accordion';


const App = () => {
    // полезное что - то
    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
    ]);
    let arrForAccordion = [1,2,3];

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
            {/*<Fullinput buttomName={'+'} buttomClick={addMessage}/>*/}
            {/*<Input msg={msg} setMsg={setMsg}/>*/}
            {/*<Button name={'+'} callBack={newMessageAdd}/>*/}
            {/*{message.map((el, index) => {*/}
            {/*    return (*/}
            {/*        <div key={index}>{el.message}</div>*/}
            {/*    )*/}
            {/*})}*/}
            <Accordion titleValue={'--Menu--'} body={arrForAccordion} collapsed={false}/>
            <Accordion titleValue={'--Users--'} body={arrForAccordion} collapsed={false}/>
        </div>
    );
}

export default App;
