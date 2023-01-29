import React from 'react';
import './App.css';

function hello() {

    alert('Hello IT-Kamasutra')
}

// hello();

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

function Accordion() {
    console.log('Accordion rendering');
    return <div>
        <AccordionTitle/>
        <AccordionBody/>
    </div>
}

function AccordionTitle() {
    console.log('AccordionTitle rendering');
    return <div>
        <h3>Меню</h3>
    </div>
}

function AccordionBody() {
    console.log('AccordionBody rendering');
    return <div>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </div>
}

function Star() {
    console.log('Star rendering');
    return <div>Star</div>
}

export default App;
