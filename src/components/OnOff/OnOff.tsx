import s from './OnOff.module.css'

type OnOffType = {
    value: boolean
}
type ButtonType = {
    title: string
    selected: boolean
}

export const OnOffButton = (props: OnOffType) => {
    return (
        <div>
            <Button title={'ON'} selected={props.value}/>
            <Button title={'OFF'} selected={!props.value}/>
            <Button title={''} selected={props.value}/>
        </div>
    )
}

export const Button = (props: ButtonType) => {

    if (props.selected) {
        return <button className={s.onButton}>{props.title}</button>;
    } else {
        return <button className={s.offButton}>{props.title}</button>;
    }
    ;
};