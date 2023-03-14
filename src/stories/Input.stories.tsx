import React, {ChangeEvent, useRef, useState} from 'react';
import {action, actions} from '@storybook/addon-actions';

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
  const [parentValue, setParentValue] = useState('');

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
    }
  return (
      <input value={parentValue} onChange={onChangeHandler}/>
  )
}

export const ControlledCheckbox = () => {

    const [parentValue, setParentValue] = useState(true);

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked)
    }
    return (
        <input type={'checkbox'} checked={parentValue} onChange={onChangeHandler}/>
    )

}

export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>('2');

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    }
    return (
        <select value={parentValue} onChange={onChangeHandler}>
            <option>None</option>
            <option value={'1'}>Minsk</option>
            <option value={'2'}>Moscow</option>
            <option value={'3'}>Kiev</option>
        </select>
    )

}