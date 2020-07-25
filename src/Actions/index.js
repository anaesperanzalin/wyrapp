import { _getUsers } from "../utils/DATA";

export const fetchPosts=()=>{
    return function(dispatch, getState)
    { const promise= _getUsers
        return{
        type:'FETCH_POSTS',
        payload: promise
    };
    };
}

export const pollQuestion=()=>{
    return{
        type: 'POLL_QUESTION'
    }
};

export const pollResult =()=>{
    return{
        type: 'POLL_RESULT'
    };
}

