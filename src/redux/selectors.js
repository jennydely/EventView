import { VISIBILITY_FILTERS } from "../constants";

export const getEventState = store => store.events;

export const getEvents = store => getEventState(store).events

export const getPacklistsState = store => store.packlists;

export const getPacklists = store => getPacklistsState(store).packlists;


/**
 * example of a slightly more complex selector
 * select from store combining information from multiple reducers
 */


export const getPacklistsByVisibilityFilter = (store, visibilityFilter) => {
    const allPacklists = getPacklists(store);
    switch (visibilityFilter) {
        case VISIBILITY_FILTERS.CHOSEN:
            return allPacklists.filter(packlist => packlist.chosen);
        case VISIBILITY_FILTERS.NOTCHOSEN:
            return allPacklists.filter(packlist => !packlist.chosen);
        case VISIBILITY_FILTERS.ALL:
        default:
            return allPacklists;
    }
};