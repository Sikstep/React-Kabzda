import React, {useState} from 'react';
import classes from './App.module.css';
import {Fullinput} from './components/Fullinput';
import {Button} from './components/Button';
import {Input} from './components/Input';
import Accordion from './components/Accordion/Accordion';
import {Rating} from './components/Rating/Rating';
import { OnOffButton } from './components/OnOff/OnOff';
import {UncontrelledAccordion} from './components/Accordion/UncontrolledAccordion';



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
            {/*<Accordion titleValue={'--Menu--'} collapsed={true}/>*/}
            {/*<Accordion titleValue={'--Users--'} collapsed={true}/>*/}
            {/*<Rating value={0}/>*/}
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}
            <OnOffButton />
            <OnOffButton />
            <OnOffButton />
            <OnOffButton />
            {/*<OnOffButton />*/}
            {/*<OnOffButton />*/}
            <UncontrelledAccordion titleValue={'Menu'}/>

        </div>
    );
}

export default App;
