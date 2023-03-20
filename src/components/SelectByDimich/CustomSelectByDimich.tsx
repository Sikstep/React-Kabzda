import React, { useState } from 'react';
import {itemType} from '../Select/Select';
import s from './CustomSelectByDimich.module.css'


type CustomSelectByDimichType = {
    value?: number
    onChange: (value: number) => void
    items: itemType[]
}
const CustomSelectByDimich = (props: CustomSelectByDimichType) => {
    const [active, setActive] = useState(true);
    const selectedItem = props.items.find(i => i.value === props.value);
    return (
        <>
            <select>
                <option value="1">Minsk</option>
                <option value="2">Moscow</option>
                <option value="3">Kiev</option>
            </select>
            <div className={s.selectWrapper + ' ' + (active ? s.active : '')}>
                <h3>{selectedItem && selectedItem.title}</h3>
                <div className={s.items}>
                    {props.items.map(el => <div key={el.value}>{el.title}</div>)}
                </div>
            </div>
        </>
    );
};

export default CustomSelectByDimich;