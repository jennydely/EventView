import { SET_FILTER, ADD_EVENT, UPDATE_EVENT, DELETE_EVENT, FETCH_EVENTS_PENDING, FETCH_PUBLIC_EVENTS_SUCCESS, FETCH_PRIVATE_EVENTS_SUCCESS, FETCH_EVENTS_ERROR, TOGGLE_PACKLIST, FETCH_PACKLISTS_PENDING, FETCH_PACKLISTS_SUCCESS, FETCH_PACKLISTS_ERROR } from "./actionTypes";

let nextEventId = 0;

export const setFilter = filter => ({ type: SET_FILTER, payload: { filter } });

export const addEvent = content => ({
    type: ADD_EVENT,
    payload:
        content
});

export const updateEvent = content => ({
    type: UPDATE_EVENT,
    payload:
        content
});

export const deleteEvent = id => ({
    type: DELETE_EVENT,
    payload:
        id
});

export function fetchEventsPending() {
    return {
        type: FETCH_EVENTS_PENDING
    }
}

export function fetchPublicEventsSuccess(events) {
    return {
        type: FETCH_PUBLIC_EVENTS_SUCCESS,
        payload: events
    }
}
export function fetchPrivateEventsSuccess(events) {
    return {
        type: FETCH_PRIVATE_EVENTS_SUCCESS,
        payload: events
    }
}

export function fetchEventsError(error) {
    return {
        type: FETCH_EVENTS_ERROR,
        error: error
    }
}

export const togglePacklist = id => ({
    type: TOGGLE_PACKLIST,
    payload: { id }
});

export function fetchPacklistsPending() {
    return {
        type: FETCH_PACKLISTS_PENDING
    }
}

export function fetchPacklistsSuccess(packlists) {
    return {
        type: FETCH_PACKLISTS_SUCCESS,
        payload: packlists
    }
}

export function fetchPacklistsError(error) {
    return {
        type: FETCH_PACKLISTS_ERROR,
        error: error
    }
}