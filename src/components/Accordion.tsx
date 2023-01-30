import React from "react";

type AccordionPropsType = {
    titleValue: string,
    body: Array<number>,
    collapsed: boolean
}

function Accordion(props: AccordionPropsType) {
    console.log('Accordion rendering');
    return <div>
        <AccordionTitle title={props.titleValue}/>
        <AccordionBody body={props.body} collapsed={props.collapsed}/>
    </div>
}

type AccordionTitlePropsType = {
    title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering');
    return <h3>{props.title}</h3>
}

type AccordionBodyPropsType = {
    body: Array<number>,
    collapsed: boolean
}

function AccordionBody(props: AccordionBodyPropsType) {
    console.log('AccordionBody rendering');
    return <> {
        props.collapsed === false && <ul>
            {props.body.map((el) => <li>{el}</li>)}
            {/*<li>{props.body[0]}</li>*/}
            {/*<li>{props.body[1]}</li>*/}
            {/*<li>{props.body[2]}</li>*/}
        </ul>

    }
    </>
}

export default Accordion;