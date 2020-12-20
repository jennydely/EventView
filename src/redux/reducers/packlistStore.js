
export default function eventviewStore(state = [], action) {
    switch (action.type) {
        case "ADD_PACKLIST":
            return [...state, action.payload]
        case "DELETE_PACKLIST":
            const index = state.findIndex((packlist) => packlist.id === action.payload.id)
            return [...state.slice(0, index), ...state.slice(index + 1)]
        case "UPDATE_PACKLIST":
            return [...state, action.payload]
        default:
            return state
    }

}
