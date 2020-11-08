import { ADD_PACKLIST, DELETE_PACKLIST, EDIT_PACKLIST } from "../actionTypes";

const initialState = {
    packlists: [],
};

export default function PACKLISTs(state = initialState, action) {
    switch (action.type) {
        case ADD_PACKLIST: {
            const { id, content } = action.payload;
            return {
                ...state,
                packlists: [...state.packlists,{...content, id}],

            }
        };

        case DELETE_PACKLIST: {
            const { id } = action.payload;
            const index = state.packlists.findIndex((packlist) => packlist.id === id)

            return {
                ...state,
                packlists: [
                    ...state.packlists.slice(0, index),
                    ...state.packlists.slice(index + 1),
                ]

            }

        }

        case EDIT_PACKLIST: {
            const { id, packlistUpdate } = action.payload;
            const index = state.packlists.findIndex((packlist) => packlist.id === id)

            return {
                ...state,
                packlists: [
                    ...state.packlists.slice(0, index),
                    { ...packlistUpdate },
                    ...state.packlists.slice(index + 1),
                ]

            }

        }

        default:
    return state;
}
}

