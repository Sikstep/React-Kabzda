import React from 'react';

type AccordionPropsType = {
    titleValue: string

    collapsed: boolean
    setAcc: (accordion: boolean) => void
}

function Accordion(props: AccordionPropsType) {

    return <div>
        <AccordionTitle title={props.titleValue} />
        { props.collapsed && <AccordionBody/> }
    </div>
}

type AccordionTitlePropsType = {
    title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {

    return <h3 >{props.title}</h3>
}

type AccordionBodyPropsType = {
    body: Array<number>,
    collapsed: boolean
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}


export default Accordion;