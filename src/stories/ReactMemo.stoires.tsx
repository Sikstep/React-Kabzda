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
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
}
export const Exapmle = () => {
    return <>
        <NewMessagesCounter count={10}/>
        <Users users={['Dimych', 'Valera', 'Artem']}/>

    </>
}