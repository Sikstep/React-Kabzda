import React from 'react';

type BankomatType = {
    money: Array<BankomatObj>,


}

type BankomatObj = {
    banknots: string,
    value: number,
    number: string,
}


export const Bankomat = (props: BankomatType) => {



    return (
        <>
            <ul>
                {props.money.map((el, index) => {
                    return (
                        <li key={index}>
                            <span>{el.banknots} </span>
                            <span>{el.value} </span>
                            <span>{el.number}</span>
                        </li>
                    );
                })}
            </ul>
        </>
    )
}
