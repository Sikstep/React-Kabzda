import React, {ChangeEvent, useState} from 'react';

export const Fullinput = () => {
    let [title, setTitle] = useState('');
    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {

    };
    return (
        <div>
            <input onChange={onChangeInputHandler}/>
            <button onClick={()=>{}}>+</button>
        </div>
    )
}