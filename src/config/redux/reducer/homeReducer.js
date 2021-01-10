//__ initial state home __\\
const initialStateHome = {
    dataBlog: [],
    page: {
        currentPage: 1,
        totalPage: 1
    }
}

//__ Home Reducer __\\
const homeReducer = (state = initialStateHome, action) => {
    if(action.type === 'UPDATE_DATA_BLOG'){
        return {
            ...state,
            dataBlog: action.payload,
        }
    }

    //__ pagination __\\
    if(action.type === 'UPDATE_PAGE')
        return {
            ...state,
            page: action.payload
        }
    //__ end pagination __\\
    
    return state;
}
//__ End Home Reducer __\\

export default homeReducer;