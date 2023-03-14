import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import Accordion from './Accordion';

export default {
  title: 'Controlled Accordion',
  component: Accordion,
}

const callBack = action('accordion mode change event fired')
export const CollapsedMode = () => <Accordion titleValue={'Menu'} collapsed={true} setAcc={callBack} items={[]}/>;
export const UnCollapsedMode = () => <Accordion titleValue={'Users'} collapsed={false} setAcc={callBack} items={['lol', '1', 'wow', 'Dimich']}/>;
export const AccordionChanged = () => {
  const [acc, setAcc] = useState<boolean>(true);
  return <Accordion titleValue={'Accordion Changer'} collapsed={acc} setAcc={setAcc} items={['lol', '1', 'wow', 'Dimich']}/>
};


