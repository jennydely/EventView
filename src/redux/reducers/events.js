import { ADD_EVENT, DELETE_EVENT, EDIT_EVENT } from "../actionTypes";

const initialState = {
    eventArray: [],
};

export default function events(state = initialState, action) {
    switch (action.type) {
        case ADD_EVENT: {
            const eventEntry = action.payload;
            return {
                ...state,
                eventArray: [...state.eventArray, eventEntry]
            }
        };

        case DELETE_EVENT: {
            const { id } = action.payload;
            const index = state.eventArray.findIndex((event) => event.id === id)

            return {
                ...state,
                eventArray: [
                    ...state.eventArray.slice(0, index),
                    ...state.eventArray.slice(index + 1),
                ]

            }

        }

        case EDIT_EVENT: {
            const eventUpdate = action.payload;
            const index = state.eventArray.findIndex((event) => event.id === eventUpdate.id)

            return {
                ...state,
                eventArray: [
                    ...state.eventArray.slice(0, index),
                    { ...eventUpdate },
                    ...state.eventArray.slice(index + 1),
                ]

            }

        }


    
    default:
    return state;
}
}

