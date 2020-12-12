
export default function eventviewStore(state = [], action) {
    switch (action.type) {
        case "ADD_EVENT":
            return [...state, action.payload]
        case "DELETE_EVENT":
            const index = state.findIndex((event) => event.id === action.payload.id)
            return [...state.slice(0, index), ...state.slice(index + 1)]
        case "UPDATE_EVENT":
            const updateIndex = state.findIndex((event) => event.id === action.payload.id)
            return [
                ...state.slice(0, updateIndex),
                { ...action.payload },
                ...state.slice(updateIndex + 1),
            ]
        default:
            return state
    }

}
