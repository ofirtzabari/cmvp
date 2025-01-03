import axios from 'axios';

export const loadUser = () => async (dispatch) => {
    try {
        dispatch({type: 'LoadUserRequest'});
        const {data} = await axios.get(REACT_APP_SERVER_URL+"/user/getuser", {withCredentials: true});
        dispatch({type: 'LoadUserSuccess', payload: data});
    } catch (error) {
        dispatch({type: 'LoadUserFailure', payload: error.response.data.message});
    }
};