import React from 'react';
import {action} from '@storybook/addon-actions';
import {UncontrolledOnOffButton} from './UncontrolledOnOff';

export default {
  title: 'Uncontrolled OnOff',
  component: UncontrolledOnOffButton,
}

export const unControlledOnOFF = () => <UncontrolledOnOffButton callBack={action('on or off clicked')}/>;
