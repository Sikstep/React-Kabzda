import React, {KeyboardEvent, useEffect, useState} from 'react';
import s from './CustomSelectByDimich.module.css'
import {newItemsType} from './CustomSelectByDimich.stories';


type CustomSelectByDimichType = {
    value?: any
    onChange: (value: any) => void
    items: newItemsType[]
}
const CustomSelectByDimich = (props: CustomSelectByDimichType) => {

    const [active, setActive] = useState(false);
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value);

    const selectedItem = props.items.find(i => i.value === props.value);
    const hoveredItem = props.items.find(i => i.value === hoveredElementValue);

    useEffect(() => {
        setHoveredElementValue(props.value)
    }, [props.value])

    const toggleItem = () => setActive((active) => !active)
    const itemCliched = (value: number) => {
        props.onChange(value);
        setActive((active) => !active)
    }
    const onKeyUphandler = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElementValue) {
                    const pretendentElement = e.key === 'ArrowDown' ?
                        props.items[i + 1] :
                        props.items[i - 1];
                    if (pretendentElement) {
                        props.onChange(pretendentElement.value)
                        return;
                    }

                }
            }
            if (!selectedItem) {
                props.onChange(props.items[0].value);
            }
        }
        if (e.key === 'Enter' || e.key === 'Escape') {
            setActive(!active);
        }
    }
    return (
        <>
            <div
                tabIndex={0}
                className={s.select}
                onKeyUp={onKeyUphandler}>
                <span className={s.main} onClick={toggleItem}>{selectedItem && selectedItem.title}</span>
                {
                    active &&
                    <div className={s.items}>
                        {props.items.map(el => <div
                            onMouseEnter={() => setHoveredElementValue(el.value)}
                            className={s.item + ' ' + (hoveredItem === el ? s.selected : '')}
                            key={el.value}
                            onClick={() => itemCliched(el.value)}
                        >
                            {el.title}
                        </div>)}
                    </div>
                }
            </div>
        </>
    );
};

export default CustomSelectByDimich;