import { FETCH_PUBLIC_PACKLISTS_SUCCESS, FETCH_PRIVATE_PACKLISTS_SUCCESS, ADD_PACKLIST, DELETE_PACKLIST, UPDATE_PACKLIST } from '../actionTypes'

const initialState = {
    publicPacklists: [],
    privatePacklists: []
};
export default function eventviewStore(state = initialState, action) {
    switch (action.type) {
        case ADD_PACKLIST:
            const nextStateAdd = { ...state, privatePacklists: [...state.privatePacklists, action.payload] }
            if (action.payload.visibility === 'public') nextStateAdd.publicPacklists = [...state.publicPacklists, action.payload]
            return nextStateAdd

        case DELETE_PACKLIST:
            const nextStateDelete = { ...state }
            const publicIndexDelete = state.publicPacklists.findIndex((event) => event.id === action.payload.id)
            const privateIndexDelete = state.privatePacklists.findIndex((event) => event.id === action.payload.id)
            if (publicIndexDelete >= 0) nextStateDelete.publicPacklists = [...state.publicPacklists.slice(0, publicIndexDelete), ...state.publicPacklists.slice(publicIndexDelete + 1)]
            if (privateIndexDelete >= 0) nextStateDelete.privatePacklists = [...state.privatePacklists.slice(0, privateIndexDelete), ...state.privatePacklists.slice(privateIndexDelete + 1)]
            return nextStateDelete

        case UPDATE_PACKLIST:
            const nextStateUpdate = { ...state }
            const publicIndexUpdate = state.publicPacklists.findIndex((event) => event.id === action.payload.id)
            const privateIndexUpdate = state.privatePacklists.findIndex((event) => event.id === action.payload.id)
            if (publicIndexUpdate >= 0) nextStateUpdate.publicPacklists = [...state.publicPacklists.slice(0, publicIndexUpdate), { ...action.payload }, ...state.publicPacklists.slice(publicIndexUpdate + 1)]
            if (privateIndexUpdate >= 0) nextStateUpdate.privatePacklists = [...state.privatePacklists.slice(0, privateIndexUpdate), { ...action.payload }, ...state.privatePacklists.slice(privateIndexUpdate + 1)]
            return nextStateUpdate

        case FETCH_PUBLIC_PACKLISTS_SUCCESS:
            return {
                ...state,
                publicPacklists: action.payload
            }
        case FETCH_PRIVATE_PACKLISTS_SUCCESS:
            return {
                ...state,
                privatePacklists: action.payload
            }

        default:
            return state
    }

}
