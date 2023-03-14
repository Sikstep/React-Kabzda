import React, {ChangeEvent, useRef, useState} from 'react';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Input',
    // component: Button,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
}

export const UncontrolledInput = () => <input />;
export const TrackValueOfUncontrelledInput = () => {
const [value, setValue] = useState('');
  const addValue = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)

  }

  return <><input value={value} onChange={addValue}/> --- {value}</>;
}
export const TrackValueOfUncontrelledInputByButtonPress = () => {
  const [value, setValue] = useState('');

  const inputRef = useRef<HTMLInputElement>(null)

  const save = () => {
      const el = inputRef.current as HTMLInputElement
      setValue(el.value)
  }

  return (
      <>
        <input ref={inputRef} id={'inputID'} />
        <button onClick={save}>save</button> - actual value: {value}
      </>);
}
export const ControlledInputWithFixedValue = () => <input value={'it-incubator.by'}/>;

export const ControlledInput = () => {
  
}

export const ControlledCheckbox = () => {
  
}

export const ControlledSelect = () => {
  
}