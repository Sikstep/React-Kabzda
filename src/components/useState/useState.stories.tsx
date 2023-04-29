import React, {useState} from 'react'

export default {
    title: 'useState demo',
}

const initState = () => 0;

export const Example1 = () => {
    const [counter, setCounter] = useState(initState);

    return <>
        <button onClick={ () => setCounter(prev => prev + 1)}>+</button>
        {counter}
    </>


}

