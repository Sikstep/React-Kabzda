import React, {useEffect, useState} from 'react';

export const ResetEffectExample = () => {

    const [counter, setCounter] = useState(1);

    console.log('Component rendered with ' + counter)

    useEffect(()=>{
        console.log('Effect occurred ' + counter)

        return () => {
            console.log('RESET EFFECT ' + counter)
        }
    }, [counter])

    const onClickHandler = () => {
        setCounter(prev => prev + 1)
    }

    return (
        <div>
                hello, counter: {counter} <button onClick={onClickHandler}>Inc</button>
        </div>
    );
};

export const SetTimeoutExampleWithUseEffect = () => {
    const [text, setText] = useState('');

    console.log('Component rendered with ' + text)

    useEffect(()=>{
       //  const handler = (e:KeyboardEvent) => {
       //      console.log(e.key)
       //      setText( text + e.key)
       //  }
       // window.document.addEventListener('keypress', handler)

        setTimeout(() => {
            setText('3 seconds passed')
        }, 3000)
        
        return () => {
           // window.document.removeEventListener('keypress', handler)
        }

    }, [text])

    return <>
        Typed text: {text}
    </>

}