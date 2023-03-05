import React, {useState} from 'react';
import {OnOffButton} from './OnOff';
import {action} from '@storybook/addon-actions';

export default {
  title: 'Controlled OnOff',
  component: OnOffButton,
}

const callBack = action('on or off clicked')
export const SetOn = () => <OnOffButton value={true} setValue={callBack}/>;
export const SetOff = () => <OnOffButton value={false} setValue={callBack}/>;
export const OnOffChanging = () => {
  const [value, setValue] = useState(true);
  return <OnOffButton value={value} setValue={setValue}/>
};


