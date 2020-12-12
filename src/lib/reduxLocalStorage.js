const mockEvents = require('../mockDB/events.json')
const mockPacklists = require('../mockDB/packlists.json')

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) {
            return {
                events: mockEvents,
                packlists: mockPacklists
            };
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return {
            events: mockEvents,
            packlists: mockPacklists
        };
    }
};

export const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch {
        // ignore write errors
    }
};