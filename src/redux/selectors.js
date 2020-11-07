import { EVENT_FILTERS } from "../constants";

export const getEventState = store => store.events;

export const getEvents = store => getEventState(store).events

export const getPacklistsState = store => store.packlists;

export const getPacklists = store => getPacklistsState(store).packlists;


/**
 * example of a slightly more complex selector
 * select from store combining information from multiple reducers
 */


export const getEventByFilter = (store, eventFilters) => {
  const allEvents = getEvents(store);
  switch (eventFilters) {
    case EVENT_FILTERS.CHOSEN:
      return allEvents.EventFilters(event => event.chosen);
    case EVENT_FILTERS.NOTCHOSEN:
      return allEvents.EventFilters(event => !event.chosen);
    case EVENT_FILTERS.ALL:
    default:
      return allEvents;
  }
};

