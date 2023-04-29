import React, {useReducer} from 'react';
import {reducer} from './reducer';

type UncontrolledAccordionPropsType = {
    titleValue: string

    // collapsed: boolean
}


export const UncontrelledAccordion = (props: UncontrolledAccordionPropsType) => {

    // const [onAccordion, setOnAccordion] = useState(true);
    const [state, dispatch] = useReducer(reducer, { collapsed: false })

    return <div>
        {/*<UncontrolledAccordionTitle title={props.titleValue} setFunc={setOnAccordion} onAccord={onAccordion}/>*/}
        <UncontrolledAccordionTitle title={props.titleValue} setFunc={() => dispatch({type: 'TOGGLE-COLLAPSED'})}
                                    onAccord={state.collapsed}/>
        {state.collapsed && <UncontrolledAccordionBody/>}
    </div>
}

type AccordionTitlePropsType = {
    title: string
    setFunc: (accord: boolean) => void
    onAccord: boolean
}

function UncontrolledAccordionTitle(props: AccordionTitlePropsType) {

    return <h3 onClick={() => {
        props.setFunc(!props.onAccord)
    }}>{props.title}</h3>
}

type UncontrolledAccordionBodyPropsType = {
    body: Array<number>,
    // collapsed: boolean
}

function UncontrolledAccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}


