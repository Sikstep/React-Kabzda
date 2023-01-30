import React from 'react';
import './App.css';
import Accordion from "./components/Accordion";
import {Rating} from "./components/Rating/Rating";


const App = () => {
    // полезное что - то
    console.log('App rendering');
    // обязательно вернуть JSX
    return (
        <div>
            <PageTitle title={"This is APP component"}/>
            <PageTitle title={"My friends"}/>
            Article 1
            <Rating value={3}/>
            <Accordion title={'Menu'} body={[1, 2, 3]}/>
            <Accordion title={'Meny'} body={[1, 2, 3]}/>
            Article 2
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
        </div>
    );
}

function PageTitle(props: any) {

    console.log('PageTitle rendering');
    return <h1>{ props.title }</h1>
}

export default App;
