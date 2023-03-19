import React, {MouseEvent, useState} from 'react';

export type itemType = {
    title: string
    value: number
}

export type SelectPropsType = {
    value: number
    items: itemType[]
    onChange?: (value: number) => void
}

export function Select(props: SelectPropsType) {
    const [collapse, setCollapse] = useState(false);
    const [currentValue, setCurrentValue] = useState(props.items[props.value].title);


    const onClickMapHandler = (e: MouseEvent<HTMLDivElement>) => {
        setCurrentValue(e.currentTarget.innerHTML);
        setCollapse(false)
    }
    const onClickDivHandler = () => {
        setCollapse(true)
    }

    return (

        <div>
            {collapse ?
                props.items.map(el => (<div onClick={(e) => onClickMapHandler(e)}>{el.title}</div>)) :
                <div onClick={onClickDivHandler}>{currentValue}</div>}
        </div>
    );
};