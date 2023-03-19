import React from 'react';
import {itemType, Select} from './Select';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'SelectHandMade',
    // component: Button,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
}

const newItems: itemType[] = [
    { title: 'One', value: 1 },
    { title: 'Two', value: 2 },
    { title: 'Three', value: 3 },
    { title: 'Four', value: 4 },
]

export const UncontrolledSelect = () => <Select value={1} items={newItems} />;

