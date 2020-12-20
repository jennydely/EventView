import { fetchEventsPending, fetchEventsError, fetchPublicEventsSuccess } from './actions';

function fetchPublicEvents() {
    return dispatch => {
        dispatch(fetchEventsPending());
        fetch('http://api.eventview.online/api/events/public')
            .then(res => res.json())
            .then(res => {
                if (res.error) {
                    throw (res.error);
                }
                dispatch(fetchPublicEventsSuccess(res));
                return res;
            })
            .catch(error => {
                dispatch(fetchEventsError(error));
            })
    }
}

export default fetchPublicEvents;
