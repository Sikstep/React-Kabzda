import React from 'react';
import {action} from '@storybook/addon-actions';
import {UncontrolledOnOffButton} from './UncontrolledOnOff';

export default {
  title: 'Uncontrolled OnOff',
  component: UncontrolledOnOffButton,
}

export const OnMode = () => <UncontrolledOnOffButton callBack={action('clickOn or Off')} dafaultOn={true}/>;
export const OffMode = () => <UncontrolledOnOffButton callBack={action('clickOn or Off')} dafaultOn={false}/>;
// export const BugMode = () => <div>Unsync when change defaultValue when already rendered</div>;
export const DefaultInputValue = () => <input defaultValue={'Yo'} />;