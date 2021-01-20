import axios from 'axios'

export const FETCHING_QUOTE_START = 'FETCHING_QUOTE_START';
export const FETCHING_QUOTE_SUCCESS = 'FETCHING_QUOTE_SUCCESS';
export const FETCHING_QUOTE_FAIL = 'FETCHING_QUOTE_FAIL';



export const getQuote = () => {
    return (dispatch => {
        dispatch({type:FETCHING_QUOTE_START});

        axios 
        .get(`https://api.tronalddump.io/random/quote`)
        .then(res=> {
            dispatch({type:FETCHING_QUOTE_SUCCESS, payload:res.data.value});
        })
        .catch(err => {
            dispatch({type:FETCHING_QUOTE_FAIL, payload: err.response.message});
        });
        
        
    })
}


const setFetchStart = (name) => {
    return({type:FETCHING_QUOTE_START});
};

const setFetchSuccess = (name) => {
    return({type:FETCHING_QUOTE_SUCCESS});
};

const setFetchFail = (name) => {
    return({type:FETCHING_QUOTE_FAIL});
}