import React, {useState} from 'react';
import {itemType} from '../Select/Select';
import s from './CustomSelectByDimich.module.css'


type CustomSelectByDimichType = {
    value?: any
    onChange: (value: any) => void
    items: itemType[]
}
const CustomSelectByDimich = (props: CustomSelectByDimichType) => {

    const [active, setActive] = useState(false);
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value);

    const selectedItem = props.items.find(i => i.value === props.value);
    const hoveredItem = props.items.find(i => i.value === hoveredElementValue);
    const toggleItem = () => setActive((active) => !active)
    const itemCliched = (value: number) => {
        props.onChange(value);
        setActive((active) => !active)
    }
    const onKeyPresshandler = (e: number) => {
        console.log('pressed')
    }
    return (
        <>
            <div
                tabIndex={0}
                className={s.select}>
                <span className={s.main} onClick={toggleItem}>{selectedItem && selectedItem.title}</span>
                {
                    active &&
                    <div className={s.items}>
                        {props.items.map(el => <div
                            onMouseEnter={()=>setHoveredElementValue(el.value)}
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