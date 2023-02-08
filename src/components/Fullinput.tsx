import React, {ChangeEvent, useState} from 'react';

type ButtonType = {
    buttomName: string
    buttomClick: (title: string) => void

}

export const Fullinput = (props: ButtonType) => {

    const [msg, setMsg] = useState('');

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setMsg(event.currentTarget.value)
    }

    const onClickButtonHandler = () => {
        props.buttomClick(msg);
        setMsg('')
    }

    return (
    <div>
        <input value={msg} onChange={onChangeInputHandler}/>
        <button onClick={onClickButtonHandler}>{props.buttomName}</button>
    </div>
    );
};