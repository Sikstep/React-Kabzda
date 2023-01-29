import React from 'react';
import './App.css';

function hello() {

    alert('Hello IT-Kamasutra')
}

// hello();

const App = () => {
    // полезное что - то

    // обязательно вернуть JSX
    return (
        <div>
            I love you
            <Rating/>
            <Rating/>
            <Accordion/>
        </div>
    );
}

function Rating() {

    return (
        <div>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </div>
    )
}

function Accordion() {

    return <div>
        <h3>Меню</h3>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </div>
}

function Star ()  {
    return <div>Star</div>
}

export default App;
