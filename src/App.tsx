import React from 'react';
import './App.css';
import Accordion from './components/Accordion';
import {Rating} from './components/Rating/Rating';
import {Button} from './components/Button';


const App = () => {
    // полезное что - то

    const sayLog = () => {
        return console.log('Click')
    }

    const foo1 = (name: string, age: number, address: string) => {
        return console.log(name, age, address)
    }

    // обязательно вернуть JSX
    return (
        <div>
            <PageTitle title={'ВЛАДИК МОЙ ЛЮБИМЫЙ СЫНУЛИК!!!'}/>
            <PageTitle title={'My friends'}/>
            Article 1
            <Rating value={3}/>
            <Accordion titleValue={'Menu'} body={[1, 2, 3]} collapsed={true}/>
            <Accordion titleValue={'Users'} body={[1, 2, 3]} collapsed={false}/>

            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
            <Button name={'My univers Buttom'} callBack={sayLog}/>
            <Button name={'Buttom foo1'} callBack={() => foo1('Kosty', 93, 'Live in Minsk')}/>
        </div>
    );
}


function PageTitle(props: PageTitlePropsType) {

    console.log('PageTitle rendering');
    return <h1>{ props.title }</h1>
}

type PageTitlePropsType = {
    title: string
}
export default App;
