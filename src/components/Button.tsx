import React from 'react';

type ButtonType = {
    name: string,
    callBack: () => void,
}


export const Button = (props: ButtonType) => {

    const universalButton = () => {
        props.callBack()
    }

    return (
        <button onClick={universalButton}>{props.name}</button>
    )
}