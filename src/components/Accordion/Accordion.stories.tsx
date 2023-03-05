import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import Accordion from './Accordion';

export default {
  title: 'Controlled Accordion',
  component: Accordion,
}

const callBack = action('on or off clicked')
export const shouldBeAccordion = () => <Accordion titleValue={'Accordion'} collapsed={true} setAcc={callBack}/>;
export const shouldBeNotAccordion = () => <Accordion titleValue={'No Accordion'} collapsed={false} setAcc={callBack}/>;
export const AccordionChanged = () => {
  const [acc, setAcc] = useState(true);
  return <Accordion titleValue={'Accordion Changer'} collapsed={acc} setAcc={setAcc}/>
};


