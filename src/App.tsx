import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
    return (
        <div>
          <Header />
            <Tehnologies />

        </div>
    );
}

const Tehnologies = () => {
    return (<div>
        <ul>
            <li>css</li>
            <li>html</li>
            <li>react</li>
            <li>react2</li>
        </ul>
    </div>
    );
}
const Header = () => {
    return (<div>
            <a href={'#s'}>Home</a>
            <a href={'#s'}>News Feed</a>
            <a href={'#s'}>Messages</a>
        </div>
            );
}
export default App;
