import { SET_FILTER, ADD_EVENT, UPDATE_EVENT, DELETE_EVENT, FETCH_EVENTS_PENDING, FETCH_PUBLIC_EVENTS_SUCCESS, FETCH_PRIVATE_EVENTS_SUCCESS, FETCH_EVENTS_ERROR, ADD_PACKLIST, UPDATE_PACKLIST, DELETE_PACKLIST, FETCH_PRIVATE_PACKLISTS_PENDING, FETCH_PRIVATE_PACKLISTS_SUCCESS, FETCH_PRIVATE_PACKLISTS_ERROR, FETCH_PUBLIC_PACKLISTS_PENDING, FETCH_PUBLIC_PACKLISTS_SUCCESS, FETCH_PUBLIC_PACKLISTS_ERROR } from "./actionTypes";

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

export const addPacklist = content => ({
    type: ADD_PACKLIST,
    payload:
        content
});

export const updatePacklist = content => ({
    type: UPDATE_PACKLIST,
    payload:
        content
});

export const deletePacklist = id => ({
    type: DELETE_PACKLIST,
    payload:
        id
});

export function fetchPrivatePacklistsPending() {
    return {
        type: FETCH_PRIVATE_PACKLISTS_PENDING
    }
}

export function fetchPrivatePacklistsSuccess(packlists) {
    return {
        type: FETCH_PRIVATE_PACKLISTS_SUCCESS,
        payload: packlists
    }
}

export function fetchPrivatePacklistsError(error) {
    return {
        type: FETCH_PRIVATE_PACKLISTS_ERROR,
        error: error
    }
}

export function fetchPublicPacklistsPending() {
    return {
        type: FETCH_PUBLIC_PACKLISTS_PENDING
    }
}

export function fetchPublicPacklistsSuccess(packlists) {
    return {
        type: FETCH_PUBLIC_PACKLISTS_SUCCESS,
        payload: packlists
    }
}

export function fetchPublicPacklistsError(error) {
    return {
        type: FETCH_PUBLIC_PACKLISTS_ERROR,
        error: error
    }
}