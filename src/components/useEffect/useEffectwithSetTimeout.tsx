import React, {useEffect, useState} from 'react';

export const SetTimeoutExample = () => {
    const [fake, setFake] = useState(1);
    const [counter, setCounter] = useState(1);
    console.log('SetTimeoutExample')

   setTimeout(()=> {
    document.title = `User ${counter}`
   }, 1000)

    return (
        <div>
            Hello, {counter} {fake}
            <button onClick={() => setFake(fake + 1)}>fake+</button>
            <button onClick={() => setCounter(counter + 1)}>counter+</button>
        </div>
    );
};
