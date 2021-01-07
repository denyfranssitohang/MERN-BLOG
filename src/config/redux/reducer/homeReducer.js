//__ initial state home __\\
const initialStateHome = {
    dataBlog: [],
}

//__ Home Reducer __\\
const homeReducer = (state = initialStateHome, action) => {
    if(action.type === 'UPDATE_DATA_BLOG'){
        return {
            ...state,
            dataBlog: action.payload,
        }
    }
    return state;
}
//__ End Home Reducer __\\

export default homeReducer;