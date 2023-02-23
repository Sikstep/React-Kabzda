import React from 'react';

type AccordionPropsType = {
    titleValue: string

    collapsed: boolean
    setAcc: (accordion: boolean) => void
}

function Accordion({titleValue, collapsed, setAcc}: AccordionPropsType) {

    return <div>
        <AccordionTitle titleValue={titleValue} collapsed={collapsed} setAcc={setAcc}/>
        { collapsed && <AccordionBody/> }
    </div>
}

function AccordionTitle (props:AccordionPropsType) {

    return <h3 onClick={() => props.setAcc(!props.collapsed) }>{props.titleValue}</h3>
}

// type AccordionBodyPropsType = {
//     body: Array<number>,
//     collapsed: boolean
// }

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