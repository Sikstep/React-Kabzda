import React from 'react';
import {setCurrentMoneyType} from '../App';

type buttonType = {
    title: setCurrentMoneyType,
    callBack: (name: setCurrentMoneyType) => void,
}

export const Button = (props: buttonType) => {
    const onClickHandler = (name: setCurrentMoneyType) => {
        props.callBack(name)
    };


    return (

        <span style={{marginLeft:'35px'}}>
            <button onClick={() => onClickHandler(props.title)}>{props.title}</button>
        </span>
    )
}