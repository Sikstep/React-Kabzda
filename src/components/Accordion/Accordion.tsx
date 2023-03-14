import React from 'react';

type AccordionPropsType = {
    titleValue: string

    collapsed: boolean
    setAcc: (accordion: boolean) => void
    items: string[]
}

function Accordion({titleValue, collapsed, setAcc, items}: AccordionPropsType) {

    return <div>
        <AccordionTitle
            titleValue={titleValue}
            collapsed={collapsed}
            setAcc={setAcc}/>
        {collapsed && <AccordionBody item={items}/>}
    </div>
}

type AccordionTitleType = {
    titleValue: string

    collapsed: boolean
    setAcc: (accordion: boolean) => void
}
function AccordionTitle(props: AccordionTitleType) {

    return <h3 onClick={(event) => props.setAcc(!props.collapsed)}>{props.titleValue}</h3>
}

// type AccordionBodyPropsType = {
//     body: Array<number>,
//     collapsed: boolean
// }

type AccordionBodyPropsType = {
    item: string[]
}
function AccordionBody(props: AccordionBodyPropsType) {
    return (
        <ul>
            {props.item.map((el, index) => {
                return (
                    <li key={index}>{el}</li>
                )
            })}
        </ul>
    )
}


export default Accordion;