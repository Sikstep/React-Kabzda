import React, {useState} from 'react';
import {itemType} from '../Select/Select';
import CustomSelectByDimich from './CustomSelectByDimich';
import {action} from '@storybook/addon-actions';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'CustomSelectByDimich',
    // component: Button,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
}

export type newItemsType = {
    title: string
    value: number

}

const newItems: newItemsType[] = [
    {title: 'Minsk', value: 1},
    {title: 'Moscow', value: 2},
    {title: 'Kiev', value: 3},
    {title: 'Warsaw', value: 4},
    {title: 'Taganrog', value: 5},
    {title: 'Mogilev', value: 6},
    {title: 'Hrodno', value: 7},
    {title: 'Brest', value: 8},
    {title: 'Vitebsk', value: 9},
]

export const WithValue = () => {
    const [value, setValue] = useState(null);
    return (
        <CustomSelectByDimich onChange={setValue} items={newItems} value={value}/>
    )
}
export const WithoutValue = () => <CustomSelectByDimich onChange={action('Value changed')} items={newItems}/>;
