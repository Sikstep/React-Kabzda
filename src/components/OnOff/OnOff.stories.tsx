import React, {useState} from 'react';
import {OnOffButton} from './OnOff';

export default {
  title: 'Controlled OnOff',
  component: OnOffButton,
}

export const SetOn = () => <OnOffButton value={true} setValue={x=>x}/>;
export const SetOff = () => <OnOffButton value={false} setValue={x=>x}/>;
export const OnOffChanging = () => {
  const [value, setValue] = useState(true);
  return <OnOffButton value={value} setValue={setValue}/>
};


