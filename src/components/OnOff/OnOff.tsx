import s from './OnOff.module.css'
import React, {useState} from 'react';

type OnOffType = {
    value?: boolean
}
type ButtonType = {
    title: string
    selected: boolean
}

export const OnOffButton = (props: OnOffType) => {
const [buttonValue, setButtonValue] = useState<boolean>(false);





    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: buttonValue ? 'green' : 'white',
    };
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '2px',
        padding: '2px',
        backgroundColor: buttonValue ? 'white' : 'red',
    };
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: buttonValue ? 'green' : 'red',
    };


    return (
        <div>
            <div style={onStyle} onClick={ () => setButtonValue(true)}>On</div>

            <div style={offStyle} onClick={ () => setButtonValue(false)}>Off</div>
            <div style={indicatorStyle}></div>
            {/*<Button title={'ON'} selected={props.value}/>*/}
            {/*<Button title={'OFF'} selected={!props.value}/>*/}
            {/*<Button title={''} selected={props.value}/>*/}
        </div>
    )
}

export const Button = (props: ButtonType) => {

    if (props.selected) {
        return <button className={s.onButton}>{props.title}</button>;
    } else {
        return <button className={s.offButton}>{props.title}</button>;
    }
    ;
};