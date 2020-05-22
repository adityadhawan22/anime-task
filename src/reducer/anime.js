const initalState = {
    loading: false,
    data: []
}

export const anime = (state = initalState, action) => {
    const newState = {...state};
    switch (action.type) {
        case 'LOADING_DATA':
            if( !action.loadMore )
                newState.data = [];
            newState.loading = true;
            return newState;
        case 'GET_ANIME_DATA':
            if( action.loadMore )
                newState.data.results = newState.data.results.concat(action.data.results);
            else
                newState.data = action.data;
            newState.loading = false;
            return newState;
        default:
            return state;
    }
}


export const callApi = (query, pageNo, loadMore = false) => {
    return (dispatch) => {
        dispatch({ type: 'LOADING_DATA', loadMore } );
        fetch(`https://api.jikan.moe/v3/search/anime?q=${query}&limit=16&page=${pageNo}`)
            .then((res) => { if(res.status === 200) return res.json() })
            .catch((err) => {
                console.log("Error")
            })
            .then((data) => {
                dispatch({ type: 'GET_ANIME_DATA', data, loadMore });
            })
            .catch((err) => {
                console.log("Error")
            })
    }
}