import React from 'react';
import {itemType, Select} from './Select';
import {action} from '@storybook/addon-actions';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'SelectHandMade',
    // component: Button,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
}

const newItems: itemType[] = [
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

export const UncontrolledSelect = () => <Select value={1} items={newItems} onChange={action('Value changed')}/>;

export const FilteredSelectByCountry = () => <Select value={1} items={newItems} onChange={action('Value changed')}/>;

export const FilteredSelectByLetterA = () => <Select value={1} items={newItems} onChange={action('Value changed')}/>;

export const FilteredSelectByGoverment = () => <Select value={1} items={newItems} onChange={action('Value changed')}/>;