import React from 'react';
import './App.css';
import Accordion from "./components/Accordion";



const App = () => {
    // полезное что - то
    console.log('App rendering');
    // обязательно вернуть JSX
    return (
        <div>
            <AppTitle/>
            <Rating/>
            <Accordion/>
            <Rating/>
        </div>
    );
}

function AppTitle() {
    console.log('AppTitle rendering');
    return <>This is APP component</>
}

function Rating() {
    console.log('Rating rendering');
    return (
        <>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </>
    )
}

function Star() {
    console.log('Star rendering');
    return <div>Star</div>
}

export default App;
