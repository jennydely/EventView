import { SET_FILTER, ADD_EVENT, DELETE_EVENT, EDIT_EVENT, ADD_PACKLIST, DELETE_PACKLIST, EDIT_PACKLIST } from "./actionTypes"

let nextEventId =0
let nextPacklistId =0

export function setFilter(filter) {
    return {
        type: SET_FILTER,
        payload: { filter }
    }
}

export function addEvent(content) {
    return {
        type: ADD_EVENT,
        payload: {
            id: ++nextEventId,
            content
        }
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

export function editEvent({content, id}) {
    return {
        type: EDIT_EVENT,
        payload: {
            id,
            content
        }
    }
}

export function addPacklist(content) {
    return {
        type: ADD_PACKLIST,
        payload: {
            id: ++nextPacklistId,
            content
        }
    }
}

export function deletePacklistt( id) {
    return {
        type: DELETE_PACKLIST,
        payload: {
            id
        }
    }
}

export function editPacklistt({content, id}) {
    return {
        type: EDIT_PACKLIST,
        payload: {
            id,
            content
        }
    }
}