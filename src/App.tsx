import React from 'react';
import classes from './App.module.css';
import {Clock} from './components/useEffect/Clock';


const App = () => {
    // полезное что - то
    // let [message, setMessage] = useState([
    //     {message: 'message1'},
    //     {message: 'message2'},
    //     {message: 'message3'},
    // ]);
    //
    //
    // const [msg, setMsg] = useState('');
    // const [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    // const [accordion, setAccordion] = useState(true);
    // const [onOff, setOnOff] = useState(true);
    // const addMessage = (title: string) => {
    //     const newMessage = {message: title};
    //     setMessage([newMessage, ...message])
    // }
    //
    // const newMessageAdd = () => {
    //     addMessage(msg);
    //     setMsg('');
    // }


    return (
        <div className={classes.App}>

            {/*<Accordion titleValue={'--Users--'} collapsed={accordion} setAcc={setAccordion}/>*/}
            {/*<Rating value={ratingValue} onClick={setRatingValue}/>*/}
            {/*<UncontrolledRating />*/}
            {/*<UncontrolledOnOffButton callBack={setOnOff}/>*/}
            {/*<UncontrelledAccordion titleValue={'Menu'}/>*/}
            {/*<Select value={1} items={newItems}/>*/}
            {/*<UseStateExample/>*/}
            {/*<UseEffectExample/>*/}
            {/*<SetTimeoutExample/>*/}
            <Clock/>

        </div>
    );
}

export default App;
