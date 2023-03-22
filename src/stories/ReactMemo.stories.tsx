import {useState} from 'react'

export default {
    title: 'React.memo demo',
}
type UsersType = {
    users: string[]
}
type MewMessagesCounterType = {
    count: number
}
const NewMessagesCounter = (props: MewMessagesCounterType) => {
    return <div>{props.count}</div>
}
const Users = (props: UsersType) => {
    console.log('USERS')
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
}
export const Exapmle = () => {
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(['Dimych', 'Valera', 'Artem']);

    return <>
        <button onClick={() => setCounter(previous => previous + 1)}>+</button>
        <NewMessagesCounter count={counter}/>
        <Users users={users}/>

    </>
}