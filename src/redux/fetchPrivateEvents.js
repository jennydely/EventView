import { fetchEventsPending, fetchEventsError, fetchPrivateEventsSuccess } from './actions';

function fetchPrivateEvents({ userToken } = {}) {
    return dispatch => {
        dispatch(fetchEventsPending());
        fetch('http://api.eventview.online/api/events', {
            headers: new Headers({
                'Authorization': 'Bearer ' + userToken,
            }),
        })
            .then(res => res.json())
            .then(res => {
                if (res.error) {
                    throw (res.error);
                }
                dispatch(fetchPrivateEventsSuccess(res));
                return res;
            })
            .catch(error => {
                dispatch(fetchEventsError(error));
            })
    }
}

export default fetchPrivateEvents;

    //https://stackoverflow.com/questions/30203044/using-an-authorization-header-with-fetch-in-react-native?fbclid=IwAR08nmAaXOTURKAt120elZIPjyT6lwcefCQYZyhBebWX9MSyMJ96-kG0E1Q