import { FETCH_PUBLIC_EVENTS_SUCCESS, FETCH_PRIVATE_EVENTS_SUCCESS, ADD_EVENT, DELETE_EVENT, UPDATE_EVENT } from '../actionTypes'

const initialState = {
    publicEvents: [],
    privateEvents: []
};
export default function eventviewStore(state = initialState, action) {
    switch (action.type) {
        case ADD_EVENT:
            const nextStateAdd = { ...state, privateEvents: [...state.privateEvents, action.payload] }
            if (action.payload.visibility === 'public') nextStateAdd.publicEvents = [...state.publicEvents, action.payload]
            return nextStateAdd

        case DELETE_EVENT:
            const nextStateDelete = { ...state }
            const publicIndexDelete = state.publicEvents.findIndex((event) => event.id === action.payload.id)
            const privateIndexDelete = state.privateEvents.findIndex((event) => event.id === action.payload.id)
            if (publicIndexDelete >= 0) nextStateDelete.publicEvents = [...state.publicEvents.slice(0, publicIndexDelete), ...state.publicEvents.slice(publicIndexDelete + 1)]
            if (privateIndexDelete >= 0) nextStateDelete.privateEvents = [...state.privateEvents.slice(0, privateIndexDelete), ...state.privateEvents.slice(privateIndexDelete + 1)]
            return nextStateDelete

        case UPDATE_EVENT:
            const nextStateUpdate = { ...state }
            const publicIndexUpdate = state.publicEvents.findIndex((event) => event.id === action.payload.id)
            const privateIndexUpdate = state.privateEvents.findIndex((event) => event.id === action.payload.id)
            if (publicIndexUpdate >= 0) nextStateUpdate.publicEvents = [...state.publicEvents.slice(0, publicIndexUpdate), { ...action.payload }, ...state.publicEvents.slice(publicIndexUpdate + 1)]
            if (privateIndexUpdate >= 0) nextStateUpdate.privateEvents = [...state.privateEvents.slice(0, privateIndexUpdate), { ...action.payload }, ...state.privateEvents.slice(privateIndexUpdate + 1)]
            return nextStateUpdate

        case FETCH_PUBLIC_EVENTS_SUCCESS:
            return {
                ...state,
                publicEvents: action.payload
            }
        case FETCH_PRIVATE_EVENTS_SUCCESS:
            return {
                ...state,
                privateEvents: action.payload
            }

        default:
            return state
    }

}
