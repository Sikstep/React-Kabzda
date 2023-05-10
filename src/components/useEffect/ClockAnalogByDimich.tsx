import React, {useEffect, useState} from 'react';
import s from '../../App.module.css'

export const AnalogClock = () => {
    const initStateCount = () => new Date();
    const [fake, setFake] = useState(1);
    const [date, setDate] = useState(initStateCount);
    console.log('SetTimeoutExample')

    useEffect(() => {
        const intervalID = setInterval(() => {
            setDate(new Date())
        }, 1000);
        return () => clearInterval(intervalID)
    }, [])


    return (
        <div>
            <button>ChangeClockMode</button>
            <div>Modern Mode</div>
            <br/>
            <ModernClock date={date}/>
            <br/>
            <div>Classic Mode</div>
            <ClassicClock date={date}/>
        </div>
    );
};

type ClockType = {
    date: Date
}
const ModernClock = (props: ClockType) => {
    return (
        <div>Hello, clock: {Intl.DateTimeFormat('ru', {
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
        }).format(props.date)}</div>
    )
}

const ClassicClock = (props: ClockType) => {
    const [hoursDegrees, setHoursDegrees] = useState(0);
    const [minutesDegrees, setMinutesDegrees] = useState(0);
    const [secondsDegrees, setSecondsDegrees] = useState(0);

    useEffect(() => {
        const hours = props.date.getHours();
        const minutes = props.date.getMinutes();
        const seconds = props.date.getSeconds();

        const hoursDegreesCurrent = ((hours / 12) * 360) + 90;
        const minutesDegreesCurrent = ((minutes / 60) * 360) + 90;
        const secondsDegreesCurrent = ((seconds / 60) * 360) + 90;

        setHoursDegrees(hoursDegreesCurrent);
        setMinutesDegrees(minutesDegreesCurrent);
        setSecondsDegrees(secondsDegreesCurrent);

    }, [props.date])


    return (
        <div className={s.clock}>
            <div
                className={s.hourHand}
                style={{transform: `rotate(${hoursDegrees}deg)`}}
            ></div>
            <div
                className={s.minuteHand}
                style={{transform: `rotate(${minutesDegrees}deg)`}}
            ></div>
            <div
                className={s.secondHand}
                style={{transform: `rotate(${secondsDegrees}deg)`}}
            ></div>
        </div>
    )
}