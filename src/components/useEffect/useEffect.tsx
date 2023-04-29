import React, {useEffect, useState} from 'react';

export const UseEffectExample = () => {
    const [counter, setCounter] = useState(1);
    console.log('SimpleExample')

    useEffect(()=> {
        console.log('useEffect')

    },[])

    return (
        <div>
             Hello, {counter}
            <button onClick={() => setCounter(counter + 1)}>+</button>
        </div>
    );
};
