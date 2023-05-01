import React, {useEffect, useState} from 'react';

export const UseEffectExample = () => {
    const [fake, setFake] = useState(1);
    const [counter, setCounter] = useState(1);
    console.log('SimpleExample')

    // useEffect(() => {
    //     console.log('useEffect')
    //     document.title = `User ${counter}`;
    //     //api.getUsers().then(’’) - асинхронные запросы на сервер
    //     //setInterval - асинхронный код
    //     //indexedDB - работа с локальной базой данных (localstorage и т.п.)
    //     //document.getElementId - обращение на прямую к DOM (очень редко, но бывает)
    //     //document.title = ‘User ’;
    // })
    useEffect(() => {
        console.log('useEffect every render')
        document.title = `User ${counter}`;
    })

    useEffect(() => {
        console.log('useEffect only first render (componentDidMount')
        document.title = `User ${counter}`;
    },[])

    useEffect(() => {
        console.log('useEffect first render and every counter change')
        document.title = `User ${counter}`;
    }, [counter])

    return (
        <div>
            Hello, {counter} {fake}
            <button onClick={() => setFake(fake + 1)}>fake+</button>
            <button onClick={() => setCounter(counter + 1)}>counter+</button>
        </div>
    );
};
