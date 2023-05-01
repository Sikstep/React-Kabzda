import React, {useEffect, useState} from 'react';

export const SetTimeoutExample = () => {
    const initStateCount = () => new Date();
    const [fake, setFake] = useState(1);
    const [date, setDate] = useState(initStateCount);
    console.log('SetTimeoutExample')

    useEffect(() => {
        setInterval(() => {
            setDate(new Date())
        }, 1000)
    }, [])


    return (
        <div>
            Hello, clock: {Intl.DateTimeFormat('ru', {hour: 'numeric', minute: 'numeric', second: 'numeric'}).format(date)}
            {/*<button onClick={() => setFake(fake + 1)}>fake+</button>*/}
            {/*<button onClick={() => setCounter(counter + 1)}>counter+</button>*/}
        </div>
    );
};
