import { SET_FILTER, ADD_EVENT, DELETE_EVENT, EDIT_EVENT, ADD_PACKLIST, DELETE_PACKLIST, EDIT_PACKLIST } from "./actionTypes"


export function setFilter(filter) {
    return {
        type: SET_FILTER,
        payload: { filter }
    }
}

export function addEvent(eventEntry) {
    return {
        type: ADD_EVENT,
        payload: 
            eventEntry
    }
}

export function deleteEvent( id) {
    return {
        type: DELETE_EVENT,
        payload: {
            id
        }
    }
}

export function editEvent(eventUpdate) {
    return {
        type: EDIT_EVENT,
        payload: 
            eventUpdate
        
    }
}

export function addPacklist(packlist) {
    return {
        type: ADD_PACKLIST,
        payload: 
            packlist
        
    }
}

export function deletePacklist( id) {
    return {
        type: DELETE_PACKLIST,
        payload: {
            id
        }
    }
}

export function editPacklist({content, id}) {
    return {
        type: EDIT_PACKLIST,
        payload: {
            id,
            content
        }
    }
}