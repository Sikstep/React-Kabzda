type ReducerType = ReturnType<typeof ActionCreater>
const ActionCreater = () => {
    return {
        type: 'TOGGLE-COLLAPSED'
    }
}

type StateType = {
    collapsed: boolean
}
export const reducer = (state: StateType, action: ReducerType):StateType => {

    switch (action.type) {
        case 'TOGGLE-COLLAPSED':
            const copyState = {...state}
            copyState.collapsed = !copyState.collapsed;
            return copyState;
        default:
            throw new Error('Bad action type')
    }
    return state;
}