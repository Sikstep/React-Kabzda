import React, {useState} from 'react';
//
type UncontrolledOnOffType = {
    callBack: (value: boolean) => void
    dafaultOn?: boolean
}
// type ButtonType = {
//     title: string
//     selected: boolean
// }

export const UncontrolledOnOffButton = (props: UncontrolledOnOffType) => {
    const [buttonValue, setButtonValue] = useState<boolean>(props.dafaultOn ? props.dafaultOn : false);

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
    const changeValueForOn = () => {
        setButtonValue(true)
        props.callBack(true)
    }

    const changeValueForOff = () => {
        setButtonValue(false)
        props.callBack(false)
    }

    return (
        <div>
            <div style={onStyle} onClick={changeValueForOn}>On
            </div>

            <div style={offStyle} onClick={changeValueForOff}>Off
            </div>
            <div style={indicatorStyle}></div>
            {/*<Button title={'ON'} selected={props.value}/>*/}
            {/*<Button title={'OFF'} selected={!props.value}/>*/}
            {/*<Button title={''} selected={props.value}/>*/}
        </div>
    )
}

// export const Button = (props: ButtonType) => {
//
//     if (props.selected) {
//         return <button className={s.onButton}>{props.title}</button>;
//     } else {
//         return <button className={s.offButton}>{props.title}</button>;
//     }
//     ;
// };