import { fetchPrivatePacklistsPending, fetchPrivatePacklistsSuccess, fetchPrivatePacklistsError } from './actions';

function fetchPrivatePacklists({ userToken } = {}) {
    return dispatch => {
        dispatch(fetchPrivatePacklistsPending());
        fetch('http://api.eventview.online/api/packlists', {
            headers: new Headers({
                'Authorization': 'Bearer ' + userToken,
            }),
        })
            .then(res => res.json())
            .then(res => {
                if (res.error) {
                    throw (res.error);
                }
                dispatch(fetchPrivatePacklistsSuccess(res));
                return res;
            })
            .catch(error => {
                dispatch(fetchPrivatePacklistsError(error));
            })
    }
}

export default fetchPrivatePacklists;