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
    const selectedItem = props.items.find(i => i.value === props.value);
    const toggleItem = () => setActive((active) => !active)
    const itemCliched = (value: number) => {
        props.onChange(value);
    }

    return (
        <>
            <div className={s.select}>
                <span className={s.main} onClick={toggleItem}>{selectedItem && selectedItem.title}</span>
                {
                    active &&
                    <div className={s.items}>
                        {props.items.map(el => <div
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