export const initState = {
    isLoading: false
}

export const loadingReducer = (state: InitStateType = initState, action: LoadingActionType): InitStateType => { // fix any
    switch (action.type) {
        case 'CHANGE-LOADING-STATUS': {
            return {
                ...state, isLoading: action.status
            }
        }
        default:
            return state
    }
}

export const loadingAC = (status: boolean) => ({type: 'CHANGE-LOADING-STATUS', status} as const) // fix any


export type InitStateType = typeof initState
export type LoadingActionType = ReturnType<typeof loadingAC>