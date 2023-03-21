import React, {useReducer, useState} from 'react';

type UncontrolledAccordionPropsType = {
    titleValue: string

    // collapsed: boolean
}

type ReducerType = ReturnType<typeof ActionCreater>
const ActionCreater = () => {
    return {
        type: 'TOGGLE-COLLAPSED'
    }
}
const reducer = (state: boolean, action: ReducerType) => {

    switch (action.type) {
        case 'TOGGLE-COLLAPSED':
            return !state;
        default:
            return state;
    }

}
export const UncontrelledAccordion = (props: UncontrolledAccordionPropsType) => {
    console.log('Uncontrolled Accordion rendering')
    // const [onAccordion, setOnAccordion] = useState(true);
    const [collapsed, dispatch] = useReducer(reducer, false)

    return <div>
        {/*<UncontrolledAccordionTitle title={props.titleValue} setFunc={setOnAccordion} onAccord={onAccordion}/>*/}
        <UncontrolledAccordionTitle title={props.titleValue} setFunc={() => dispatch({type: 'TOGGLE-COLLAPSED'})}
                                    onAccord={collapsed}/>
        {collapsed && <UncontrolledAccordionBody/>}
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


