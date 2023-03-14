import React from 'react';

type itemType = {
    title: string
    value: any
}
type AccordionPropsType = {
    titleValue: string

    collapsed: boolean
    setAcc: (accordion: boolean) => void
    items: itemType[]
    onClick: (value: any) => void
}

function Accordion({titleValue, collapsed, setAcc, items, onClick}: AccordionPropsType) {

    return <div>
        <AccordionTitle
            titleValue={titleValue}
            collapsed={collapsed}
            setAcc={setAcc}/>
        {collapsed && <AccordionBody item={items} onClick={onClick}/>}
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
    item: itemType[]
    onClick: (value: any) => void
}
function AccordionBody(props: AccordionBodyPropsType) {
    return (
        <ul>
            {props.item.map((el, index) => {
                return (
                    <li onClick={()=>props.onClick(el.value)} key={index}>{el.title}</li>
                )
            })}
        </ul>
    )
}


export default Accordion;