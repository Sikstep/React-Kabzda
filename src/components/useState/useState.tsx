import React, {useState} from 'react';

export const UseStateExample = () => {
    const initValueForUseState = () => 0;
    const [counter, setCounter] = useState<number>(initValueForUseState);

    return (
        <div>
            <button onClick={() => setCounter(prev => prev + 1)}>+</button>
            {counter}
        </div>
    );
};

