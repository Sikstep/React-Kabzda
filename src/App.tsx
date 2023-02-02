import React, {useState} from 'react';
import './App.css';
import {Bankomat} from './components/Bankomat';
import {Button} from './components/Button';

export type setCurrentMoneyType = 'All' | 'Dollars' | 'RUBLS';
const App = () => {
    // полезное что - то

    const [money, setMoney] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ])

    const [currentMoney, setCurrentMoney] = useState<setCurrentMoneyType>('All')

    let moneyFilter = money;
    if (currentMoney !== 'All') {
        moneyFilter = moneyFilter.filter((el) => el.banknots === currentMoney)
    }




    return (
        <div>
            <Bankomat money={moneyFilter}/>
            <Button title={'All'} callBack={setCurrentMoney}/>
            <Button title={'Dollars'} callBack={setCurrentMoney}/>
            <Button title={'RUBLS'} callBack={setCurrentMoney}/>

        </div>
    );
}

export default App;
