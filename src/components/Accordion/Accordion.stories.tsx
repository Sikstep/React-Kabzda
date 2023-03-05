import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import Accordion from './Accordion';

export default {
  title: 'Controlled Accordion',
  component: Accordion,
}

const callBack = action('accordion mode change event fired')
export const CollapsedMode = () => <Accordion titleValue={'Menu'} collapsed={true} setAcc={callBack}/>;
export const UnCollapsedMode = () => <Accordion titleValue={'Users'} collapsed={false} setAcc={callBack}/>;
export const AccordionChanged = () => {
  const [acc, setAcc] = useState<boolean>(true);
  return <Accordion titleValue={'Accordion Changer'} collapsed={acc} setAcc={setAcc}/>
};


