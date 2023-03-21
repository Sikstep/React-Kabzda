type ReducerType = ReturnType<typeof ActionCreater>
const ActionCreater = () => {
    return {
        type: 'TOGGLE-COLLAPSED'
    }
}

type StateType = {
    collapsed: boolean
}
export const reducer = (state: StateType, action: ReducerType): StateType => {

    switch (action.type) {
        case 'TOGGLE-COLLAPSED':
            return {
                ...state,
                collapsed: !state.collapsed
            };
        default:
            throw new Error('Bad action type')
    }
    return state;
}