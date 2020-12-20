import { fetchPacklistsPending, fetchPacklistsSuccess, fetchPacklistsError } from './actions';

function fetchPacklists() {
    return dispatch => {
        dispatch(fetchPacklistsPending());
        fetch('http://localhost:3000/api/packlists')
            .then(res => res.json())
            .then(res => {
                if (res.error) {
                    throw (res.error);
                }
                dispatch(fetchPacklistsSuccess(res));
                return res;
            })
            .catch(error => {
                dispatch(fetchPacklistsError(error));
            })
    }
}

export default fetchPacklists;