import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import Accordion from './Accordion';

export default {
    title: 'Controlled Accordion',
    component: Accordion,
}

const callBack = action('accordion mode change event fired')
const onClickCallack = action('some item was clicked')
export const CollapsedMode = () => <Accordion titleValue={'Menu'} collapsed={true} setAcc={callBack} items={[]} onClick={onClickCallack}/>;
export const UnCollapsedMode = () => <Accordion titleValue={'Users'} collapsed={false} setAcc={callBack}
                                                items={[{title: 'Dimich', value: 1}]} onClick={onClickCallack}/>;
export const AccordionChanged = () => {
    const [acc, setAcc] = useState<boolean>(true);

    return <Accordion
        titleValue={'Accordion Changer'}
        collapsed={acc}
        setAcc={setAcc}
        items={[
            {title: 'Dimich', value: 1},
            {title: 'Valera', value: 2},
            {title: 'Nasty', value: 3},
            {title: 'Tany', value: 4}
        ]}
        onClick={(id) => { alert(`user with ID ${id} should be happy`) }}/>
};


