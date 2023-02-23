import React from 'react';
//
type OnOffType = {
    value: boolean
    setValue: (value: boolean) => void
}
// type ButtonType = {
//     title: string
//     selected: boolean
// }

export const OnOffButton = (props: OnOffType) => {

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: props.value ? 'green' : 'white',
    };
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '2px',
        padding: '2px',
        backgroundColor: props.value ? 'white' : 'red',
    };
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: props.value ? 'green' : 'red',
    };


    return (
        <div>
            <div style={onStyle} onClick={ () => props.setValue(true)}>On</div>

            <div style={offStyle} onClick={ () => props.setValue(false)}>Off</div>
            <div style={indicatorStyle}></div>

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