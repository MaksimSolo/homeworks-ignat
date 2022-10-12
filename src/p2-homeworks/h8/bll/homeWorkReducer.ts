import {PeopleType} from "../HW8";

export const homeWorkReducer = (state: PeopleType[], action: ActionType): PeopleType[] => {

    switch (action.type) {
        case 'sort':
            const resultArr = [...state].sort((p1, p2) => (p1.name <= p2.name ? -1 : 1))
            return action.payload === 'down' ?
                resultArr : action.payload === 'up' ?
                    resultArr.reverse() : state;
        case 'check':
            return [...state].filter((p) => p.age <= action.payload)
        default:
            return state
    }
}

export const sortPeopleStateAC = (payload: string) => ({type: 'sort', payload} as const)
export const checkPeopleStateAC = (payload: number) => ({type: 'check', payload} as const)

type ActionType = ReturnType<typeof sortPeopleStateAC> | ReturnType<typeof checkPeopleStateAC>