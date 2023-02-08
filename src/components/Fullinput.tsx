import React, {ChangeEvent, useState} from 'react';

type FullinputType = {
    addMessage: (title: string) => void
}
export const Fullinput = (props: FullinputType) => {
    let [title, setTitle] = useState('');
    console.log(title)

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {

        setTitle(event.currentTarget.value);

    };

    const onClickBottonHandler = () => {
        props.addMessage(title)
        setTitle('')
    }

    return (
        <div>
            <input value={title} onChange={onChangeInputHandler}/>
            <button onClick={()=>{onClickBottonHandler()}}>+</button>
        </div>
    )
}