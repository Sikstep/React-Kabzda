import React from 'react'
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
const UsersSecret = (props: UsersType) => {
    console.log('USERS')
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
}

const Users = React.memo(UsersSecret)
export const Exapmle = () => {
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(['Dimych', 'Valera', 'Artem', 'Katya']);

    const AddUser = () => {

        setUsers([...users, 'Svetlana ' + new Date().getTime()])
    }
    
    return <>
        <button onClick={() => setCounter(previous => previous + 1)}>+</button>
        <button onClick={AddUser}>add user</button>
        <NewMessagesCounter count={counter}/>
        <Users users={users}/>

    </>
}