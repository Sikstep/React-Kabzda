import React, {useMemo, useState} from 'react';
import {itemType, Select} from './Select';
import {action} from '@storybook/addon-actions';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'SelectHandMade',
    // component: Button,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
}

const newItems: itemType[] = [
    {title: 'Minsk', value: 1, country: 'Belarus', population: 2500000},
    {title: 'Moscow', value: 2, country: 'Russia', population: 15000000},
    {title: 'Kiev', value: 3, country: 'Ukrain', population: 13000000},
    {title: 'Warsaw', value: 4, country: 'Poland', population: 11000000},
    {title: 'Taganrog', value: 5, country: 'Russia', population: 2500000},
    {title: 'Mogilev', value: 6, country: 'Belarus', population: 300000},
    {title: 'Hrodno', value: 7, country: 'Belarus', population: 1200000},
    {title: 'Brest', value: 8, country: 'Belarus', population: 1000000},
    {title: 'Vitebsk', value: 9, country: 'Belarus', population: 700000},
]

export const UncontrolledSelect = () => <Select value={1} items={newItems} onChange={action('Value changed')}/>;

