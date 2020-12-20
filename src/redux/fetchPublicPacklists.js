import { fetchPublicPacklistsPending, fetchPublicPacklistsError, fetchPublicPacklistsSuccess } from './actions';

function fetchPublicPacklists() {
    return dispatch => {
        dispatch(fetchPublicPacklistsPending());
        fetch('http://api.eventview.online/api/packlists/public')
            .then(res => res.json())
            .then(res => {
                if (res.error) {
                    throw (res.error);
                }
                dispatch(fetchPublicPacklistsSuccess(res));
                return res;
            })
            .catch(error => {
                dispatch(fetchPublicPacklistsError(error));
            })
    }
}

export default fetchPublicPacklists;
