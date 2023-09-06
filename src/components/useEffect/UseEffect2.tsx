import React, {useEffect, useState} from 'react';

export const ResetEffectExample = () => {

    const [counter, setCounter] = useState(1);

    console.log('setTimeoutExample')

    useEffect(()=>{

    },[])

    return (
        <div>
                hello, counter: {counter}
        </div>
    );
};

