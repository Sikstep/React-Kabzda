import React, {ChangeEvent} from 'react';

type InputType = {
    msg: string
    setMsg: (msg: string) => void
}
export const Input = (props: InputType) => {

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.setMsg(event.currentTarget.value)
    }

    return (
        <input value={props.msg} onChange={onChangeInputHandler}/>
    );
};