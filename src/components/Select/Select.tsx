import React, {KeyboardEvent, useState} from 'react';
import s from './Select.module.css'

export type itemType = {
    title: string
    value: number
    country: string
    population: number
}

export type SelectPropsType = {
    value: number
    items: itemType[]
    onChange?: () => void
}

export function Select(props: SelectPropsType) {
    const [collapse, setCollapse] = useState(false);
    const [currentValue, setCurrentValue] = useState(props.value);


    const onClickMapHandler = (selectedValue: number) => {
        setCurrentValue((oldItem) => oldItem = selectedValue);
        if (props.onChange) {
            props.onChange()
        }
        setCollapse(false)
    }
    const onClickDivHandler = () => {
        if (props.onChange) {
            props.onChange()
        }
        setCollapse(true)
    }

    const onKeyDawnHover = (e: KeyboardEvent<HTMLDivElement>) => {
        // if (e.key === 'ArrowDown') {
        //
        // }
    }

    return (

        <div>
            {collapse ?
                props.items.map(el => (<div key={el.value}
                                            className={s.selectlist}
                                            onClick={() => onClickMapHandler(el.value)}>{el.title}</div>)) :
                <div className={s.select}
                     onClick={onClickDivHandler}
                     onKeyDown={(e) => onKeyDawnHover(e)}
                >{props.items[currentValue - 1].title}
                </div>
            }
        </div>
    );
};